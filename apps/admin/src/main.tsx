/* eslint-disable turbo/no-undeclared-env-vars */
import '@repo/ui/globals.css';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { AxiosError } from 'axios';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { toast, Toaster } from 'sonner';
import { ThemeProvider } from './context/theme-context';
import { routeTree } from './routeTree.gen';
import { useAuthStore } from './stores/authStore';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error) => {
                if (import.meta.env.DEV) console.log({ failureCount, error });

                if (failureCount >= 0 && import.meta.env.DEV) return false;
                if (failureCount > 3 && import.meta.env.PROD) return false;

                return !(error instanceof AxiosError && [401, 403].includes(error.response?.status ?? 0));
            },
            refetchOnWindowFocus: import.meta.env.PROD,
            staleTime: 10 * 1000 // 10s
        },
        mutations: {
            onError: error => {
                if (error instanceof AxiosError) {
                    if (error.response?.status === 304) {
                        toast.info('Nội dung không được sửa đổi!');
                    }
                }
            }
        }
    },
    queryCache: new QueryCache({
        onError: error => {
            if (error instanceof AxiosError) {
                if (error.response?.status === 401) {
                    toast.info('Phiên đã hết hạn!');
                    useAuthStore.getState().reset();
                    const redirect = `${router.history.location.href}`;
                    router.navigate({ to: '/sign-in', search: { redirect } });
                }
                if (error.response?.status === 500) {
                    toast.error('Lỗi máy chủ nội bộ!');
                    router.navigate({ to: '/500' });
                }
                if (error.response?.status === 403) {
                    router.navigate({ to: '/403', replace: true });
                }
            }
        }
    })
});

const router = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
                    <RouterProvider router={router} />
                    <Toaster position='top-center' richColors />
                </ThemeProvider>
            </QueryClientProvider>
        </StrictMode>
    );
}

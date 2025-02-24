import GeneralError from '@/features/errors/general-error';
import NotFoundError from '@/features/errors/not-found-error';
import { Toaster } from '@repo/ui/components/toaster';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: () => {
        return (
            <>
                <Outlet />
                <Toaster />
                <ReactQueryDevtools buttonPosition='bottom-left' />
                <TanStackRouterDevtools position='bottom-right' />
            </>
        );
    },
    notFoundComponent: NotFoundError,
    errorComponent: GeneralError
});

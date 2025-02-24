import { SearchProvider } from '@/context/search-context';
import { ScrollArea } from '@repo/ui/components/scroll-area';
import { SidebarProvider } from '@repo/ui/components/sidebar';
import Cookies from 'js-cookie';
import { ReactNode } from 'react';
import { AppSidebar } from './AppSidebar';
import { cn } from '@repo/ui/lib/utils';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const defaultOpen = Cookies.get('sidebar:state') !== 'false';
    return (
        <SearchProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
                <AppSidebar />
                <ScrollArea
                    id='content'
                    className={cn(
                        'ml-auto w-full max-w-full',
                        'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
                        'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
                        'transition-[width] duration-200 ease-linear',
                        'flex h-svh flex-col',
                        'group-data-[scroll-locked=1]/body:h-full',
                        'group-data-[scroll-locked=1]/body:has-[main.fixed-main]:h-svh'
                    )}
                >
                    {children}
                </ScrollArea>
            </SidebarProvider>
        </SearchProvider>
    );
};

export default DashboardLayout;

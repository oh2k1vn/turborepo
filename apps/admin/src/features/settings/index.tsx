import { Outlet } from '@tanstack/react-router';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { Search } from '@/components/search';
import { ThemeSwitch } from '@/components/theme-switch';
import { Header } from '@/components/layouts/header';
import { Main } from '@/components/layouts/main';
import { Separator } from '@repo/ui/components/separator';
import SidebarNav from './components/sidebar-nav';
import { User, Wrench, Palette, SquareCheck, FolderCheck } from 'lucide-react';

export default function Settings() {
    return (
        <>
            {/* ===== Top Heading ===== */}
            <Header>
                <Search />
                <div className='ml-auto flex items-center space-x-4'>
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>
            </Header>

            <Main fixed>
                <div className='space-y-0.5'>
                    <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>Cài đặt</h1>
                    <p className='text-muted-foreground'>Quản lý cài đặt tài khoản của bạn và đặt tùy chọn e-mail.</p>
                </div>
                <Separator className='my-4 lg:my-6' />
                <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <aside className='top-0 lg:sticky lg:w-1/5'>
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className='flex w-full overflow-y-hidden p-1 pr-4'>
                        <Outlet />
                    </div>
                </div>
            </Main>
        </>
    );
}

const sidebarNavItems = [
    {
        title: 'Hồ sơ',
        icon: <User size={18} />,
        href: '/settings'
    },
    {
        title: 'Tài khoản',
        icon: <Wrench size={18} />,
        href: '/settings/account'
    },
    {
        title: 'Giao diện',
        icon: <Palette size={18} />,
        href: '/settings/appearance'
    },
    {
        title: 'Thông báo',
        icon: <SquareCheck size={18} />,
        href: '/settings/notifications'
    },
    {
        title: 'Cấu hình',
        icon: <FolderCheck size={18} />,
        href: '/settings/display'
    }
];

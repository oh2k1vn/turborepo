import { Header } from '@/components/layouts/header';
import { Main } from '@/components/layouts/main';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { Search } from '@/components/search';
import { ThemeSwitch } from '@/components/theme-switch';

export default function Customers() {
    return (
        <>
            <Header fixed>
                <Search />
                <div className='ml-auto flex items-center space-x-4'>
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>
            </Header>
            <Main>
                <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
                    <div>
                        <h2 className='text-2xl font-bold tracking-tight'>Khách hàng</h2>
                        <p className='text-muted-foreground'>Quản lý người dùng của bạn và vai trò của họ tại đây.</p>
                    </div>
                </div>
            </Main>
        </>
    );
}

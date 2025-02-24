import { Header } from '@/components/layouts/header';
import { Main } from '@/components/layouts/main';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { Search } from '@/components/search';
import { ThemeSwitch } from '@/components/theme-switch';

export default function Orders() {
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
                        <h2 className='text-2xl font-bold tracking-tight'>Đơn hàng</h2>
                        <p className='text-muted-foreground'>Đây là danh sách nhiệm vụ của bạn trong tháng này!</p>
                    </div>
                </div>
            </Main>
        </>
    );
}

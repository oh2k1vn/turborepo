import { Header } from '@/components/layouts/header';
import { Main } from '@/components/layouts/main';
import { TopNav } from '@/components/layouts/top-nav';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { Search } from '@/components/search';
import { ThemeSwitch } from '@/components/theme-switch';
import { Button } from '@repo/ui/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/ui/components/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui/components/tabs';
import { Overview } from './components/overview';
import { RecentSales } from './components/recent-sales';

const topNav = [
    {
        title: 'Tổng quan',
        href: '/overview',
        isActive: true,
        disabled: false
    },
    {
        title: 'Sản phẩm',
        href: '/products',
        isActive: false,
        disabled: false
    },
    {
        title: 'Đơn hàng',
        href: '/orders',
        isActive: false,
        disabled: false
    },
    {
        title: 'Khách hàng',
        href: '/customers',
        isActive: false,
        disabled: false
    },
    {
        title: 'Khuyến mãi',
        href: '/discounts',
        isActive: false,
        disabled: false
    },
    {
        title: 'Cài đặt',
        href: '/settings',
        isActive: false,
        disabled: false
    }
];

export default function Dashboard() {
    return (
        <>
            {/* ===== Top Heading ===== */}
            <Header>
                <TopNav links={topNav} />
                <div className='ml-auto flex items-center space-x-4'>
                    <Search />
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>
            </Header>

            {/* ===== Main ===== */}
            <Main>
                <div className='mb-2 flex items-center justify-between space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight uppercase'>Tổng quan</h1>
                    <div className='flex items-center space-x-2'>
                        <Button>Download</Button>
                    </div>
                </div>
                <Tabs orientation='vertical' defaultValue='overview' className='space-y-4'>
                    <div className='w-full overflow-x-auto pb-2'>
                        <TabsList>
                            <TabsTrigger value='overview'>Tổng quan</TabsTrigger>
                            <TabsTrigger value='analytics' disabled>
                                Phân tích
                            </TabsTrigger>
                            <TabsTrigger value='reports' disabled>
                                Phân tích
                            </TabsTrigger>
                            <TabsTrigger value='notifications' disabled>
                                Thông báo
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value='overview' className='space-y-4'>
                        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-sm font-medium'>Tổng doanh thu</CardTitle>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        className='h-4 w-4 text-muted-foreground'
                                    >
                                        <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold'>500.000.000.000Đ</div>
                                    <p className='text-xs text-muted-foreground'>+20.1% từ tháng trước</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-sm font-medium'>Đăng ký</CardTitle>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        className='h-4 w-4 text-muted-foreground'
                                    >
                                        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                                        <circle cx='9' cy='7' r='4' />
                                        <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold'>+2350</div>
                                    <p className='text-xs text-muted-foreground'>+180.1% từ tháng trước</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-sm font-medium'>Sales</CardTitle>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        className='h-4 w-4 text-muted-foreground'
                                    >
                                        <rect width='20' height='14' x='2' y='5' rx='2' />
                                        <path d='M2 10h20' />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold'>+12,234</div>
                                    <p className='text-xs text-muted-foreground'>+19% từ tháng trước</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-sm font-medium'>Đang hoạt động</CardTitle>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        className='h-4 w-4 text-muted-foreground'
                                    >
                                        <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold'>+573</div>
                                    <p className='text-xs text-muted-foreground'>+201 kể từ giờ trước</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
                            <Card className='col-span-1 lg:col-span-4'>
                                <CardHeader>
                                    <CardTitle>Tổng quan</CardTitle>
                                </CardHeader>
                                <CardContent className='pl-2'>
                                    <Overview />
                                </CardContent>
                            </Card>
                            <Card className='col-span-1 lg:col-span-3'>
                                <CardHeader>
                                    <CardTitle>Bán hàng gần đây</CardTitle>
                                    <CardDescription>Bạn đã bán được 265 sản phẩm trong tháng này.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentSales />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </Main>
        </>
    );
}

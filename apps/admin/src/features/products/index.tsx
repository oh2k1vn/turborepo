import { fetchProducts, Product } from '@/api/productApi';
import { DataTable } from '@/components/DataTable';
import { Header } from '@/components/layouts/header';
import { Main } from '@/components/layouts/main';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { Search } from '@/components/search';
import { ThemeSwitch } from '@/components/theme-switch';
import { columns } from './components/columns';
import { ProductsCreateImportButtons } from './components/products-create-import-button';
import ProductsProvider from './context/products-context';
import { ProductsDialogs } from './components/products-dialogs';

export default function Products() {
    return (
        <ProductsProvider>
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
                        <h2 className='text-2xl font-bold tracking-tight'>Sản phẩm</h2>
                        <p className='text-muted-foreground'>Đây là danh sách nhiệm vụ của bạn trong tháng này!</p>
                    </div>
                    <ProductsCreateImportButtons />
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <DataTable columns={columns} queryKey={['getAllProducts']} queryFn={() => fetchProducts<Product[]>('/admin/ProductAdmin/GetAllProduct')} />
                </div>
            </Main>

            <ProductsDialogs />
        </ProductsProvider>
    );
}

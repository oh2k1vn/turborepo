import { useProducts } from '../context/products-context';
import { ImportDialog } from './products-import-dialog';

export function ProductsDialogs() {
    const { open, setOpen } = useProducts();
    return (
        <>
            <ImportDialog key='tasks-import' open={open === 'import'} onOpenChange={() => setOpen('import')} />
        </>
    );
}

import { Button } from '@repo/ui/components/button';
import { useProducts } from '../context/products-context';

import { Download, Plus } from 'lucide-react';

export function ProductsCreateImportButtons() {
    const { setOpen } = useProducts();
    return (
        <div className='flex gap-2'>
            <Button variant='outline' className='space-x-1' onClick={() => setOpen('import')}>
                <span>Import</span> <Download size={18} />
            </Button>
            <Button className='space-x-1' onClick={() => setOpen('create')}>
                <span>Create</span> <Plus size={18} />
            </Button>
        </div>
    );
}

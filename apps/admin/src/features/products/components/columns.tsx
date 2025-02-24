import { Product } from '@/api/productApi';
import { CustomColumnDef } from '@/components/DataTable';
import LongText from '@/components/long-text.tsx';
import { Badge } from '@repo/ui/components/badge';
import { Checkbox } from '@repo/ui/components/checkbox';

export const columns: CustomColumnDef<Product, unknown>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
                onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
                aria-label='Select all'
                className='translate-y-[2px]'
            />
        ),
        cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={value => row.toggleSelected(!!value)} aria-label='Select row' className='translate-y-[2px]' />,
        enableSorting: false
    },
    {
        accessorKey: 'imgUrl',
        header: 'Hình ảnh',
        cell: ({ row }) => <img src={row.original.imgUrl} alt={row.original.name} className='h-16 w-16 object-cover rounded-md' />
    },
    {
        accessorKey: 'name',
        header: 'Tên sản phẩm',
        meta: { type: 'text' },
        cell: ({ row }) => <LongText className='font-medium'>{row.original.name}</LongText>
    },
    {
        accessorKey: 'brand',
        header: 'Thương hiệu',
        cell: ({ row }) => <span className='text-gray-600'>{row.original.brand}</span>
    },
    {
        accessorKey: 'price',
        header: 'Giá sản phẩm ($)',
        cell: ({ row }) => (
            <div className='flex flex-col gap-1'>
                <p>
                    <span className='text-slate-700 font-bold'>Giá gốc</span>: <span className='line-through'>{row.original.price}</span>
                </p>
                <p className=' font-bold'>
                    <span className='text-slate-700'>Giá khuyến mãi</span>: <span className='text-red-500'>{row.original.discountedPrice}</span>
                </p>
            </div>
        )
    },
    {
        accessorKey: 'tags',
        header: 'Tags',
        meta: { type: 'select' },
        cell: ({ row }) => {
            const tags = JSON.parse(row.original.tags);
            return (
                <div className='flex flex-wrap gap-2'>
                    {tags.map((tag: string) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
            );
        }
    },
    {
        accessorKey: 'shortDescription',
        header: 'Mô tả ngắn',
        cell: ({ row }) => <p className='text-sm text-gray-700 line-clamp-2 w-40'>{row.original.shortDescription}</p>
    }
];

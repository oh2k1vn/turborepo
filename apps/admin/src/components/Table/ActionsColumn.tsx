import { Button } from '@repo/ui/components/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@repo/ui/components/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { Code, Edit, MoreHorizontal, Trash } from 'lucide-react';

export const ActionsColumn = <TData extends object>(setSelectedRowData: (data: TData | null) => void): ColumnDef<TData> => ({
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
        const data = row.original;
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                        <span className='sr-only'>Open menu</span>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem className='cursor-pointer'>
                        <Edit className='mr-2 h-4 w-4' /> Chỉnh sửa
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-red-500 bg-red-50 cursor-pointer'>
                        <Trash className='mr-2 h-4 w-4' /> Xóa
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedRowData(data)} className='cursor-pointer'>
                        <Code className='mr-2 h-4 w-4' /> Xem JSON
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }
});

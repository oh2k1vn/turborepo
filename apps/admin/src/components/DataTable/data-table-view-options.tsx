import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { Button } from '@repo/ui/components/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@repo/ui/components/dropdown-menu';
import { Table } from '@tanstack/react-table';

interface DataTableViewOptionsProps<TData> {
    table: Table<TData>;
}

export function DataTableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
    if (!table.getAllColumns().filter(column => typeof column.accessorFn !== 'undefined' && column.getCanHide()).length) return;
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='sm' className='ml-auto hidden h-8 lg:flex'>
                    <MixerHorizontalIcon className='mr-2 h-4 w-4' />
                    Xem
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-[150px]'>
                <DropdownMenuLabel>Ẩn/Hiện Cột</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                    .getAllColumns()
                    .filter(column => typeof column.accessorFn !== 'undefined' && column.getCanHide())
                    .map(column => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                checked={column.getIsVisible()}
                                onCheckedChange={value => column.toggleVisibility(!!value)}
                                className='truncate'
                            >
                                {typeof column.columnDef.header === 'function' ? column?.id : column.columnDef.header}
                            </DropdownMenuCheckboxItem>
                        );
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

import { Button } from '@repo/ui/components/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@repo/ui/components/dropdown-menu';
import { Input } from '@repo/ui/components/input';
import { Column, Table } from '@tanstack/react-table';
import { Filter } from 'lucide-react';
import { DataTableViewOptions } from './data-table-view-options';
import { useTable } from './table-context';
import React from 'react';
import { CustomColumnDef } from '.';

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
    const filterableColumns = table.getAllColumns().filter(col => (col.columnDef as CustomColumnDef<TData, unknown>)?.meta?.type);

    const { setColumn } = useTable();
    const [isOpen, setIsOpen] = React.useState(false);

    const handleColumnClick = (column: Column<TData, unknown>) => {
        setColumn(column.id);
        setIsOpen(false);
    };

    return (
        <div className='flex items-center justify-between'>
            <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
                <Input
                    placeholder='Tìm kiếm sẩn phẩm...'
                    value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                    onChange={event => table.getColumn('name')?.setFilterValue(event.target.value)}
                    className='h-8 w-[150px] lg:w-[250px]'
                />

                {filterableColumns.length > 0 && (
                    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
                        <DropdownMenuTrigger asChild>
                            <Button variant='default' size='sm' className='ml-auto hidden h-8 lg:flex'>
                                <Filter />
                                Lọc
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='start' className='w-[250px]'>
                            {filterableColumns.map(column => (
                                <div
                                    key={column.id}
                                    onClick={() => handleColumnClick(column)}
                                    className='w-full p-2 cursor-pointer hover:bg-gray-200 rounded transition-colors duration-300 text-sm capitalize'
                                >
                                    {typeof column.columnDef.header === 'function' ? column.id : column.columnDef.header}
                                </div>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    );
}

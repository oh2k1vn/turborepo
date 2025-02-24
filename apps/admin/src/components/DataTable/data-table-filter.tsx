import { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';
import { Button } from '@repo/ui/components/button';
import { useTable } from './table-context';

interface DataTableFilterProps<TData> {
    table: Table<TData>;
}

export function DataTableFilter<TData>({ table }: DataTableFilterProps<TData>) {
    const { setColumn } = useTable();
    const filters = table.getState().columnFilters;
    if (!filters.length) return null;

    return (
        <div className='flex items-center justify-between p-2 bg-gray-100 rounded-md'>
            <div className='flex-1 flex flex-wrap items-center gap-2'>
                {filters.map(filter => (
                    <div
                        key={filter.id}
                        className='flex items-center gap-2 pl-3 text-sm bg-white border border-dashed hover:border-solid hover:border-primary transition-all duration-300 rounded-md shadow-sm cursor-pointer'
                    >
                        <div className='flex items-center gap-2 flex-1 py-1' onClick={() => setColumn(filter.id)}>
                            <span className='font-medium capitalize transition-colors duration-300'>{filter.id}:</span>
                            <span className='text-gray-900 '>{String(filter.value)}</span>
                        </div>

                        <button
                            className='text-gray-500 hover:text-red-500 hover:bg-red-200 p-1 rounded-full transition-colors duration-300'
                            onClick={e => {
                                e.stopPropagation();
                                table.getColumn(filter.id)?.setFilterValue(undefined);
                            }}
                        >
                            <X className='w-4 h-4' />
                        </button>
                    </div>
                ))}
            </div>
            <Button variant='outline' size='sm' onClick={() => table.resetColumnFilters()}>
                Xóa tất cả
            </Button>
        </div>
    );
}

export default DataTableFilter;

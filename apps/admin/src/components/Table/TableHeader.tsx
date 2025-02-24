import { Button } from '@repo/ui/components/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@repo/ui/components/dropdown-menu';
import { Input } from '@repo/ui/components/input';
import MultiSelect from '@repo/ui/components/multi-select';
import { Table } from '@tanstack/react-table';
import { Filter } from 'lucide-react';
import React from 'react';
import { FilterOption } from '.';
import { FilterDialog } from './FilterDialog';

interface TableHeaderProps<TData> {
    table: Table<TData>;
    filterOptions?: FilterOption[]; // Định nghĩa chính xác kiểu là mảng
}

const TableHeader = <TData,>({ table, filterOptions = [] }: TableHeaderProps<TData>) => {
    const [selectedFilter, setSelectedFilter] = React.useState<FilterOption | null>(null);
    const showFilterHeader = filterOptions.filter(filter => filter.isActive && !filter.popup);
    const showFilterPopup = filterOptions.filter(filter => filter.isActive && filter.popup);

    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='flex-1 flex gap-2 items-center'>
                    {showFilterHeader.map((filter, index) => {
                        switch (filter.type) {
                            case 'text':
                                return (
                                    <Input
                                        key={index}
                                        placeholder={filter?.placeholder || 'Nhập từ khóa ...'}
                                        value={(table.getColumn(filter.field)?.getFilterValue() as string) || ''}
                                        onChange={event => table.getColumn(filter.field)?.setFilterValue(event.target.value)}
                                        className='max-w-sm'
                                    />
                                );
                            case 'multiselect':
                                return <MultiSelect values={[{ key: '1', value: '2' }]} onChange={event => table.getColumn(filter.field)?.setFilterValue(event)} />;
                            default:
                                return;
                        }
                    })}
                    {showFilterHeader.length > 0 && <Button variant='default'>Tìm kiếm</Button>}
                    {showFilterPopup.length > 0 && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='default'>
                                    Bộ lọc khác <Filter />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                                {showFilterPopup.map(filter => (
                                    <DropdownMenuItem key={Array.isArray(filter.field) ? filter.field.join(',') : filter.field} onClick={() => setSelectedFilter(filter)}>
                                        {filter.label || (Array.isArray(filter.field) ? filter.field.join(', ') : filter.field)}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline' className='ml-auto'>
                            Ẩn Cột
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        {table
                            .getAllColumns()
                            .filter(column => column.getCanHide())
                            .map(column => (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className='capitalize'
                                    checked={column.getIsVisible()}
                                    onCheckedChange={value => column.toggleVisibility(!!value)}
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <FilterDialog selectedFilter={selectedFilter} onClose={() => setSelectedFilter(null)} />
        </>
    );
};

export default TableHeader;

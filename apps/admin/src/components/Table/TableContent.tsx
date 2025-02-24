import { Button } from '@repo/ui/components/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@repo/ui/components/table';
import { flexRender, Table as ReactTable } from '@tanstack/react-table';
import { RefreshCcw } from 'lucide-react';

interface TableContentProps<TData> {
    table: ReactTable<TData>;
    modifiedColumnsLength: number;
    loading?: boolean;
    refetch?: () => void;
    isRefetching?: boolean;
    fetchTime?: number;
}

export const TableContent = <TData extends object>({ table, loading, modifiedColumnsLength, isRefetching, fetchTime, refetch }: TableContentProps<TData>) => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-1'>
                    <Button variant='link' disabled={isRefetching} onClick={refetch} className='p-0 h-fit w-fit'>
                        <RefreshCcw className='w-4 h-4 text-primary cursor-pointer' />
                    </Button>
                    <div className='text-sm select-none'>Tìm thấy 10000 dòng dữ liệu {fetchTime}s</div>
                </div>
                {table.getFilteredSelectedRowModel().rows.length > 0 && (
                    <div className='text-sm text-muted-foreground'>Đang chọn {table.getFilteredSelectedRowModel().rows.length} hàng.</div>
                )}
            </div>
            <Table className='border rounded shadow'>
                <TableHeader className='bg-gray-200 '>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableHead key={header.id} className='px-4 h-10 text-left'>
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {loading ? (
                        <TableRow>
                            <TableCell colSpan={modifiedColumnsLength} className='h-72 font-semibold text-slate-500 text-center space-y-2'>
                                <div className='w-8 h-8 mx-auto border-4 border-gray-300 border-t-primary rounded-full animate-spin'></div>
                            </TableCell>
                        </TableRow>
                    ) : table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map(row => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id} className='px-4 py-2'>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={modifiedColumnsLength} className='h-72 font-semibold text-slate-500 text-center space-y-2'>
                                <img src='https://cdn-icons-png.flaticon.com/256/11172/11172333.png' alt='' className='size-40 mx-auto' />
                                <p>Không tìm thấy dữ liệu.</p>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
};

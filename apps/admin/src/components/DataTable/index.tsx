import { ResponseAPI } from '@/types/ResponseAPI';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@repo/ui/components/table';
import { useQuery } from '@tanstack/react-query';
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState
} from '@tanstack/react-table';
import React from 'react';
import { DataTableDialog } from './data-table-dialog';
import DataTableFilter from './data-table-filter';
import { DataTablePagination } from './data-table-pagination';
import { DataTableToolbar } from './data-table-toolbar';
import TableProvider from './table-context';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    queryKey: string[];
    queryFn: () => Promise<ResponseAPI<TData[]>>;
}

export type CustomColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
    meta?: {
        type?: 'text' | 'boolean' | 'select' | 'multiSelect';
    };
};

export function DataTable<TData, TValue>({ columns, queryKey, queryFn }: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = React.useState<SortingState>([]);

    const { data, isLoading, isError, error } = useQuery({
        queryKey,
        queryFn,
        select: res => res.data
    });

    const table = useReactTable({
        data: data || [],
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues()
    });

    return (
        <TableProvider>
            <div className='space-y-4'>
                <DataTableToolbar table={table} />
                <DataTableFilter table={table} />
                <div className='rounded-md border'>
                    {isLoading ? (
                        <div className='p-4 text-center'>Đang tải...</div>
                    ) : isError ? (
                        <div className='p-4 text-center text-red-500'>Error: {error?.message}</div>
                    ) : (
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map(headerGroup => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <TableHead key={header.id} colSpan={header.colSpan}>
                                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                            </TableHead>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map(row => (
                                        <TableRow key={row.id}>
                                            {row.getVisibleCells().map(cell => (
                                                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className='h-24 text-center py-10'>
                                            <img className='size-40 mx-auto' src="https://cdn-icons-png.flaticon.com/512/260/260236.png" alt="" />
                                            <p className='mt-4 font-semibold'>Không tìm thấy kết quả.</p>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    )}
                </div>
                <DataTablePagination table={table} />
                <DataTableDialog table={table} />
            </div>
        </TableProvider>
    );
}

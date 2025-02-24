import { useQuery } from '@tanstack/react-query';
import { ColumnDef, getCoreRowModel, PaginationState, useReactTable, VisibilityState } from '@tanstack/react-table';
import axios from 'axios';
import React from 'react';
import { ActionsColumn } from './ActionsColumn';
import { SelectColumn } from './SelectColumn';
import { TableContent } from './TableContent';
import TableHeader from './TableHeader';
import TableJSON from './TableJSON';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@repo/ui/components/pagination';
import TablePagination from './TablePagination';

type TableFilterProps<TData> = {
    columns: ColumnDef<TData>[];
    filters?: FilterOption[];
    loading?: boolean;
    endPoint: string;
};

export interface FilterOption {
    options?: {
        key: string;
        value: string;
    }[];
    minDate?: Date;
    maxDate?: Date;
    label?: string;
    field: string;
    placeholder?: string;
    type: 'text' | 'multiselect' | 'daterange' | 'radioActive';
    popup: boolean;
    isActive: boolean;
}

const TableFilter = <TData extends object>({ endPoint, columns, filters }: TableFilterProps<TData>) => {
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [selectedRowData, setSelectedRowData] = React.useState<TData | null>(null);
    const [fetchTime, setFetchTime] = React.useState<number>(0);

    // 🔥 State quản lý phân trang
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0, // Trang đầu tiên (bắt đầu từ 0)
        pageSize: 10 // Số item trên mỗi trang
    });

    // 🔥 Gọi API sử dụng React Query
    const { data, isLoading, refetch, isRefetching } = useQuery({
        queryKey: ['tableData', endPoint, pagination.pageIndex, pagination.pageSize], // Theo dõi pagination
        queryFn: async () => {
            const startTime = Date.now();
            const response = await axios.get<TData[]>(endPoint, {
                params: {
                    offset: pagination.pageIndex * pagination.pageSize,
                    limit: pagination.pageSize
                }
            });
            setFetchTime(Date.now() - startTime);
            return response.data;
        },
        placeholderData: previousData => previousData // Giữ dữ liệu cũ khi gọi lại API
    });

    // 🛠 Thêm cột chọn & cột actions
    const modifiedColumns: ColumnDef<TData>[] = [SelectColumn<TData>(), ...columns, ActionsColumn<TData>(setSelectedRowData)];

    const table = useReactTable({
        data: data || [],
        columns: modifiedColumns,
        getCoreRowModel: getCoreRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            columnVisibility,
            rowSelection
        },
        manualPagination: true, // Bật phân trang server-side
        pageCount: data && data.length === pagination.pageSize ? pagination.pageIndex + 2 : pagination.pageIndex + 1, // Kiểm tra xem có dữ liệu để sang trang tiếp không
        onPaginationChange: setPagination // Cập nhật khi chuyển trang
    });

    return (
        <div className='space-y-4'>
            <TableHeader table={table} filterOptions={filters} />
            <TableContent table={table} modifiedColumnsLength={modifiedColumns.length} loading={isLoading} refetch={refetch} isRefetching={isRefetching} fetchTime={fetchTime} />
            <TablePagination
                pageIndex={pagination.pageIndex}
                pageCount={table.getPageCount()}
                pageSize={pagination.pageSize}
                setPagination={setPagination}
                dataLength={data ? data.length : 0}
            />
            <TableJSON rowData={selectedRowData} onClose={() => setSelectedRowData(null)} />
        </div>
    );
};

export default TableFilter;

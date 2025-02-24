import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
  } from '@radix-ui/react-icons'
import { Button } from '@repo/ui/components/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/components/select'
  import { Table } from '@tanstack/react-table'

  
  interface DataTablePaginationProps<TData> {
    table: Table<TData>
  }
  
  export function DataTablePagination<TData>({
    table,
  }: DataTablePaginationProps<TData>) {
    return (
      <div
        className='flex items-center justify-between overflow-clip px-2'
        style={{ overflowClipMargin: 1 }}
      >
        <div className='hidden flex-1 text-sm text-muted-foreground sm:block'>
          {table.getFilteredSelectedRowModel().rows.length} đến{' '}
          {table.getFilteredRowModel().rows.length} hàng đã được chọn..
        </div>
        <div className='flex items-center sm:space-x-6 lg:space-x-8'>
          <div className='flex items-center space-x-2'>
            <p className='hidden text-sm font-medium sm:block'>Hàng trên mỗi trang</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value))
              }}
            >
              <SelectTrigger className='h-8 w-[70px]'>
                <SelectValue placeholder={table.getState().pagination.pageSize} />
              </SelectTrigger>
              <SelectContent side='top'>
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </div>
          <div className='flex items-center space-x-2'>
            <Button
              variant='outline'
              className='hidden h-8 w-8 p-0 lg:flex'
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className='sr-only'>Tới trang đầu tiên</span>
              <DoubleArrowLeftIcon className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              className='h-8 w-8 p-0'
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className='sr-only'>Đi tới trang trước</span>
              <ChevronLeftIcon className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              className='h-8 w-8 p-0'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className='sr-only'>Chuyển đến trang tiếp theo</span>
              <ChevronRightIcon className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              className='hidden h-8 w-8 p-0 lg:flex'
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className='sr-only'>Tới trang cuối cùng</span>
              <DoubleArrowRightIcon className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
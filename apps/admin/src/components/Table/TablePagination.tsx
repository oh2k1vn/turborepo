import React from 'react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@repo/ui/components/pagination';

type TablePaginationProps = {
    pageIndex: number;
    pageCount: number;
    pageSize: number;
    setPagination: React.Dispatch<React.SetStateAction<{ pageIndex: number; pageSize: number }>>;
    dataLength: number;
};

const TablePagination: React.FC<TablePaginationProps> = ({ pageIndex, pageCount, pageSize, setPagination, dataLength }) => {
    return (
        <Pagination>
            <PaginationContent>
                {/* Nút Previous */}
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => setPagination(prev => ({ ...prev, pageIndex: prev.pageIndex - 1 }))}
                        className={pageIndex === 0 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
                    />
                </PaginationItem>

                {/* Trang đầu tiên */}
                <PaginationItem>
                    <PaginationLink isActive={pageIndex === 0} onClick={() => setPagination(prev => ({ ...prev, pageIndex: 0 }))}>
                        1
                    </PaginationLink>
                </PaginationItem>

                {/* Hiển thị `...` nếu trang hiện tại > 2 */}
                {pageIndex > 2 && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                {/* Hiển thị trang hiện tại, trang trước và sau */}
                {Array.from({ length: pageCount }).map((_, index) => {
                    if (index === 0 || index === pageCount - 1) return null; // Đã hiển thị riêng

                    if (index >= pageIndex - 1 && index <= pageIndex + 1) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationLink isActive={pageIndex === index} onClick={() => setPagination(prev => ({ ...prev, pageIndex: index }))}>
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    }
                    return null;
                })}

                {/* Hiển thị `...` nếu trang hiện tại cách trang cuối > 2 */}
                {pageIndex < pageCount - 3 && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                {/* Trang cuối cùng */}
                <PaginationItem>
                    <PaginationLink isActive={pageIndex === pageCount - 1} onClick={() => setPagination(prev => ({ ...prev, pageIndex: pageCount - 1 }))}>
                        {pageCount}
                    </PaginationLink>
                </PaginationItem>

                {/* Nút Next */}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => setPagination(prev => ({ ...prev, pageIndex: prev.pageIndex + 1 }))}
                        className={dataLength < pageSize ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default TablePagination;

import React, { useState, useCallback } from 'react';
import { Button } from '@repo/ui/components/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@repo/ui/components/dialog';
import { Input } from '@repo/ui/components/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/components/select';
import { Column, Table } from '@tanstack/react-table';
import { useTable } from './table-context';
import { CustomColumnDef } from '.';

interface DataTableDialogProps<TData> {
    table: Table<TData>;
}

export function DataTableDialog<TData>({ table }: DataTableDialogProps<TData>) {
    const { column, setColumn } = useTable();

    const [filterValue, setFilterValue] = useState<string>('');

    const dataColumn = column ? (table.getAllColumns().find(col => col.id === column) as Column<TData, unknown>) : null;

    const columnMeta = dataColumn ? (dataColumn.columnDef as CustomColumnDef<TData, unknown>)?.meta : null;

    const handleSubmitForm = () => {
        if (dataColumn) {
            dataColumn.setFilterValue(filterValue);
        }
        setColumn(null);
        setFilterValue('');
    }

    if (!column) return null;
console.log("🚀 Log test data dataColumn", table.getColumn(column))
    return (
        <Dialog open={!!column} onOpenChange={open => !open && setColumn(null)}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Lọc dữ liệu</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                {columnMeta?.type === 'text' && (
                    <div className='flex flex-col gap-2'>
                        <Input placeholder='Nhập giá trị lọc...' value={filterValue} onChange={e => setFilterValue(e.target.value)} />
                    </div>
                )}

                {columnMeta?.type === 'select' && (
                    <div className='flex flex-col gap-2'>
                        <Select onValueChange={setFilterValue}>
                            <SelectTrigger>
                                <SelectValue placeholder='Chọn giá trị lọc' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='option1'>Tùy chọn 1</SelectItem>
                                <SelectItem value='option2'>Tùy chọn 2</SelectItem>
                                <SelectItem value='option3'>Tùy chọn 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}

                <DialogFooter>
                    <Button onClick={handleSubmitForm}>Xác nhận</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

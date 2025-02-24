import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@repo/ui/components/sheet';
import ReactJson from 'react-json-view';

interface TableJSONProps<TData extends object> {
    rowData: TData | null;
    onClose: () => void;
}

const TableJSON = <TData extends object>({ rowData, onClose }: TableJSONProps<TData>) => {
    return (
        <Sheet open={!!rowData} onOpenChange={onClose}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                {rowData ? (
                    <ReactJson src={rowData} theme='rjv-default' collapsed={2} displayDataTypes={false} displayObjectSize={false} />
                ) : (
                    <p className='text-center text-gray-500'>Không có dữ liệu</p>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default TableJSON;

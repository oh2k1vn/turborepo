import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@repo/ui/components/dialog';
import { FilterOption } from '.';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/components/select';
import { Input } from '@repo/ui/components/input';
import { RadioGroup, RadioGroupItem } from '@repo/ui/components/radio-group';
import { Button } from '@repo/ui/components/button';
import { Label } from '@repo/ui/components/label';
import MultiSelect from '@repo/ui/components/multi-select';
import DateRangePicker from '@repo/ui/components/DateRangePicker';

interface FilterDialogProps {
    selectedFilter: FilterOption | null;
    onClose: () => void;
}

export const FilterDialog: React.FC<FilterDialogProps> = ({ selectedFilter, onClose }) => {
    const [radioValue, setRadioValue] = React.useState<string | null>(null);

    return (
        <Dialog open={!!selectedFilter} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Bộ lọc {selectedFilter?.label || selectedFilter?.field}</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                {selectedFilter?.type === 'text' && <Input placeholder='Nhập từ khóa...' />}

                {selectedFilter?.type === 'multiselect' && selectedFilter.options && (
                    <MultiSelect values={selectedFilter.options} onChange={event => console.log('multiselect', event)} />
                )}

                {selectedFilter?.type === 'daterange' && <DateRangePicker onChange={dates => console.log('Ngày đã chọn:', dates)} dateFormat='dd/MM/yyyy' />}

                {selectedFilter?.type === 'radioActive' && (
                    <RadioGroup defaultValue='comfortable' className='flex items-center gap-10' onValueChange={setRadioValue}>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='true' id='active' />
                            <Label htmlFor='active'>Đang hoạt động</Label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='false' id='inActive' />
                            <Label htmlFor='inActive'>Ngừng hoạt động</Label>
                        </div>
                    </RadioGroup>
                )}

                <div className='flex justify-end gap-2 mt-4'>
                    <Button variant='outline' onClick={onClose}>
                        Hủy
                    </Button>
                    <Button
                        onClick={() => {
                            console.log(radioValue);
                        }}
                    >
                        Áp dụng
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

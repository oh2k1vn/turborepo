import { cn } from '@repo/ui/lib/utils';
import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { Badge } from './badge';
import { Button } from './button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from './dropdown-menu';

interface ISelectProps {
    values: { key: string; value: string }[];
    onChange?: (selected: string[]) => void;
    placeholder?: string;
}
const MultiSelect = ({ values, onChange, placeholder }: ISelectProps) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectChange = (value: string) => {
        setSelectedItems(prev => {
            const newSelected = prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];

            onChange?.(newSelected);
            return newSelected;
        });
    };

    const handleRemoveItem = (value: string) => {
        setSelectedItems(prev => {
            const newSelected = prev.filter(item => item !== value);
            onChange?.(newSelected);
            return newSelected;
        });
    };

    return (
        <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='outline'
                    className={cn(
                        'w-full flex justify-between items-center px-2 py-2 border border-gray-300 rounded-md bg-white text-gray-700',
                        selectedItems.length == 0 && !placeholder && 'text-slate-400 font-normal'
                    )}
                >
                    <div className='flex flex-wrap gap-1'>
                        {selectedItems.length > 0
                            ? selectedItems.map(item => {
                                  const selectedItem = values.find(v => v.key === item);
                                  return (
                                      <Badge key={item} className='flex items-center px-2 py-1 bg-gray-200 text-gray-700 rounded-md'>
                                          {selectedItem?.value}
                                      </Badge>
                                  );
                              })
                            : placeholder
                              ? placeholder
                              : 'Chọn giá trị'}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent onCloseAutoFocus={e => e.preventDefault()}>
                {values.map(value => (
                    <DropdownMenuCheckboxItem
                        key={value.key}
                        onSelect={e => e.preventDefault()}
                        checked={selectedItems.includes(value.key)}
                        onCheckedChange={() => handleSelectChange(value.key)}
                    >
                        {value.value}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MultiSelect;

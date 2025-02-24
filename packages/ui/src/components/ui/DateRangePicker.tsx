import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import vi from 'date-fns/locale/vi';

interface DateRangePickerProps {
    onChange?: (ranges: { startDate: Date; endDate: Date }) => void;
    minDate?: Date;
    maxDate?: Date;
    initialRange?: { startDate: Date; endDate: Date };
    showPreview?: boolean;
    dateFormat?: string;
    disablePastDates?: boolean;
    disableFutureDates?: boolean;
    locale?: string;
    showMonthAndYearPickers?: boolean;
}

const DateRangePicker = ({
    onChange,
    minDate,
    maxDate,
    initialRange,
    showPreview = false,
    dateFormat = 'dd/MM/yyyy',
    disablePastDates = false,
    disableFutureDates = false,
    locale = 'vi',
    showMonthAndYearPickers = true
}: DateRangePickerProps) => {
    const [range, setRange] = useState([
        {
            startDate: initialRange?.startDate || new Date(),
            endDate: initialRange?.endDate || addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const handleSelect = (ranges: any) => {
        setRange([ranges.selection]);
        if (onChange) {
            onChange({
                startDate: ranges.selection.startDate,
                endDate: ranges.selection.endDate
            });
        }
    };

    return (
        <DateRange
            className='w-full'
            ranges={range}
            onChange={handleSelect}
            minDate={disablePastDates ? new Date() : minDate}
            maxDate={disableFutureDates ? new Date() : maxDate}
            moveRangeOnFirstSelection={false}
            showDateDisplay={showPreview}
            rangeColors={['hsl(var(--primary))']}
            locale={locale === 'vi' ? vi : undefined}
            showMonthAndYearPickers={showMonthAndYearPickers}
        />
    );
};

export default DateRangePicker;

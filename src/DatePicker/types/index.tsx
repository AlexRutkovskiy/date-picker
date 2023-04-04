export interface DatePickerProps {
    date: Date;
    onChange: (date: Date) => void
}

export interface InputFieldProps {
    date: Date;
    action: () => void
}

interface IDate {
    date: Date;
}

export interface CalendarHeaderProps extends IDate {    
    onChangeMonthNext: () => void;
    onChangeMonthPrev: () => void;
    onChangeYearNext: () => void;
    onChangeYearPrev: () => void;
}

export interface CalendarBodyProps extends IDate {
    onSelected: (date: Date) => void;
}

export interface CalendarProps extends CalendarBodyProps {
    open: boolean;
}

export interface DateObj {
    day: number;
    dayWeek: number;
    month: number;
    year: number;
    isCurrent: boolean;
    isCurrentMonth: boolean;
}
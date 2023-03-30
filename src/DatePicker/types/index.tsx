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
    onChangeWeekNext: () => void;
    onChangeWeekPrev: () => void;
    onChangeYearNext: () => void;
    onChangeYearPrev: () => void;
}

export interface CalendarBodyProps extends IDate {
    onSelected: () => void;
}

export interface CalendarProps extends CalendarHeaderProps, CalendarBodyProps {
    open: boolean;
}
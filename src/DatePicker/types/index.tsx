export interface DatePickerProps {
    date: Date;
    onChange: (date: Date) => void
}

export interface InputFieldProps {
    date: Date;
    action: () => void
}

export interface CalendarProps {
    open: boolean;
    onChangeWeekNext: () => void;
    onChangeWeekPrev: () => void;
    onChangeYearNext: () => void;
    onChangeYearPrev: () => void;
    onSelected: () => void;
}
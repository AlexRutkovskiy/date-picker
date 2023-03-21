export interface DatePickerProps {
    value: Date;
    onChange: (value: Date) => void;
    description?: string;
}

export interface InputBarProps {
    value: string;
    onChange: (value: string) => void;
    onClick: () => void;
}
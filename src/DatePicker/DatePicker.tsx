  import React, { useState, useCallback } from 'react';
  import { DatePickerProps } from './types';
  import { InputField, Calendar } from './components';
  import styles from './DatePicker.module.css';

  
  export const DatePicker: React.FC<DatePickerProps> = ({date, onChange}) => {
    const [isOPenCalendar, setIsOpenCalendar] = useState<boolean>(false)
    const openCalendar = useCallback(() => setIsOpenCalendar(prevState => !prevState), [])
    const onSelect = useCallback((newDate: Date) => {
        setIsOpenCalendar(false)
        onChange(newDate);
    }, [onChange])

    return (
        <div className={styles.DatePicker}>
            <InputField 
                date={date}
                action={openCalendar}
            />
            <Calendar 
                open={isOPenCalendar}
                date={date}
                onSelected={onSelect}
            />
        </div>
    );
  };
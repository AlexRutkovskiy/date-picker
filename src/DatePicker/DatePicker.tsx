  import React, { useState } from 'react';
  import { DatePickerProps } from './types';
  import { InputField, Calendar } from './components';
  import styles from './DatePicker.module.css';

  
  export const DatePicker: React.FC<DatePickerProps> = ({date, onChange}) => {

    const [isOPenCalendar, setIsOpenCalendar] = useState<boolean>(true)
    const openCalendar = React.useCallback(() => setIsOpenCalendar(prevState => !prevState), [])

    const onChangeMonthNext = () => {
        onChange(new Date(date.getFullYear(), date.getMonth() + 1, 0))
    }

    const onChangeMonthPrev = () => {
        onChange(new Date(date.getFullYear(), date.getMonth() - 1, 0))
    }

    return (
        <div className={styles.DatePicker}>
            <InputField 
                date={date}
                action={openCalendar}
            />
            <Calendar 
                open={isOPenCalendar}
                date={date}
                onChangeMonthNext={onChangeMonthNext}
                onChangeMonthPrev={onChangeMonthPrev}
                onChangeYearNext={()=>{}}
                onChangeYearPrev={()=>{}}
                onSelected={()=>{}}
            />
        </div>
    );
  };
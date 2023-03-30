  import React, { useState } from 'react';
  import { DatePickerProps } from './types';
  import { InputField, Calendar } from './components';
  import styles from './DatePicker.module.css';

  
  export const DatePicker: React.FC<DatePickerProps> = ({date = new Date(), onChange =() => {}}) => {

    const [isOPenCalendar, setIsOpenCalendar] = useState<boolean>(true)
    const openCalendar = React.useCallback(() => setIsOpenCalendar(prevState => !prevState), [])

    return (
        <div className={styles.DatePicker}>
            <InputField 
                date={date}
                action={openCalendar}
            />
            <Calendar 
                open={isOPenCalendar}
                date={date}
                onChangeWeekNext={()=>{}}
                onChangeWeekPrev={()=>{}}
                onChangeYearNext={()=>{}}
                onChangeYearPrev={()=>{}}
                onSelected={()=>{}}
            />
        </div>
    );
  };
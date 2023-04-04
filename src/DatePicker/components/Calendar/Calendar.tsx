import React from "react";
import { CalendarProps } from "../../types"
import styles from './Calendar.module.css';

import { CalendarHeader, CalendarBody } from './components';

export const Calendar: React.FC<CalendarProps> = ({open, date, onSelected}) => {

    const [tmpDate, setTmpDate] = React.useState<Date>(new Date(date.getFullYear(), date.getMonth(), date.getDate()))

    React.useEffect(() => {
        setTmpDate(date);
    }, [date])

    const onChangeMonthNext = () => {
        const d = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());
        d.setMonth(d.getMonth() + 1);
        setTmpDate(d)
    }

    const onChangeMonthPrev = () => {
        const d = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());
        d.setMonth(d.getMonth() - 1);
        setTmpDate(d)
    }

    const onChangeYearNext = () => {
        const d = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());
        d.setFullYear(d.getFullYear() + 1);
        setTmpDate(d)
    }

    const onChangeYearPrev = () => {
        const d = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());
        d.setFullYear(d.getFullYear() - 1);
        setTmpDate(d)
    }

    const onChangeSelectedDate = () => onSelected(new Date())

    if (!open) {
        return null;
    }
    
    return (
        <div className={styles.Calendar}>
            <div className={styles.Calendar__wrapper}>
                <CalendarHeader 
                    date={tmpDate}
                    onChangeMonthNext={onChangeMonthNext}
                    onChangeMonthPrev={onChangeMonthPrev}
                    onChangeYearNext={onChangeYearNext}
                    onChangeYearPrev={onChangeYearPrev}
                />
                <CalendarBody 
                    date={tmpDate}
                    selectedDate={date}
                    onSelected={onSelected}
                />
                <div className={styles.Calendar__btn_offset}>
                    <button className={styles.Calendar__btn} onClick={onChangeSelectedDate}>
                        Today
                    </button>
                </div>
            </div>
        </div>
    )
}
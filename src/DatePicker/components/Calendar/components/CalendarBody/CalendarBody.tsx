import React from 'react';
import styles from './CalendarBody.module.css';
import { CalendarBodyProps, DateObj } from '@/types'
import { dayOfWeekShort, getMounthDayObj } from '@/utils';

interface ICalendarProps extends CalendarBodyProps {
    selectedDate: Date;
}

export const CalendarBody: React.FC<ICalendarProps> = ({ date, selectedDate, onSelected }) => {

    const handleClick = (item: DateObj) => {
        const date = new Date(item.year, item.month, item.day);
        onSelected(date);
    }

    const renderWeekNames = () => {
        const res: JSX.Element[] = [];
        for (let i = 0; i < dayOfWeekShort.length; i++) {
            res.push(<div key={i} className={styles.CalendarBody__row__week} >{dayOfWeekShort[i]}</div>);
        }

        return res;    
    }

    const renderMonthDays = (): JSX.Element[] => {
        const data: (null | DateObj)[] = getMounthDayObj(date, selectedDate);
        return data.map((item, index) => {
            const key = (item !== null) ? `key_${item.day}_${item.month}_${item.year}` : `key_${index}`;
            if (item !== null) {
                return (
                    <div key={key} className={styles.CalendarBody__row__date} onClick={() =>handleClick(item)}>
                        <span>{item.day}</span>
                        { item.isCurrent && <span className={styles.CalendarBody__row__date_current}></span> }
                    </div>
                );
            }

            return (
                <div key={key} className={styles.CalendarBody__row__date_empty} >
                    <span className={styles.vis__hidden}>{index}</span>
                </div>
            );
        })
    }

    return (
        <div className={styles.CalendarBody}>
            <div className={styles.CalendarBody__wrapper}>
                { renderWeekNames() }
                { renderMonthDays() }
            </div>
        </div>
    );
}
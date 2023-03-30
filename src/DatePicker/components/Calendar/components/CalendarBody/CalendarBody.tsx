import React from 'react';
import styles from './CalendarBody.module.css';
import { CalendarBodyProps } from '../../../../types'
import { getDaysInMonth, dayOfWeek } from '../../../../utils';


export const CalendarBody: React.FC<CalendarBodyProps> = ({ date, onSelected }) => {

    const renderWeekNames = () => {
        const res: JSX.Element[] = [];
        for (let i = 0; i < dayOfWeek.length; i++) {
            res.push(<div key={i} className={styles.CalendarBody__row__week} >{dayOfWeek[i]}</div>);
        }

        return res;    
    }

    const renderMonthDays = () => {
        const res: JSX.Element[] = [];

        

        return res;
    }

    return (
        <div className={styles.CalendarBody}>
            <div className={styles.CalendarBody__wrapper}>
                { renderWeekNames() }
            </div>
        </div>
    );
}
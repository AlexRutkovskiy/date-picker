import React from 'react';
import styles from './CalendarBody.module.css';
import { CalendarBodyProps, DateObj } from '../../../../types'
import { dayOfWeekShort, getMounthDayObj } from '../../../../utils';


export const CalendarBody: React.FC<CalendarBodyProps> = ({ date, onSelected }) => {

    const renderWeekNames = () => {
        const res: JSX.Element[] = [];
        for (let i = 0; i < dayOfWeekShort.length; i++) {
            res.push(<div key={i} className={styles.CalendarBody__row__week} >{dayOfWeekShort[i]}</div>);
        }

        return res;    
    }

    const renderMonthDays = () => {
        const res: JSX.Element[] = [];
        const data: (null | DateObj)[] = getMounthDayObj(date);


        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (item !== null) {
                const key = `key_${item.day}_${item.month}_${item.year}`;
                res.push(
                    <div key={key} className={styles.CalendarBody__row__date} >
                        <span>{item.day}</span>
                        { item.isCurrent && <span className={styles.CalendarBody__row__date_current}></span> }
                    </div>
                )
            } else {
                const key = `key_${i}`;
                res.push(
                    <div key={key} className={styles.CalendarBody__row__date} >
                        <span className={styles.vis__hidden}>{i}</span>
                    </div>
                )
            }
        }

        return res;
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
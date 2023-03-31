import React from 'react';
import { CalendarHeaderProps } from '../../../../types'
import styles from './CalendarHeader.module.css';
import { ReactComponent as IconPrevYear } from '../../../../assets/icons/chevron-left-duo.svg';
import { ReactComponent as IconNextYear } from '../../../../assets/icons/chevron-right-duo.svg';
import { ReactComponent as IconPrevWeek } from '../../../../assets/icons/chevron-left.svg';
import { ReactComponent as IconNextWeek } from '../../../../assets/icons/chevron-right.svg';
import { getFullYear, getDayString, getMonthString } from '../../../../utils';


export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
    date,
    onChangeMonthNext,
    onChangeMonthPrev,
    onChangeYearNext,
    onChangeYearPrev
}) => {
    return (
        <div className={styles.CalendarHeader}>
            <div className={styles.CalendarHeader__wrapper}>
                <div className={styles.CalendarHeaader__manage__block}>
                    <button onClick={onChangeYearPrev}><IconPrevYear /></button>
                    <button onClick={onChangeMonthPrev}><IconPrevWeek /></button>
                </div>
                <div className={styles.CalendarHeaader__title}>
                    <h1>
                        <span>{getDayString(date)}</span>, &nbsp;
                        <span>{getMonthString(date)}</span> &nbsp;
                        <span>{getFullYear(date)}</span>
                    </h1>
                </div>
                <div className={styles.CalendarHeaader__manage__block}>
                    <button onClick={onChangeMonthNext}><IconNextWeek /></button>
                    <button onClick={onChangeYearNext}><IconNextYear /></button>
                </div>
            </div>
        </div>
    );
}
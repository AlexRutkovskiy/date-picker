import { CalendarProps } from "../../types"
import styles from './Calendar.module.css';

import { CalendarHeader, CalendarBody } from './components';

export const Calendar: React.FC<CalendarProps> = ({
    open, 
    date,
    onChangeWeekNext, 
    onChangeWeekPrev, 
    onChangeYearNext, 
    onChangeYearPrev, 
    onSelected
}) => {
    
    if (!open) {
        return null;
    }
    
    return (
        <div className={styles.Calendar}>
            <div className={styles.Calendar__wrapper}>
                <CalendarHeader 
                    date={date}
                    onChangeWeekNext={onChangeWeekNext}
                    onChangeWeekPrev={onChangeWeekPrev}
                    onChangeYearNext={onChangeYearNext}
                    onChangeYearPrev={onChangeYearPrev}
                />
                <CalendarBody 
                    date={date}
                    onSelected={onSelected}
                />
            </div>
        </div>
    )
}
import { CalendarProps } from "../../types"
import styles from './Calendar.module.css';

import { CalendarHeader, CalendarBody } from './components';

export const Calendar: React.FC<CalendarProps> = ({
    open, 
    date,
    onChangeMonthNext, 
    onChangeMonthPrev, 
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
                    onChangeMonthNext={onChangeMonthNext}
                    onChangeMonthPrev={onChangeMonthPrev}
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
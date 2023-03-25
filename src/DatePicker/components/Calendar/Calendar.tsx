import { CalendarProps } from "../../types"
import styles from './Calendar.module.css';

export const Calendar: React.FC<CalendarProps> = ({
    open, 
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
            Calendar
            </div>
            
        </div>
    )
}
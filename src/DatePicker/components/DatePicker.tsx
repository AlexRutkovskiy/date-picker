import {FC, useState} from 'react';
import { DatePickerProps } from '../types';
import { InputBar } from './InputBar';
import styles from './DatePicker.module.css';



export const DatePicker: FC<DatePickerProps>  = ({value, onChange, description}) => {

    const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false)

    const renderDescription = (): JSX.Element | null => {
        if (!description) return null;
        return <span className={styles.DatePicker_description}>{description}</span>
    }

    const renderCalendar = () => {
        if (!isShowCalendar) return null;

        return ''
    }

    return (
        <div className={styles.DatePicker_wrapper}>
            { renderDescription() }
            <InputBar 
                onChange={()=>{}}
                onClick={()=>{}}
                value=''
            />
        </div>
    );
}
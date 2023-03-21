import React, { FC } from 'react';
import { InputBarProps } from '../../types';
import styles from './InputBar.module.css';
import { ReactComponent as Icon } from '../../assets/icons/icon-date-picker.svg';

export const InputBar: FC<InputBarProps> =({value, onChange, onClick}) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => onChange(e.target.value);

    return (
        <div className={styles.InputBar__wrapper}>
            <input type='text' className={styles.InputBar_input} onChange={handleChange} />
            <button className={styles.InputBar_button} onClick={onClick}>
                <Icon/>
            </button>
        </div>
    );
}
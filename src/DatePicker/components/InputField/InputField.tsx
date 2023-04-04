import { InputFieldProps } from '@/types';
import { getFormatDate } from '@/utils';
import { ReactComponent as Icon } from '@/assets/icons/icon-date-picker.svg';
import styles from './InputField.module.css';

export const InputField: React.FC<InputFieldProps> = ({date, action}) => {
    return (
        <div className={styles.InputField}>
            <input 
                type="text" 
                disabled 
                className={styles.InputField__field}
                value={getFormatDate(date)} 
            />
            <button className={styles.InputField__button} onClick={action}>
                <Icon />
            </button>
        </div>
    );
}
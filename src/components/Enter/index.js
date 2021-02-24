import styles from './Enter.module.css';
import { socket } from '../socket';

export const Enter = () => {
    return (
        <div className={styles.joinBlock}>
            <input
                className={styles.input}
                type='text'
                placeholder='room id'
            />
            <input
                className={styles.input}
                type='text'
                placeholder='your name'
            />
            <div className={styles.btn}>Come in</div>
        </div>
    )
}
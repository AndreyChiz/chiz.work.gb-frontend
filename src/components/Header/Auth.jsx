import styles from './Header.module.css'
import Button from '../common/Button/Button'

export default function Auth() {
    return (
        <div className={styles.auth}>
            <Button type="outline">Войти</Button>
            <Button type="default">Зарегистрироваться</Button>
        </div>
    )
}

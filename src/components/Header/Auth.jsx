import styles from './Header.module.css';
import Button from '../common/Button/Button';
import { useGetMeQuery } from '../../api';

export default function Auth() {
    // ✅ для query
    const { data, error, isLoading } = useGetMeQuery(1);

    const handleClick = () => {
        if (data) {
            console.log("Тело:", data.body);
            console.log("Заголовки:", data.headers);
            console.log("Статус:", data.status);
            alert(JSON.stringify(data.body, null, 2));
        } else if (error) {
            console.error("Ошибка запроса:", error);
            alert(`Ошибка: ${error.status} - ${error.data}`);
        }
    };

    return (
        <div className={styles.auth}>
            <Button type="outline" onClick={handleClick} disabled={isLoading}>
                {isLoading ? "Загрузка..." : "Войти"}
            </Button>
            <Button type="default">Зарегистрироваться</Button>
        </div>
    );
}



import styles from './Header.module.css';
import Button from '../common/Button/Button';
import { useGetMeMutation } from '../../api';

export default function Auth() {
    // создаём хук мутации
    const [getMe, { data, error, isLoading }] = useGetMeMutation();

    const handleClick = async () => {
        try {
            // НЕ используем unwrap(), чтобы получить meta/headers
            const result = await getMe();

            if (result.data) {
                console.log("Тело:", result.data?.body);
                console.log("Заголовки:", result.data?.headers);
                console.log("Статус:", result.data?.status);  // headers
                alert(JSON.stringify(result.data?.body, null, 2));
            } else if (result.error) {
                console.error('Ошибка запроса:', result.error);
                alert(`Ошибка: ${result.error.status} - ${result.error.data}`);
            }
        } catch (err) {
            console.error('Исключение:', err);
            alert('Произошла ошибка при запросе');
        }
    };



    return (
        <div className={styles.auth}>
            <Button type="outline" onClick={handleClick} disabled={isLoading}>
                {isLoading ? 'Загрузка...' : 'Войти'}
            </Button>
            <Button type="default">Зарегистрироваться</Button>
        </div>
    );
}

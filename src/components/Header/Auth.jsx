import styles from './Header.module.css';
import Button from '../common/Button/Button';
import { useGetMeQuery, useLazyGetMeQuery } from '../../api/userApi';
import {
    useRegisterMutation,
    useRefreshAccessTokenMutation,
} from '../../api/authApi';

export default function Auth() {
    // ✅ для query
    const [
        refreshToken,
        { data: refreshData, error: refreshError, isLoading: refreshLoading },
    ] = useRefreshAccessTokenMutation();

    const [
        register,
        { data: registerData, error: registerError, isLoading: registerIsLoading }
    ] = useRegisterMutation()

    const [
        getMe,
        { data: getMeData, error: getMeError, isLoading: getMeLoading },
    ] = useLazyGetMeQuery();

    const handleClick = () => {
        getMe(1);

        if (getMeData) {
            console.log('Данные пользователя:', getMeData);
            alert(JSON.stringify(getMeData, null, 2));
        } else if (getMeError) {
            console.error('Ошибка запроса:', error);
            alert(`Ошибка: ${getMeError.status} - ${getMeError.data}`);
        }
    };

    const handleRegClick = () => {
        refreshToken()
        register()

        alert(refreshData)

    }

    return (
        <div className={styles.auth}>

            <Button
                type="outline"
                onClick={handleClick}
                disabled={getMeLoading}
            >
                {getMeLoading ? 'Загрузка...' : 'Войти'}
            </Button>
            <Button type="default" onClick={handleRegClick}  >Зарегистрироваться</Button>
        </div>
    );
}

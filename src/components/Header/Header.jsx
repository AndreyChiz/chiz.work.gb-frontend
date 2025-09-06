import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Мой сайт</h1>
            </div>

            <nav className={styles.menu}>
                <a href="#blog">Блог</a>
                <a href="#lifestyle">Лайфстайл</a>
                <a href="#projects">Проекты</a>
            </nav>

            <div className={styles.auth}>
                <button className={styles.login}>Войти</button>
                <button className={styles.register}>Зарегистрироваться</button>
            </div>
        </header>
    )
}

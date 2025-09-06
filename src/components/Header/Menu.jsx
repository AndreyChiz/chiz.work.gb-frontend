import styles from './Header.module.css'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <a href="#blog">Блог</a>
            <a href="#lifestyle">Лайфстайл</a>
            <a href="#projects">Проекты</a>
        </nav>
    )
}

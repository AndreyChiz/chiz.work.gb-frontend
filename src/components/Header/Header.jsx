import styles from './Header.module.css'
import Logo from './Logo'
import Menu from './Menu'
import Auth from './Auth'

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Menu />
            <Auth />
        </header>
    )
}

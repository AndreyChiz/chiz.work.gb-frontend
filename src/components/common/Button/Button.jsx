import styles from './Button.module.css'

export default function Button({ children, type = 'default', onClick }) {
    const className = `${styles.button} ${styles[type]}`
    return <button className={className} onClick={onClick}>{children}</button>
}

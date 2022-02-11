import styles from './nav.module.css'

export function Nav({ children }) {
  return <nav className={styles.nav}>{children}</nav>
}

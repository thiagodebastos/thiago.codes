import styles from './nav-item.module.css'

export function NavItem({ isActive, label, ...props }) {
  return (
    <a
      className={[styles['nav-item'], isActive && styles.active].join(' ')}
      {...props}
    >
      {label}
    </a>
  )
}

import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>LAZY INTERVIEW</div>
      <div className={styles.navContainer}>
        <a>Home</a>
        <a>Favorites</a>
      </div>
    </header>
  )
}

export default Header

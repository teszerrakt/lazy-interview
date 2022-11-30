import styles from './styles.module.scss'
import logo from '@/assets/react.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
        LAZY INTV
      </div>
      <div className={styles.navContainer}>
        <a>Home</a>
        <a>Favorites</a>
      </div>
    </header>
  )
}

export default Header

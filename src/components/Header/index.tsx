import styles from './styles.module.scss'
import logo from '@/assets/react.svg'
import { NavButtons } from '../Navigation'
import { NAV_ITEMS } from '../Navigation/config'
import { useScrollDirection } from '../../hooks/useScrollDirection'

const Header = () => {
  const scrollDirection = useScrollDirection()
  const isScrollDown = scrollDirection === 'down'

  return (
    <header
      className={styles.header}
      style={{
        top: isScrollDown ? -100 : 0,
      }}
    >
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
        LAZY INTV
      </div>
      <div className={styles.navContainer}>
        <NavButtons navItems={NAV_ITEMS} />
      </div>
    </header>
  )
}

export default Header

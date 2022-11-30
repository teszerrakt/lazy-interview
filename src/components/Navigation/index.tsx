import { NavLink } from 'react-router-dom'
import Button from '../Button'
import { NavItem, NAV_ITEMS } from './config'
import './styles.scss'

export const NavButtons = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <>
      {navItems.map(({ name, to }) => (
        // <NavLink className={styles.navBtn} key={name} to={to}>
        <NavLink key={name} to={to}>
          <Button>{name}</Button>
        </NavLink>
      ))}
    </>
  )
}

const Navigation = () => {
  return (
    <nav className="navBar">
      <NavButtons navItems={NAV_ITEMS} />
    </nav>
  )
}

export default Navigation

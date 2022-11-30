import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
  children?: ReactNode
  className?: string
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`${styles.btn} ${className || ''}`}>{children}</button>
  )
}

export default Button

import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
  children?: ReactNode
  disabled?: boolean
  onClick?: () => void
  className?: string
}

const Button = ({ children, className, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

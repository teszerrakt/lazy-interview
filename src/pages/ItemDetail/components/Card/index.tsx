import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface CardProps {
  children: ReactNode
  className?: string
  title?: string
}

const Card = ({ children, className, title }: CardProps) => {
  return (
    <div className={`${className || ''} ${styles.card}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  )
}

export default Card

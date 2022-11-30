import styles from './styles.module.scss'
import Skeleton from '../Skeleton'

interface CardProps {
  loading: boolean
}

const Card = ({ loading }: CardProps) => {
  if (loading) {
    return (
      <div className={styles.cardContainer}>
        <Skeleton className={styles.imgSkeleton} />
        <div className={styles.textSkeleton}>
          <Skeleton />
          <Skeleton width="80%" />
        </div>
      </div>
    )
  } else return null
}

export default Card

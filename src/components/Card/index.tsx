import styles from './styles.module.scss'
import Skeleton from '../Skeleton'
import { Movie } from '../../types'
import { POSTER_PATH } from '../../api'

interface CardProps extends Partial<Movie> {
  loading?: boolean
}

const Card = ({ loading, ...itemProps }: CardProps) => {
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
  }

  return (
    <div className={styles.cardContainer}>
      <img src={POSTER_PATH(itemProps.poster_path)} />
      <div className={styles.textContainer}>
        <span className={styles.title}>{itemProps.title}</span>
        <span className={styles.rating}>
          <span>★</span>
          {itemProps.vote_average}
        </span>
      </div>
    </div>
  )
}

export default Card

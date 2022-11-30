import { SKELETON_LIST } from '../../components/Skeleton'
import Card from '../../components/Card'
import styles from './styles.module.scss'

const ItemList = () => {
  const loading = true

  if (loading) {
    return (
      <div className={styles.itemListContainer}>
        {SKELETON_LIST().map((key) => (
          <Card key={key} loading={true} />
        ))}
      </div>
    )
  } else return null
}

export default ItemList

import Card from '../ItemList/components/Card'
import styles from '../ItemList/styles.module.scss'
import { Favorites, MovieDetail } from '../../types'
import { useNavigate } from 'react-router-dom'
import useLocalStorage, { LS_KEY } from '../../hooks/useLocalStorage'

const FavoritesPage = () => {
  const [favorites] = useLocalStorage<Favorites<MovieDetail>>(
    LS_KEY.FAVORITES,
    {}
  )
  const navigate = useNavigate()

  const itemList = Object.keys(favorites).map((itemId) => favorites[itemId])

  if (itemList.length === 0) return <div>Empty</div>

  return (
    <div className={styles.itemListContainer}>
      {itemList.map((item) => {
        return (
          <Card
            key={item.id}
            onClick={() => navigate(`/items/${item.id}`)}
            {...item}
          />
        )
      })}
    </div>
  )
}

export default FavoritesPage

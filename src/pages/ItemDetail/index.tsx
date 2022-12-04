import { useNavigate, useParams } from 'react-router-dom'
import { API_KEY, DETAIL_API, POSTER_PATH } from '../../api'
import Button from '../../components/Button'
import { useAxios } from '../../hooks/useAxios'
import { MovieDetail } from '../../types'
import styles from './styles.module.scss'
import Image from '../../components/Image'
import Card from './components/Card'
import { ReactNode } from 'react'

type ItemDetailParams = {
  itemId: string
}

type Detail = {
  name: string
  value: ReactNode
}

const ItemDetail = () => {
  const { itemId } = useParams<ItemDetailParams>()
  const navigate = useNavigate()
  const { data, error, loading } = useAxios<MovieDetail>({
    config: {
      url: `${DETAIL_API}/${itemId}`,
      params: {
        api_key: API_KEY,
      },
    },
  })

  const details: Detail[] = [
    {
      name: 'Countries',
      value: data?.production_countries.map((c) => c.name).join(', '),
    },
    { name: 'Genres', value: data?.genres.map((g) => g.name).join(', ') },
    {
      name: 'Languages',
      value: data?.spoken_languages.map((sl) => sl.name).join(', '),
    },
    { name: 'Ratings', value: `★ ${data?.vote_average}` },
    { name: 'Runtime', value: `${data?.runtime} minutes` },
    { name: 'Status', value: data?.status },
  ]

  if (loading) return <div>Loading...</div>

  if (error) return <div>{error}</div>

  if (!data) return <div>Item does not exist</div>

  return (
    <>
      <div className={styles.titleContainer}>
        <Button onClick={() => navigate(-1)}>◀︎</Button>
        <h1>{data.title}</h1>
      </div>
      <div className={styles.itemDetailPage}>
        <Card className={styles.imgContainer}>
          <Image src={POSTER_PATH(data.poster_path)} alt={data.title} />
          <Button>+ Add To Collection</Button>
        </Card>
        <div className={styles.infoContainer}>
          <Card title="Details">
            {details.map(({ name, value }) => (
              <div key={name} className={styles.detailContainer}>
                <span className={styles.label}>{name}</span>
                <span className={styles.value}>{value}</span>
              </div>
            ))}
          </Card>
          <Card title="Overview">{data.overview}</Card>
        </div>
      </div>
    </>
  )
}

export default ItemDetail

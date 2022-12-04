import { SKELETON_LIST } from '../../components/Skeleton'
import Card from './components/Card'
import styles from './styles.module.scss'
import { useAxios } from '../../hooks/useAxios'
import { MovieListResponseData } from '../../types'
import { useEffect } from 'react'
import { API_KEY, DISCOVER_API } from '../../api'
import Pagination from '../../components/Pagination'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ItemList = () => {
  const { data, error, loading, refetch } = useAxios<MovieListResponseData>({})
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const itemList = data?.results ?? []
  const isItemExist = itemList.length > 0
  const page = searchParams.get('page') ?? 1

  useEffect(() => {
    refetch({
      url: DISCOVER_API,
      params: {
        page: page,
        api_key: API_KEY,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const handleChangePage = (page: number) => {
    window.scrollTo(0, 0)
    setSearchParams(`?page=${page}`)
  }

  const renderContent = () => {
    if (loading) {
      return (
        <div className={styles.itemListContainer}>
          {SKELETON_LIST().map((key) => (
            <Card key={key} loading={true} />
          ))}
        </div>
      )
    }

    if (error) return <div>{error}</div>

    if (!isItemExist) return <div>No Data</div>

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

  return (
    <>
      {renderContent()}
      <Pagination
        page={Number(page ?? 1)}
        total={data?.total_pages ?? 0}
        onChange={handleChangePage}
      />
    </>
  )
}

export default ItemList

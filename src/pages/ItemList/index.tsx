import { SKELETON_LIST } from '../../components/Skeleton'
import Card from '../../components/Card'
import styles from './styles.module.scss'
import { useAxios } from '../../hooks/useAxios'
import { ResponseData } from '../../types'
import { useEffect, useState } from 'react'
import { API_KEY, DISCOVER_API } from '../../api'

const ItemList = () => {
  const { data, error, loading, refetch } = useAxios<ResponseData>()
  const [page, setPage] = useState<number>(1)
  const itemList = data?.results ?? []
  const isItemExist = itemList.length > 0

  useEffect(() => {
    refetch({
      url: DISCOVER_API,
      params: {
        page,
        api_key: API_KEY,
      },
    })
  }, [page])

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
        return <Card key={item.id} {...item} />
      })}
    </div>
  )
}

export default ItemList

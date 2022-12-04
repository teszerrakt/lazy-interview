import Button from '../Button'
import styles from './styles.module.scss'

interface PaginationProps {
  page: number
  total: number
  onChange: (page: number) => void
}

const Pagination = ({ page, total = 0, onChange }: PaginationProps) => {
  const isPrevDisabled = page <= 1
  const isNextDisabled = total <= 0 || page >= total

  return (
    <div className={styles.pagination}>
      <Button disabled={isPrevDisabled} onClick={() => onChange(page - 1)}>
        ◀
      </Button>
      <span className={styles.page}>{page}</span>
      <Button disabled={isNextDisabled} onClick={() => onChange(page + 1)}>
        ▶︎
      </Button>
    </div>
  )
}

export default Pagination

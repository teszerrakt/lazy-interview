import styles from './styles.module.scss'

interface ISkeletonProps {
  height?: string | number
  width?: string | number
  className?: string
}

const DEFAULT_SKELETON_CARD_NUMBER = 6
export const SKELETON_LIST = (num = DEFAULT_SKELETON_CARD_NUMBER) =>
  Array.from(Array(num).keys())

const Skeleton = ({ height, width, className }: ISkeletonProps) => {
  return (
    <div
      className={`${styles.skeleton} ${className || ''}`}
      style={{ height, width }}
    />
  )
}

export default Skeleton

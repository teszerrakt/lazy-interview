import { Helmet } from 'react-helmet'
import fallbackImage from '../../assets/image-break.png'
import './styles.scss'

interface IImageProps {
  src: string
  alt: string
}

const Image = ({ src, alt }: IImageProps) => {
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={fallbackImage} />
      </Helmet>
      <img
        src={src}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = fallbackImage
          currentTarget.className = 'imgFallBack'
        }}
        alt={alt}
      />
    </>
  )
}

export default Image

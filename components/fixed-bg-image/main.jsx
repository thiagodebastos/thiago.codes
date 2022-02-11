import Image from 'next/image'
import styles from './fixed-bg-image.module.css'

export function FixedBgImage({ imageUrl }) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={imageUrl}
        alt="image"
        width="258"
        height="406"
        layout="intrinsic"
      />
    </div>
  )
}

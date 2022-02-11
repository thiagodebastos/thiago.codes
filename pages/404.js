import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/container'

import styles from './404.module.css'

export default function NotFound() {
  return (
    <Container title="404 – Thiago de Bastos">
      <div className={styles.inner}>
        <div className={styles['image-wrapper']}>
          <Image
            src={`/static/images/404.svg`}
            alt="Not Found"
            layout="responsive"
            width="1074"
            height="584"
          />
        </div>
        <p className={styles.message}>
          We couldn&#39;t find the page you were looking for.
        </p>
        <Link href="/">
          <a className={styles['home-button']}>Return Home</a>
        </Link>
      </div>
    </Container>
  )
}

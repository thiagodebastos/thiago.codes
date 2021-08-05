import Link from 'next/link'

import { Container } from '@/components/container'
import Image from 'next/image'

export default function NotFound() {
  return (
    <Container title="404 – Thiago de Bastos">
      <div className="flex w-full flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="w-full mb-8">
          <Image
            src={`/static/images/404.svg`}
            alt="Not Found"
            layout="responsive"
            width="1074"
            height="584"
          />
        </div>
        <div className="mx-auto">
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            We couldn&#39;t find the page you were looking for.
          </p>
        </div>
        <Link href="/">
          <a className="w-64 p-1 mx-auto font-bold text-center text-black bg-gray-100 sm:p-4 dark:bg-gray-900 rounded-md dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  )
}

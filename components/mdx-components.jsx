import Link from 'next/link'
import Image from 'next/image'

import { Callout } from '@/components/callout'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export const MDXComponents = {
  Image,
  Callout,
  a: CustomLink,
}

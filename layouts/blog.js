import Image from 'next/image'
import { parseISO, format } from 'date-fns'

import { Container } from '@/components/container'

// TODO implement this component
function ViewCounter({ slug }) {
  return <div># views for ${slug}</div>
}

// TODO extract these to config file
const editUrl = (slug) =>
  `https://github.com/thiago/thiago.codes/edit/main/data/blog/${slug}.mdx`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://thiago.codes/blog/${slug}`,
  )}`

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Thiago de Bastos`}
      description={frontMatter.summary}
      image={`https://thiago.codes${frontMatter.image}`}
      date={new Date(frontMatter.publishedOn).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Thiago de Bastos"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Thiago de Bastos on{' '}
              {format(parseISO(frontMatter.publishedOn), 'dd MMMM, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-500 min-w-32 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="w-full prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  )
}

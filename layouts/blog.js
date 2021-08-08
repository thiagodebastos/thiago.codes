import { parseISO, format } from 'date-fns'

import { Container } from '@/components/container'

// TODO implement this component
function ViewCounter({ slug }) {
  return <div># views for ${slug}</div>
}

// TODO extract these to config file
const editUrl = (slug) =>
  `https://github.com/thiagodebastos/thiago.codes/edit/master/data/blog/${slug}.mdx`
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
      <article className="flex flex-col items-start justify-center w-full mx-auto mb-16 max-w-prose">
        <div className="py-[112px] w-full">
          <h1 className="text-2xl font-black text-center text-indigo-700 md:text-4xl lg:text-5xl lg:leading-relaxed dark:text-white">
            {frontMatter.title}
          </h1>
        </div>
        <div className="flex justify-center text-sm text-gray-400 align-center">
          <div>
            {format(parseISO(frontMatter.publishedOn), 'dd MMMM, yyyy')}
          </div>
          <div className="ml-6">{frontMatter.readingTime.text}</div>
        </div>
        <div className="w-full mb-8 prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
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

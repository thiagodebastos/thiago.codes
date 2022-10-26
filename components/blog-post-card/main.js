import Link from 'next/link'
import { Tag } from '@/modules/tag'
import { useRouter } from 'next/router'

export function BlogPostCard({ title, slug, abstract, /** isPublished, */ tags }) {
  const router = useRouter()

  function handleClick(e, label) {
    e.preventDefault()
    router.push(`/blog?tags=${label}`)
  }
  return (
    (<Link href={`/blog/${slug}`} className="w-full">

      <div className="w-full mb-8">
        <div className="flex flex-row md:flex-row">
          <h4
            data-cy="blog-post-card-title"
            className="mb-1 font-semibold text-gray-900 md:mb-2 transition-colors md:text-2xl dark:text-gray-100 hover:text-green-500"
          >
            {title}
          </h4>
        </div>
        <div className="flex">
          {tags.map((t) => (
            <Tag key={t} onClick={(e) => handleClick(e, t)} label={t} />
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-7 md:leading-8">
          {abstract}
        </p>
      </div>

    </Link>)
  );
}

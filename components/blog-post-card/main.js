import Link from 'next/link'

export function BlogPostCard({ title, slug, abstract }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full group">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-1 font-semibold text-gray-900 md:mb-2 transition-colors md:text-2xl dark:text-gray-100 group-hover:text-green-500">
              {title}
            </h4>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-7 md:leading-8">
            {abstract}
          </p>
        </div>
      </a>
    </Link>
  )
}

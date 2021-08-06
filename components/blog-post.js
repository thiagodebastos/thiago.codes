import Link from 'next/link'

export function BlogPost({ title, slug, abstract, publishedOn, readTime }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a
        className="w-full p-4 mb-4 text-gray-900
          bg-white border border-green-200 hover:text-purple-500 dark:text-gray-100
          dark:bg-indigo-900 dark:border-indigo-800 bg-opacity-80
          dark:bg-opacity-30"
      >
        <h3
          className="w-full mb-1 text-lg font-bold
          md:text-xl"
        >
          {title}
        </h3>{' '}
        <p className="mb-2 text-xs text-gray-500">
          {publishedOn} - {readTime}
        </p>{' '}
        <image src="" />
        <p className="text-sm text-gray-600 dark:text-gray-400 md:text-md">
          {abstract}
        </p>
      </a>
    </Link>
  )
}

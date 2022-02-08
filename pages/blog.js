import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Container } from '@/components/container'
import { BlogPostCard } from '@/components/blog-post-card'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { Tag } from '@/modules/tag'
import { SearchBox } from '@/components/search-box/main'
import { sanitizeString } from '@/lib/saninize-string'
import { checkElementsAgainstArray } from '@/lib/check-array-includes-elements'
import { multiFilter } from '@/lib/multi-filter'

function sortByDate(posts) {
  return posts.sort(
    (a, b) => Number(new Date(b.publishedOn)) - Number(new Date(a.publishedOn)),
  )
}

export default function Home({ posts }) {
  const router = useRouter()
  const { query } = router
  const [searchTerm, setSearchTerm] = useState('')
  const [searchTags, setSearchTags] = useState([])

  useEffect(() => {
    if (query.tags) setSearchTags([...query.tags.split(',')])
  }, [query.tags])

  const allTagsFromPosts = [...new Set(posts.map((p) => p.tags).flat())]
  const filters = {
    title: (title) =>
      title
        ? sanitizeString(title).includes(sanitizeString(searchTerm))
        : true,
    tags: (tags) =>
      tags
        ? checkElementsAgainstArray({
          array: tags,
          elements: Array.from(searchTags),
        })
        : true,
  }

  function toggleTag(tag) {
    if (searchTags.includes(tag))
      setSearchTags(searchTags.filter((t) => t !== tag))
    else setSearchTags([...searchTags, tag])
  }

  function handleClickTag(tag) {
    toggleTag(tag)
  }

  function handleSearchValueChange(e) {
    e.preventDefault()
    const value = e.target.value
    setSearchTerm(value)
  }

  const filteredBlogPosts = multiFilter(sortByDate(posts), filters)

  return (
    <Container
      title="Blog – Thiago de Bastos"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16">
        <h1 className="mb-8 text-3xl font-black text-indigo-600 md:text-5xl dark:text-white">
          Blog
        </h1>
        <div className="relative w-full mb-4"></div>
        <SearchBox
          placeholder="Search articles..."
          handleChange={handleSearchValueChange}
          searchTerm={searchTerm}
          totalResults={filteredBlogPosts.length}
        />
        <div className="flex mt-2 mb-8">
          {allTagsFromPosts &&
            allTagsFromPosts.map((t) => (
              <Tag
                key={t}
                onClick={() => handleClickTag(t)}
                label={t}
                isActive={searchTags.includes(t)}
              />
            ))}
        </div>
        <div>
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPostCard key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const publishedPosts = posts.filter(p => p.isPublished)
  const isDevelopment = process.env.NODE_ENV === 'development'
  console.log(process.env.NODE_ENV)

  return {
    props: {
      posts: isDevelopment ? posts : publishedPosts
    }
  }
}

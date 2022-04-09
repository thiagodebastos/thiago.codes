import { getAllFilesFrontMatter } from '@/lib/mdx'
import styles from './seriesPage.module.css'
import { BlogSeriesCard } from '@/components/blog-series-card'


export default function postsPage({ posts }) {
  return (
    <div className={styles.container}>
      {posts
        ? posts.map(({
            title, slug, abstract, tags
          }) => (
              <BlogSeriesCard
                title={title}
                tags={tags}
                slug={slug}
                abstract={abstract}
              />
            )
          )
        : 'no results'}
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter('blog')
  const postsInSeries = allPosts
    .filter((p) => !!p.series)
    .reduce((acc, curr) => {
      if (!acc.some((el) => el.series === curr.series)) acc.push(curr)
      return acc
    }, [])

  const allPublishedPostsInSeries = postsInSeries.filter((p) => p.isPublished)

  const isDevelopment = process.env.NODE_ENV === 'development'

  return {
    props: {
      posts: isDevelopment ? postsInSeries : allPublishedPostsInSeries,
    },
  }
}

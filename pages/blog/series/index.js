import Link from 'next/link'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import styles from './seriesPage.module.css'

export default function postsPage({ posts }) {
  return (
    <div className={styles.container}>
      {posts
        ? posts.map((p) => <Link href="/#">{p.series}</Link>)
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

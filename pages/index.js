import { Container } from '@/components/container'
import { BlogPostCard } from '@/components/blog-post-card'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from 'next/link'

export default function HomePage({ posts }) {

  return (
    <Container>
      <div className="relative flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16 z-1">
        <h1 className="mb-4 text-3xl font-black text-indigo-600 md:text-5xl dark:text-white">
          Hi there, I&apos;m Thiago.
        </h1>
        <h2 className="mb-16 text-indigo-400 font-emphasis dark:text-gray-400">
          I’m a full stack JavaScript developer specialising in Frontend UIs
          with React.
        </h2>
        {!posts.length && (
          <p className="mb-3 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {posts && (
          <h2 className="mb-4 text-sm font-bold tracking-widest text-gray-500 uppercase dark:text-white">
            Recent Posts
          </h2>
        )}
        {posts.map((frontMatter) => (
          <BlogPostCard key={frontMatter.title} {...frontMatter} />
        ))}
        <div className="link-container">
          <Link href="/blog" passHref={true}>
            <a className="text-pink-500">All posts <span className="link-arrow">-&gt;</span></a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .link-arrow {
          transition: .25s ease-out;
          display: inline-block;
        }

        .link-container:hover .link-arrow {
          transform: translateX(10px);
          font-weight: bold;
        }
      `}</style>

    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const isDevelopment = process.env.NODE_ENV === 'development'

  const recentPosts = posts
    .filter(p => isDevelopment ? true : p.isPublished)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedOn)) - Number(new Date(a.publishedOn)),
    )
    .slice(0, 3)

  return { props: { posts: recentPosts } }
}

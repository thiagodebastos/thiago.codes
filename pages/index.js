import { Container } from '@/components/container'
import { BlogPostCard } from '@/components/blog-post-card'
import { getAllFilesFrontMatter } from '@/lib/mdx'

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
          <h2 className="mb-4 text-sm font-bold tracking-widest text-pink-500 uppercase dark:text-white">
            Recent Posts
          </h2>
        )}
        {posts.map((frontMatter) => (
          <BlogPostCard key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  const recentPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedOn)) - Number(new Date(a.publishedOn)),
    )
    .slice(0, 3)

  return { props: { posts: recentPosts } }
}

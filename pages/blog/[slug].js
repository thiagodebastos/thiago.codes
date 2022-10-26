import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client';

import { MDXComponents } from '@/components/mdx-components'
import { getFiles, getFileBySlug } from '@/lib/mdx'
import BlogLayout from '@/layouts/blog'


export default function Blog({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <BlogLayout frontMatter={frontMatter}>
      <Component
        components={{
          ...MDXComponents,
        }}
      />
    </BlogLayout>
  );
}


export async function getStaticPaths() {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug)

  return {
    props: {
      ...post,
    },
  }
}

import { useState } from "react";
import Image from "next/image";

import { Container } from "@/components/container";
import { BlogPost } from "@/components/blog-post";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Home({ posts }) {
  const recentPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedOn)) - Number(new Date(a.publishedOn))
    )
    .slice(0, 3);

  return (
    <Container>
      <div className="z-1 relative flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-indigo-700 md:text-5xl dark:text-white">
          Hi there, I&apos;m Thiago.
        </h1>
        <h2 className="mb-16 text-gray-600 prose dark:text-gray-400">
          I’m a full stack <code>JavaScript</code> developer specialising in
          frontend UIs with <code>React</code>.
        </h2>
        {!recentPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {recentPosts && (
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            Recent Posts
          </h2>
        )}
        {recentPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

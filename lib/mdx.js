import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

const root = process.cwd()

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')
  
  const { code, frontmatter } = await bundleMDX({
      source,
      xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ];
      return options;
      }
    })


  return {
    code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  }
}

// TODO move this
function makeTags(string) {
  if (string) {
    return string.split(',').map((t) => t.trim())
  }
  return []
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'data', type))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8',
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
        tags: makeTags(data.tags),
      },
      ...allPosts,
    ]
  }, [])
}

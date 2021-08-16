import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import NextLink from 'next/link'
import { FixedBgImage } from '@/components/fixed-bg-image'

function Footer({ children }) {
  return <div>{children}</div>
}

export function Container(props) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Thiago de Bastos – Developer, writer, creator.',
    description: `Full Stack JS developer, JavaScript enthusiast, and photographer.`,
    image: 'https://thiago.codes/static/images/banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div
      className={`min-h-screen bg-white dark:bg-black px-8 sm:px-12 transition-colors duration-300 ${props.className}`}
    >
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://thiago.codes${router.asPath}`}
        />
        <link rel="canonical" href={`https://thiago.codes${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Thiago de Bastos" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thiagodebastos" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="flex items-center justify-between w-full max-w-3xl px-0 py-8 mx-auto my-0 text-gray-900 md:mb-4 dark:text-gray-100">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div>
          <NextLink href="/">
            <a
              className={`font-emphasis mr-8  ${
                router.asPath === '/'
                  ? 'text-green-600 dark:text-green-300'
                  : 'text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              Thiago de Bastos
            </a>
          </NextLink>
          <NextLink href="/blog">
            <a
              className={`p-1 p-4 mr-2 hover:bg-gray-50 rounded-md dark:hover:bg-gray-800 ${
                router.asPath.includes('/blog')
                  ? 'text-green-600 dark:text-green-300 bg-green-50 hover:bg-green-50 dark:bg-gray-800'
                  : 'text-gray-900 dark:text-gray-100'
              }`}
            >
              Blog
            </a>
          </NextLink>
          <NextLink href="/about">
            <a
              className={`p-1 p-4 hover:bg-gray-50 rounded-md dark:hover:bg-gray-800 ${
                router.asPath === '/about'
                  ? 'text-green-600 dark:text-green-300 bg-green-50 hover:bg-green-50 dark:bg-gray-800'
                  : 'text-gray-900 dark:text-gray-100'
              }`}
            >
              About
            </a>
          </NextLink>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-gray-800 dark:text-yellow-300"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
      <main id="skip" className="relative flex flex-col justify-center">
        {children}
        <Footer />
        <FixedBgImage imageUrl="/static/images/undraw_counting_stars_man.svg" />
      </main>
    </div>
  )
}

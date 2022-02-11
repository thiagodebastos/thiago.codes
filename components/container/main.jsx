import Head from 'next/head'
import { useState, useEffect } from 'react'
import { FixedBgImage } from '@/components/fixed-bg-image'
import { useRouter } from 'next/router'

import styles from './container.module.css'
import { SiteNav } from '../site-nav'

function Footer({ children }) {
  return <div>{children}</div>
}

export function Container(props) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const meta = {
    title: 'Thiago de Bastos – Developer, writer, creator.',
    description: `Full Stack JS developer, JavaScript enthusiast, and photographer.`,
    image: 'https://thiago.codes/static/images/banner.png',
    type: 'website',
    ...customMeta,
  }

  const navItems = [
    {
      label: 'Thiago de Bastos',
      url: '/',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
    {
      label: 'About',
      url: '/about',
    },
  ]

  return (
    <div className={[styles.wrapper, props.className].join(' ')}>
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
      <SiteNav items={navItems} />
      <main id="skip" className={styles.main}>
        {children}
        <Footer />
        {mounted && (
          <FixedBgImage imageUrl="/static/images/undraw_counting_stars_man.svg" />
        )}
      </main>
    </div>
  )
}

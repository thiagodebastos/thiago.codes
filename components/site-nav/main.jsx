import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Nav } from './ui/nav'
import { NavItem } from './ui/nav-item'
import { ThemeToggle } from '../shared/theme-toggle'

export function SiteNav({ logo, items }) {
  const router = useRouter()
  return (
    <Nav>
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      <div>
        {items.map(({ label, url }) => (
          <NextLink href={url} passHref={true}>
            <NavItem isActive={router.asPath === url} label={label} />
          </NextLink>
        ))}
      </div>
      <ThemeToggle />
    </Nav>
  )
}

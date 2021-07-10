import { FC } from 'react'
import { gradientText } from 'components/Text'
import Root from 'components/Root'

type NavBarProps = {
  href: string
}

const NavBar: FC<NavBarProps> = ({ href, children }) => {
  return (
    <nav className="glassWrapper">
      <div className="flex items-center flex-row justify-center">
        <a href={href} className={gradientText}>
          T.DaM∑R Portfolio
        </a>
        <ul className="flex	space-x-2 text-white">{children}</ul>
      </div>
    </nav>
  )
}

type NavItemProps = NavBarProps & { isActive: boolean }

const NavItem: FC<NavItemProps> = ({ href, isActive, children }) => {
  return (
    <li>
      <a
        href={href}
        className={`block px-4 py-2 rounded-md${
          isActive ? 'bg-amber-100 text-amber-700' : 'text-amber-700'
        }`}
      >
        {children}
      </a>
    </li>
  )
}

export const Nav: FC = () => {
  return (
    <Root>
      <NavBar href="/">
        <NavItem href="/smm" isActive={true}>
          Smm
        </NavItem>
        <NavItem href="/design" isActive={false}>
          Design
        </NavItem>
        <NavItem href="/code" isActive={false}>
          Code
        </NavItem>
        <NavItem href="/photos" isActive={false}>
          Photos
        </NavItem>
      </NavBar>
    </Root>
  )
}

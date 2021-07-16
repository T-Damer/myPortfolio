import { FC } from 'react'
import { gradientText } from 'components/Text'

type NavBarProps = {
  href: string
}

const NavBar: FC<NavBarProps> = ({ href, children }) => {
  return (
    <nav className="glassWrapper">
      <div className="justify-start p-5">
        <a href={href} className={gradientText}>
          T.DaM∑R Portfolio
        </a>
      </div>
      <div className="justify-end">
        <ul className="flex	flex-row items-center space-x-5 text-white">
          {children}
        </ul>
      </div>
    </nav>
  )
}

type NavItemProps = NavBarProps & { isActive: boolean }

const NavItem: FC<NavItemProps> = ({ href, isActive, children }) => {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  )
}

export const Nav: FC = () => {
  return (
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
  )
}

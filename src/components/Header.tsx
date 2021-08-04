import { FC } from 'react'
import { gradientText } from 'components/Text'
import { Link } from 'react-router-dom'

type NavBarProps = {
  href: string
}

const NavBar: FC<NavBarProps> = ({ href, children }) => {
  return (
    <nav className="glassWrapper w-8/12 flex-col xl:flex-row">
      <div className="logoWrapper">
        <a href={href} className={gradientText}>
          T.DaM∑R Portfolio
        </a>
      </div>
      <div className="flex-grow">
        <ul className="flex flex-row items-center justify-center md:justify-end space-x-4 md:space-x-10 md:px-10 text-white">
          {children}
        </ul>
      </div>
    </nav>
  )
}

const NavItem: FC<NavBarProps> = ({ href, children }) => {
  return (
    <li className="navbar__item">
      <Link to={href}>{children}</Link>
    </li>
  )
}

export const Nav: FC = () => {
  return (
    <NavBar href="/myPortfolio">
      <NavItem href="/smm">Smm</NavItem>
      <NavItem href="/design">Design</NavItem>
      <NavItem href="/code">Code</NavItem>
      <NavItem href="/photos">Photos</NavItem>
    </NavBar>
  )
}

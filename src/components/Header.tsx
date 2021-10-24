import { FC } from 'react'
import { gradientText } from 'components/Text'
import { NavLink } from 'react-router-dom'
import { classnames } from 'classnames/tailwind'
import { FormattedMessage } from 'react-intl'

type NavBarProps = {
  href: string
}

const navLinkSelected = classnames('text-yellow-400')
const navUl = classnames(
  'flex',
  'flex-row',
  'items-center',
  'justify-center',
  'md:justify-end',
  'space-x-4',
  'md:space-x-10',
  'md:px-10',
  'text-white'
)

const NavBar: FC<NavBarProps> = ({ href, children }) => {
  return (
    <nav className="glassWrapper w-8/12 flex-col xl:flex-row">
      <div className="logoWrapper">
        <a href={href} className={gradientText}>
          T.DaM∑R Portfolio
        </a>
      </div>
      <div className="flex-grow">
        <ul className={navUl}>{children}</ul>
      </div>
    </nav>
  )
}

const NavItem: FC<NavBarProps> = ({ href, children }) => {
  return (
    <li className="navbar__item">
      <NavLink to={href} activeClassName={navLinkSelected}>
        {children}
      </NavLink>
    </li>
  )
}

export const Nav: FC = () => {
  return (
    <NavBar href="/myPortfolio">
      <NavItem href="/design">
        <FormattedMessage id="design" />
      </NavItem>
      <NavItem href="/code">
        <FormattedMessage id="code" />
      </NavItem>
      <NavItem href="/photos">
        <FormattedMessage id="photography" />
      </NavItem>
    </NavBar>
  )
}

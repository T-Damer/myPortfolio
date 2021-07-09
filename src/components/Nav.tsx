import { FC } from 'react'
import { gradientText, glassWrapper } from 'components/Text'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages imports
import Code from 'pages/code'
import Design from 'pages/design'
import Photos from 'pages/photos'
import Smm from 'pages/smm'

type NavBarProps = {
  href: string
}

const NavBar: FC<NavBarProps> = ({ href, children }) => {
  return (
    <nav className={glassWrapper}>
      <div className="flex">
        <a href={href} className={gradientText}>
          T.DaM∑R Portfolio
        </a>
        <ul className="flex items-end	space-x-2 text-white">{children}</ul>
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
    <Router>
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

      <Switch>
        <Route path="/Smm">
          <Smm />
        </Route>
        <Route path="/Smm">
          <Design />
        </Route>
        <Route path="/Smm">
          <Code />
        </Route>
        <Route path="/Smm">
          <Photos />
        </Route>
      </Switch>
    </Router>
  )
}

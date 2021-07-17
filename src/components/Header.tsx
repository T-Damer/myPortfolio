import { FC } from 'react'
import { gradientText } from 'components/Text'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Pages
import Home from 'pages/home'
import Smm from 'pages/smm'
import Design from 'pages/design'
import Code from 'pages/code'
import Photos from 'pages/photos'

type NavBarProps = {
  href: string
}

const NavBar: FC<NavBarProps> = ({ href, children }) => {
  return (
    <nav className="glassWrapper w-8/12">
      <div className="justify-start px-10">
        <a href={href} className={gradientText}>
          <Link to="/">T.DaM∑R Portfolio</Link>
        </a>
      </div>
      <div className="flex-grow">
        <ul className="flex flex-row items-center justify-end space-x-10 px-10 text-white">
          {children}
        </ul>
      </div>
    </nav>
  )
}

const NavItem: FC = ({ children }) => {
  return <li>{children}</li>
}

export const Nav: FC = () => {
  return (
    <Router>
      <NavBar href="/">
        <NavItem>
          <Link to="/smm">Smm</Link>
        </NavItem>
        <NavItem>
          <Link to="/design">Design</Link>
        </NavItem>
        <NavItem>
          <Link to="/code">Code</Link>
        </NavItem>
        <NavItem>
          <Link to="/photos">Photos</Link>
        </NavItem>
      </NavBar>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/smm">
          <Smm />
        </Route>
        <Route path="/design">
          <Design />
        </Route>
        <Route path="/code">
          <Code />
        </Route>
        <Route path="/photos" exact component={Photos} />
      </Switch>
    </Router>
  )
}

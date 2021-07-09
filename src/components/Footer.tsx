import { FC } from 'react'
import { gradientText, glassWrapper } from 'components/Text'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages imports
import Code from 'pages/code'
import Design from 'pages/design'
import Photos from 'pages/photos'
import Smm from 'pages/smm'

type FooterBarProps = {
  href: string
}

const FooterBar: FC<FooterBarProps> = ({ href, children }) => {
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

export const Footer: FC = () => {
  return (
    <Router>
      <FooterBar href="/"></FooterBar>

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

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages
import Home from 'pages/home'
import Smm from 'pages/smm'
import Design from 'pages/design'
import Code from 'pages/code'
import Photos from 'pages/photos'
import CopyrightPage from 'pages/copyright'

export default function SiteRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
        <Route path="/photos">
          <Photos />
        </Route>
        <Route path="/copyright">
          <CopyrightPage />
        </Route>
      </Switch>
    </Router>
  )
}

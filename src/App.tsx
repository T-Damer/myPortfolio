import Root from 'components/Root'
import { Nav } from 'components/Header'
import { Footer } from 'components/Footer'
import IntlProvider from 'i18n/IntlProvider'
import { configure } from 'mobx'
import { Route, Switch } from 'react-router-dom'

// Pages
import Home from 'pages/home'
import Smm from 'pages/smm'
import Design from 'pages/design'
import Code from 'pages/code'
import Photos from 'pages/photos'
import CopyrightPage from 'pages/copyright'
import Page404 from 'pages/page404'
import NotFound from 'pages/notFound'

configure({
  enforceActions: 'never',
})

const App = () => {
  return (
    <Root>
      <IntlProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/smm" component={Smm} />
          <Route path="/design" component={Design} />
          <Route path="/code" component={Code} />
          <Route path="/photos" component={Photos} />
          <Route path="/copyright" component={CopyrightPage} />
          <Route exact path="/404" component={Page404} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </IntlProvider>
    </Root>
  )
}

export default App

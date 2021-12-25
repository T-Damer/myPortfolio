import Root from 'components/Root'
import { Nav } from 'components/Header'
import { Footer } from 'components/Footer'
import IntlProvider from 'i18n/IntlProvider'
import { configure } from 'mobx'
import { Route, Switch } from 'react-router-dom'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

// Pages
import Socials from 'pages/socials'
import Home from 'pages/home'
import Smm from 'pages/smm'
import Design from 'pages/design'
import Code from 'pages/code'
import Photos from 'pages/photos'
import CopyrightPage from 'pages/copyright'
import Page404 from 'pages/page404'
import NotFound from 'pages/notFound'
import LanguageButtons from 'components/LanguageButtons'

configure({
  enforceActions: 'never',
})

const App = () => {
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
    >
      <Root>
        <IntlProvider>
          <Nav />
          <LanguageButtons />
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
          <Socials />
          <Footer />
        </IntlProvider>
      </Root>
    </LocomotiveScrollProvider>
  )
}

export default App

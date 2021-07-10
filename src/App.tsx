import Root from 'components/Root'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import IntlProvider from 'i18n/IntlProvider'
import { configure } from 'mobx'

import Home from 'pages/home'

configure({
  enforceActions: 'never',
})

const App = () => {
  return (
    <Root>
      <IntlProvider>
        <Nav />
        <Home />
        <Footer />
      </IntlProvider>
    </Root>
  )
}

export default App

import Root from 'components/Root'
import { Nav } from 'components/Header'
import { Footer } from 'components/Footer'
import IntlProvider from 'i18n/IntlProvider'
import { configure } from 'mobx'

import Body from 'pages/home'

configure({
  enforceActions: 'never',
})

const App = () => {
  return (
    <Root>
      <IntlProvider>
        <Nav />
        <Body />
        <Footer />
      </IntlProvider>
    </Root>
  )
}

export default App

import Root from 'components/Root'
import { Nav } from 'components/Nav'
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
      </IntlProvider>
    </Root>
  )
}

export default App

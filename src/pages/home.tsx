import { FC } from 'react'
import { gradientText, glassWrapper } from 'components/Text'
import LanguageButtons from 'components/LanguageButtons'
import { FormattedMessage } from 'react-intl'
import { BodyText } from 'components/Text'
import Root from 'components/Root'

export default function Home() {
  return (
    <Root>
      <BodyText>
        <FormattedMessage id="title" />
      </BodyText>
      <LanguageButtons />
      <div className={glassWrapper}></div>
    </Root>
  )
}

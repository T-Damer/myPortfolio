import { FormattedMessage } from 'react-intl'
import { BodyText } from 'components/Text'
import Root from 'components/Root'

export default function Photos() {
  return (
    <Root>
      <BodyText>
        <FormattedMessage id="title" />
      </BodyText>
    </Root>
  )
}

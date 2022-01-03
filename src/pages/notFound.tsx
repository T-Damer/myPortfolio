import { sectionContainer } from 'components/SharedStyles'
import { BigHeader, gradientText } from 'components/Text'
import { Component } from 'react'

class NotFound extends Component {
  render() {
    return (
      <div className={sectionContainer} data-scroll-section>
        <div className="glassWrapper flex-col justify-start space-y-6 text-white">
          <h2 className={gradientText}>Whoops, page does not exist</h2>
          <BigHeader>Not Found</BigHeader>
        </div>
      </div>
    )
  }
}

export default NotFound

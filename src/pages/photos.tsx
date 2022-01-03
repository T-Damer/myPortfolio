import { gradientText } from 'components/Text'
import Card from 'components/Card'
import ImageGallery from 'react-image-gallery'
import { Component } from 'react'
import { FormattedMessage } from 'react-intl'

const PREFIX_URL = '/myPortfolio/images/photos'

const myAvatars = [
  {
    original: `${PREFIX_URL}/myAvatars/1.png`,
  },
  {
    original: `${PREFIX_URL}/myAvatars/2.png`,
  },
  {
    original: `${PREFIX_URL}/myAvatars/3.png`,
  },
]

const magicWorkshop = [
  {
    original: `${PREFIX_URL}/workshop/1.png`,
  },
  {
    original: `${PREFIX_URL}/workshop/2.png`,
  },
]

class Photos extends Component {
  render() {
    return (
      <div
        className="flex
        flex-grow
        items-center
        p-1 flex-col space-y-6"
      >
        <div className="glassWrapper flex-col justify-start space-y-6">
          <h2 className={gradientText}>
            <FormattedMessage id="photography" />:{' '}
          </h2>
          <p className="text-white px-5">
            <FormattedMessage id="photography1" />{' '}
            <a
              href="https://www.instagram.com/t_damer/"
              className="text-yellow-400"
            >
              Instagram
            </a>{' '}
            <FormattedMessage id="photography2" />
          </p>
          <Card>
            <div>
              <h3 className={gradientText}>My avatars</h3>
              <p className="text-white py-4 px-5">
                <FormattedMessage id="photography-avatars" />
              </p>
            </div>
            <div className="rounded-lg p-5">
              <ImageGallery
                items={myAvatars}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
              />
            </div>
          </Card>

          <Card>
            <div>
              <h3 className={gradientText}>Magic workshop</h3>
              <p className="text-white py-4 px-5">
                <FormattedMessage id="photography-workspace" />
              </p>
            </div>
            <div className="rounded-lg p-5">
              <ImageGallery
                items={magicWorkshop}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
              />
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default Photos

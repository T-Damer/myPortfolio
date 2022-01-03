import {
  gradientText,
  ParagraphPX5,
  ParagraphWithPaddings,
  yellowText,
} from 'components/Text'
import Card from 'components/Card'
import ImageGallery from 'react-image-gallery'
import { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { GalleryBox, sectionContainer } from 'components/SharedStyles'

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
      <div className={sectionContainer} data-scroll-container>
        <div className="glassWrapper flex-col justify-start space-y-6">
          <h2 className={gradientText}>
            <FormattedMessage id="photography" />:{' '}
          </h2>
          <ParagraphPX5>
            <FormattedMessage id="photography1" />{' '}
            <a href="https://www.instagram.com/t_damer/" className={yellowText}>
              Instagram
            </a>{' '}
            <FormattedMessage id="photography2" />
          </ParagraphPX5>
          <Card>
            <div>
              <h3 className={gradientText}>My avatars</h3>
              <ParagraphWithPaddings>
                <FormattedMessage id="photography-avatars" />
              </ParagraphWithPaddings>
            </div>
            <GalleryBox>
              <ImageGallery
                items={myAvatars}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
              />
            </GalleryBox>
          </Card>

          <Card>
            <div>
              <h3 className={gradientText}>Magic workshop</h3>
              <ParagraphWithPaddings>
                <FormattedMessage id="photography-workspace" />
              </ParagraphWithPaddings>
            </div>
            <GalleryBox>
              <ImageGallery
                items={magicWorkshop}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
              />
            </GalleryBox>
          </Card>
        </div>
      </div>
    )
  }
}

export default Photos

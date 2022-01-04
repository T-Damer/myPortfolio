import {
  gradientText,
  ParagraphWithPaddings,
  yellowText,
} from 'components/Text'
import Card from 'components/Card'
import ImageGallery from 'react-image-gallery'
import { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import ReactPlayer from 'react-player'
import { GalleryBox, sectionContainer } from 'components/SharedStyles'

const PREFIX_URL = '/myPortfolio/images/design'

const anatomyImages = [
  {
    original: `${PREFIX_URL}/anatomyContest/FinalCut1.png`,
  },
]

const AIESEClogos = [
  {
    original: `${PREFIX_URL}/AIESEClogos/Logo.png`,
  },
  {
    original: `${PREFIX_URL}/AIESEClogos/Logo2.png`,
  },
  {
    original: `${PREFIX_URL}/AIESEClogos/Logo3.png`,
  },
  {
    original: `${PREFIX_URL}/AIESEClogos/Logo4.png`,
  },
  {
    original: `${PREFIX_URL}/AIESEClogos/Logo5.png`,
  },
  {
    original: `${PREFIX_URL}/AIESEClogos/Logo6.png`,
  },
  {
    original: `${PREFIX_URL}/AIESEClogos/Logo7.png`,
  },
  {
    original: `${PREFIX_URL}/AIESEClogos/Logo8.png`,
  },
]

const pazlCoImages = [
  {
    original: `${PREFIX_URL}/pazlCo/00.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/0.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/1.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/2.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/3.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/4.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/5.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/6.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/7.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/8.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/9.png`,
  },
  {
    original: `${PREFIX_URL}/pazlCo/10.png`,
  },
]

const vgmuImages = [
  {
    original: `${PREFIX_URL}/VGMU/1.png`,
  },
  {
    original: `${PREFIX_URL}/VGMU/2.png`,
  },
  {
    original: `${PREFIX_URL}/VGMU/3.png`,
  },
]

class Design extends Component {
  render() {
    return (
      <div className={sectionContainer} data-scroll-container>
        <div className="glassWrapper flex-col justify-start space-y-6">
          <h2 className={gradientText}>
            <FormattedMessage id="design" />:{' '}
          </h2>
          <p className="text-white px-5">
            <FormattedMessage id="design1" />
          </p>
          <Card data-scroll-section>
            <div>
              <h3 className={gradientText}>3D Coffee cup</h3>
              <ParagraphWithPaddings>
                <FormattedMessage id="design-3dcup" />
              </ParagraphWithPaddings>
            </div>
            <div className="flex rounded-lg p-5 items-center justify-center">
              <ReactPlayer
                url="https://user-images.githubusercontent.com/49658988/141644264-b0beedc6-8e93-4f81-9093-6e9e86172aa4.mp4"
                loop={true}
                playing={true}
                height="100%"
                width="100%"
              />
            </div>
          </Card>

          <Card data-scroll-section>
            <div>
              <h3 className={gradientText}>Anatomy contest</h3>
              <ParagraphWithPaddings>
                <FormattedMessage id="design-anatomy-contest" />
              </ParagraphWithPaddings>
            </div>
            <GalleryBox>
              <ImageGallery
                items={anatomyImages}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
              />
            </GalleryBox>
          </Card>

          <Card data-scroll-section>
            <div>
              <h3 className={gradientText}>Online page design</h3>
              <ParagraphWithPaddings>
                <FormattedMessage id="design-aiesec1" />
                <a href="https://vk.com/aiesec_vrn" className={yellowText}>
                  AIESEC Voronezh
                </a>
                <FormattedMessage id="design-aiesec2" />
              </ParagraphWithPaddings>
            </div>
            <GalleryBox>
              <ImageGallery
                items={AIESEClogos}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
              />
            </GalleryBox>
          </Card>

          <Card data-scroll-section>
            <div>
              <h3 className={gradientText}>Conference design</h3>
              <ParagraphWithPaddings>
                <FormattedMessage id="design-pazlco1" />
                <a href="https://vk.com/aiesec_vrn" className={yellowText}>
                  AIESEC Voronezh
                </a>{' '}
                <FormattedMessage id="design-pazlco2" />
              </ParagraphWithPaddings>
            </div>
            <GalleryBox>
              <ImageGallery
                items={pazlCoImages}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
              />
            </GalleryBox>
          </Card>

          <Card data-scroll-section>
            <div>
              <h3 className={gradientText}>University Activist</h3>
              <ParagraphWithPaddings>
                <FormattedMessage id="design-uni-activist" />
              </ParagraphWithPaddings>
            </div>
            <GalleryBox>
              <ImageGallery
                items={vgmuImages}
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

export default Design

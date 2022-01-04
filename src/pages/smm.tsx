import {
  gradientText,
  ParagraphWithPaddings,
  yellowText,
} from 'components/Text'
import Card from 'components/Card'
import ImageGallery from 'react-image-gallery'
import { Component } from 'react'
import { GalleryBox, sectionContainer } from 'components/SharedStyles'

const PREFIX_URL = '/myPortfolio/images/design'

const pazlCoImages = [
  {
    original: `${PREFIX_URL}/pazlCo/00.png`,
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
]

class Smm extends Component {
  render() {
    return (
      <div className={sectionContainer} data-scroll-container>
        <div className="glassWrapper flex-col justify-start space-y-6">
          <h2 className={gradientText}>Social Media Marketing: </h2>
          <p className="text-white">
            Hello, this is SMM section, here you can find my work, related to
            blogging and some social work.
          </p>

          <Card>
            <div>
              <h3 className={gradientText}>
                Online page administrator and designer
              </h3>
              <ParagraphWithPaddings>
                You know, that I was working in{' '}
                <a href="https://vk.com/aiesec_vrn" className={yellowText}>
                  AIESEC Voronezh
                </a>
                . Back in 2020, when I applied for higher education we had a
                conference called PAZL'CO (PUZZLE but on Russian spelling, heh).
                I was leading designer, editor of an online page and also event
                organizer. As a designer I did: design for blog posts, design of
                presentations, brochures, certificates, videos, personal
                invitations also i came up with a logo of our conference.
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
        </div>
      </div>
    )
  }
}

export default Smm

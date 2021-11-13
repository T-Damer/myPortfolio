import { gradientText } from 'components/Text'
import Card from 'components/Card'
import ImageGallery from 'react-image-gallery'
import { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import ReactPlayer from 'react-player'

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
      <div
        className="flex
    flex-grow
    items-center
    p-1 flex-col space-y-6"
      >
        <div className="glassWrapper flex-col justify-start space-y-6">
          <h2 className={gradientText}>
            <FormattedMessage id="design" />:{' '}
          </h2>
          <p className="text-white px-5">
            <FormattedMessage id="design1" />
          </p>
          <Card>
            <div>
              <h3 className={gradientText}>3D Coffee cup</h3>
              <p className="text-white py-4 px-5">
                I like 3D modeling and animation too, found interesting video on
                YT and tried to replicate it)
              </p>
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

          <Card>
            <div>
              <h3 className={gradientText}>Anatomy contest</h3>
              <p className="text-white py-4 px-5">
                Once upon a time I was taking part in anatomy contest. The
                contestants had to prepare a poster on the history of anatomy.
                Naturally I chose Leonardo da Vinci and my favorite color
                combination. The print cost a lot back then, heh
              </p>
            </div>
            <div className="rounded-lg p-5">
              <ImageGallery
                items={anatomyImages}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
              />
            </div>
          </Card>

          <Card>
            <div>
              <h3 className={gradientText}>Online page design</h3>
              <p className="text-white py-4 px-5">
                You know, that I was working in{' '}
                <a href="https://vk.com/aiesec_vrn" className="text-yellow-300">
                  AIESEC Voronezh
                </a>
                . There was a little local competition between members. The
                essence of the competition was to make a new logo for the online
                page, I offered 8 options and one of them won, although now
                there is already a new logo :)
              </p>
            </div>
            <div className="rounded-lg p-5">
              <ImageGallery
                items={AIESEClogos}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
              />
            </div>
          </Card>

          <Card>
            <div>
              <h3 className={gradientText}>Conference design</h3>
              <p className="text-white py-4 px-5">
                Back to{' '}
                <a href="https://vk.com/aiesec_vrn" className="text-yellow-300">
                  AIESEC Voronezh
                </a>{' '}
                again. Back in 2020, when I applied for higher education we had
                a conference called PAZL'CO (PUZZLE but on Russian spelling,
                heh). I was leading designer, editor of an online page and also
                event organizer. As a designer I did: design for blog posts,
                design of presentations, brochures, certificates, videos,
                personal invitations also i came up with a logo of our
                conference.
              </p>
            </div>
            <div className="rounded-lg p-5">
              <ImageGallery
                items={pazlCoImages}
                lazyLoad
                showThumbnails={false}
                showPlayButton={false}
              />
            </div>
          </Card>

          <Card>
            <div>
              <h3 className={gradientText}>University Activist</h3>
              <p className="text-white py-4 px-5">
                So, I went to medical school (don't ask why). For a student, we
                have a lot of additional activities (as if the load is not
                enough, ha-ha), so I made several designs for the circles, and I
                and my comrades also shot a short film for the competition
              </p>
            </div>
            <div className="rounded-lg p-5">
              <ImageGallery
                items={vgmuImages}
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

export default Design

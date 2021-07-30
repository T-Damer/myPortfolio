import { gradientText } from 'components/Text'
import Card from 'components/Card'
import ImageGallery from 'react-image-gallery'

const PREFIX_URL = 'images/design'

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

export default function Smm() {
  return (
    <div
      className="flex
    flex-grow
    items-center
    p-1 flex-col space-y-6"
    >
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
            <p className="text-white py-4 px-5">
              You know, that I was working in{' '}
              <a href="https://vk.com/aiesec_vrn" className="text-yellow-300">
                AIESEC Voronezh
              </a>
              . Back in 2020, when I applied for higher education we had a
              conference called PAZL'CO (PUZZLE but on Russian spelling, heh). I
              was leading designer, editor of an online page and also event
              organizer. As a designer I did: design for blog posts, design of
              presentations, brochures, certificates, videos, personal
              invitations also i came up with a logo of our conference.
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
      </div>
    </div>
  )
}

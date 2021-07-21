import { gradientText } from 'components/Text'
import Card from 'components/Card'
import ImageGallery from 'react-image-gallery'

const PREFIX_URL = 'images/anatomyContest/'

const images = [
  {
    original: `${PREFIX_URL}FinalCut1.png`,
  },
  {
    original: `${PREFIX_URL}FinalCut2.png`,
  },
]

export default function Design() {
  return (
    <div
      className="flex
    flex-grow
    items-center
    p-1 flex-col space-y-6"
    >
      <div className="glassWrapper flex-col justify-start space-y-6">
        <h2 className={gradientText}>Design: </h2>
        <p className="text-white">
          Hello, this is design section, here you can find most of my design
          projects. I really like make something, that looks interesting and
          outstanding ⭐️
        </p>
        <Card>
          <div>
            <h3 className={gradientText}>Anatomy contest</h3>
            <p className="text-white py-4">
              Once upon a time I was taking part in anatomy contest. The
              contestants had to prepare a poster on the history of anatomy.
              Naturally I chose Leonardo da Vinci and my favorite color
              combination. The print cost a lot back then, heh
            </p>
          </div>
          {/* <ImageGallery items={images} /> */}
        </Card>
      </div>
    </div>
  )
}

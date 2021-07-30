import { gradientText } from 'components/Text'
import Card from 'components/Card'
import ImageGallery from 'react-image-gallery'
import { Component } from 'react'

const PREFIX_URL = 'myPortfolio/images/photos'

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
  {
    original: `${PREFIX_URL}/myAvatars/4.png`,
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
          <h2 className={gradientText}>Photography: </h2>
          <p className="text-white px-5">
            Hello, this is photography section, here you can find all my code
            projects imported from
            <a href="https://www.instagram.com/t_damer/">Instagram</a>, others
            were stored locally and now you can enjoy them here. I like
            photography as a hobby, not something professional, enjoy 📸
          </p>
          <Card>
            <div>
              <h3 className={gradientText}>My avatars</h3>
              <p className="text-white py-4 px-5">
                Basically, I began as a photographer, my first photoshop was my
                user profile photo. I change my avatar when a cool idea comes
                in, so there was many of them, take a look!
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
                Here i do my job, relax, chat
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

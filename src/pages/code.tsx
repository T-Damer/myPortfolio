import { gradientText } from 'components/Text'
import Card from 'components/Card'
import { Component } from 'react'
import { FormattedMessage } from 'react-intl'

class Code extends Component {
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
            <FormattedMessage id="code" />:{' '}
          </h2>
          <p className="text-white px-5">
            <FormattedMessage id="code1" />{' '}
            <a href="https://github.com/T-Damer">GitHub</a>
            <FormattedMessage id="code2" />
          </p>
          <Card>
            <div>
              <h3 className={gradientText}>project_manager</h3>
              <p className="text-white py-2">
                <span className="text-white font-bold">Description:</span>{' '}
                Simple project_manager, you can login and add your projects,
                also see other's project. Build with TS+React+Redux+Firebase
              </p>
              <p className="text-white py-2">
                <span className="text-white font-bold">Problem: </span> We have
                many databases, I decided to test firebase with Redux, also
                connected TypeScript
              </p>
              <p className="text-white py-2">
                <span className="text-white font-bold">Solution: </span> A good
                decision was to use TypeScript, it really facilitated the task.
                Redux is pretty flexible, so I choose it instead of mobx, also
                it's really good to use with firebase, because we have packages
                that make the task easier
              </p>
              <p className="text-white py-2">
                <span className="text-white font-bold">Reason: </span> As we
                know, we can host our web-site using firebase, also it's really
                friendly to new developers, we can set rules and create
                collection really fast. Redux helped with it's different
                actions, that we can create from zero
              </p>
              <p className="text-white font-bold py-2">Links:</p>
              <ul className="text-white list-disc px-10">
                <li>
                  <a href="https://github.com/T-Damer/project_manager_public">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://github.com/T-Damer/project_manager_public/releases/tag/1.0.0">
                    Packages
                  </a>
                </li>
                <li>
                  <a
                    href="https://insta-clone-react-62357.web.app/"
                    className="text-yellow-300"
                  >
                    Hosted here
                  </a>
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <div>
              <h3 className={gradientText}>py-qt-yt-downloader</h3>
              <p className="text-white py-2">
                <span className="text-white font-bold">Description:</span>{' '}
                Simple downloader, built with QtDesigner and Python also very
                useful for those who want to learn this two tecnologies.
              </p>
              <p className="text-white py-2">
                <span className="text-white font-bold">Problem: </span> User
                wants to download video from youtube and he don't want big
                programs, simple one. We have many options to build GUI with
                Python, but which to choose? Also how can we download videos
                from youtube?
              </p>
              <p className="text-white py-2">
                <span className="text-white font-bold">Solution: </span> In my
                opinion QtDesigner is one of the simplest way to create GUI for
                windows. It is not crossplatform, but suitable for training. To
                load youtube video we will use special library for python.
              </p>
              <p className="text-white py-2">
                <span className="text-white font-bold">Reason: </span> As we
                know, python is famous because of it's packages for every
                problem. Also QtDesigner is a good to know how windows window
                system works.
              </p>
              <p className="text-white font-bold py-2">Links:</p>
              <ul className="text-white list-disc px-10">
                <li>
                  <a href="https://github.com/T-Damer/py-qt-youtube-downloader">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://github.com/T-Damer/py-qt-youtube-downloader/releases/tag/1.0.0">
                    Packages
                  </a>
                </li>
              </ul>
            </div>
          </Card>
          <Card>
            <div>
              <h3 className={gradientText}>myPorfolio</h3>
              <p className="text-white py-2">
                <span className="text-white font-bold">Description:</span> This
                website. Was created with typescript, react, tailwind and i18n
                locales. Designed in figma with cool glassMorphism style. Used
                to be adaptive and responsive.
              </p>
              <p className="text-white py-2">
                <span className="text-white font-bold">Problem: </span> We have
                many web-site builders, but usually they're not-free and very
                limited in functions. I needed a portfolio for all my work.
              </p>
              <p className="text-white py-2">
                <span className="text-white font-bold">Solution: </span> I
                decided to build web-site using react.js and tailwind, then host
                it. I found good template, we have many things preconfigured
                here. TypeScript included because project may scale and I don't
                want to cath bugs like wrong import `{`App`}`
              </p>
              <p className="text-white py-2">
                <span className="text-white font-bold">Reason: </span> As we
                know, react.js is popular because of reactive components. We can
                create something and reuse it without copying code, live preview
                included. Also I'm using tailwind to write styles awesomly fast
                and i18n to translate web.
              </p>
              <p className="text-white font-bold py-2">Links:</p>
              <ul className="text-white list-disc px-10">
                <li>
                  <a href="https://github.com/T-Damer/myPortfolio">Github</a>
                </li>
                <li>
                  <a href="https://www.figma.com/file/8BlqrbL7lIE6O5xX3EGuem/DamerPortfolio?node-id=60%3A99">
                    Figma board
                  </a>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default Code

import { gradientText } from 'components/Text'
import Card from 'components/Card'

export default function Body() {
  return (
    <div
      className="flex
    flex-grow
    items-center
    p-1 flex-col space-y-6"
    >
      <div className="glassWrapper flex-col md:flex-row">
        <div className="flex flex-grow p-5">
          <img src="/assets/grey_insphere.png" alt="Daniil Pankov" />
        </div>

        <div className="flex-column items-start">
          <h2 className={gradientText}>Daniil Pankov</h2>
          <p className="text-white">
            Hello, my name is Daniil. I’ve mastered backend and frontend
            development, I am also good at design, photography and a little at
            SMM. You can check my works in related sections.
          </p>
          <p className="text-white">
            I began as a designer and photographer, worked in
            <a href="https://aiesec.org/"> AIESEC</a> as a promoter on several
            forums and hosted the online event page. Soon I realized, that this
            is not enough to make a meaningful contribution to life, so I began
            to <span className="text-yellow-300">code</span>.
          </p>
        </div>
      </div>

      <div className="glassWrapper flex-col justify-start space-y-6">
        <h2 className={gradientText}>Current projects:</h2>
        <Card>
          <div>
            <h3 className={gradientText}>py-qt-yt-downloader</h3>
            <p className="text-white">
              Simple downloader, built with QtDesigner and Python also very
              useful for those who want to learn this two tecnologies. To begin
              installation, first download QtDesigner from official web-site,
              also install Python. Then choose an IDE, where you will work,
              there’s VSCode and PyCharm
            </p>
            <p className="text-white font-bold">Links:</p>
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
            <p className="text-white">
              This website. Was created with typescript, react, tailwind and
              i18n locales. Designed in figma with cool glassMorphism style.
              Used to be adaptive and responsive.
            </p>
            <p className="text-white font-bold">Links:</p>
            <ul className="text-white list-disc px-10">
              <li>
                <a href="https://github.com/T-Damer/myPortfolio">Github</a>
              </li>
              <li>
                <a href="https://www.figma.com/file/8BlqrbL7lIE6O5xX3EGuem/DamerPortfolio?node-id=60%3A99">
                  Figma
                </a>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}

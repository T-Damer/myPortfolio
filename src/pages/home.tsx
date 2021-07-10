import { gradientText } from 'components/Text'
import Root from 'components/Root'

export default function Home() {
  return (
    <Root>
      <div className="glassWrapper justify-center flex-row flex-grow">
        <div className="flex flex-shrink m-5">
          <img
            src="/assets/grey_insphere.png"
            alt="Daniil Pankov"
            width="600"
            height="600"
          />
        </div>

        <div className="flex-column m-5">
          <h2 className={gradientText}>Daniil Pankov</h2>
          <p className="text-white">
            Hello, my name is Daniil, and I’ve mastered backend and frontend
            development, also I am good at design, photography and a little at
            SMM. You can check my works in related sections.
          </p>
          <p className="text-white">
            I began as a designer and photographer, worked in{' '}
            <a href="https://aiesec.org/">AIESEC</a> as a promoter on several
            forums and hosted the online event page. Soon I realized, that this
            is not enough to make a meaningful contribution to life, so I began
            to <span className="text-yellow-300">code</span>.
          </p>
        </div>
      </div>
    </Root>
  )
}

import { gradientText } from 'components/Text'
import Card from 'components/Card'

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
      </div>
    </div>
  )
}

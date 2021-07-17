import { gradientText } from 'components/Text'
import Card from 'components/Card'

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
          projects. All projects listed in DPSR
          (Description-Problem-Solution-Reason), also there is links, related to
          project
        </p>
      </div>
    </div>
  )
}

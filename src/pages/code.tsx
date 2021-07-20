import { gradientText } from 'components/Text'
import Card from 'components/Card'

export default function Code() {
  return (
    <div
      className="flex
    flex-grow
    items-center
    p-1 flex-col space-y-6"
    >
      <div className="glassWrapper flex-col justify-start space-y-6">
        <h2 className={gradientText}>Code: </h2>
        <p className="text-white">
          Hello, this is code section, here you can find all my code projects
          imported from <a href="https://github.com/T-Damer">GitHub</a>. All
          projects listed in DPSR (Description-Problem-Solution-Reason), also
          there is links, related to project
        </p>
      </div>
    </div>
  )
}

import { gradientText } from 'components/Text'

export default function NotFound() {
  return (
    <div
      className="flex
    flex-grow
    items-center
    p-1 flex-col space-y-6"
    >
      <div className="glassWrapper flex-col justify-start space-y-6 text-white">
        <h2 className={gradientText}>Whoops, page does not exist</h2>
        <h1 className="p-3 text-7xl">Not Found</h1>
      </div>
    </div>
  )
}

import { gradientText } from 'components/Text'
import Card from 'components/Card'

export default function Photos() {
  return (
    <div
      className="flex
    flex-grow
    items-center
    p-1 flex-col space-y-6"
    >
      <div className="glassWrapper flex-col justify-start space-y-6">
        <h2 className={gradientText}>Photography: </h2>
        <p className="text-white">
          Hello, this is photography section, here you can find all my code
          projects imported from
          <a href="https://www.instagram.com/t_damer/">Instagram</a>, others
          were stored locally and now you can enjoy them here. I like
          photography as a hobby, not something professional, enjoy :)
        </p>
        <Card></Card>
      </div>
    </div>
  )
}

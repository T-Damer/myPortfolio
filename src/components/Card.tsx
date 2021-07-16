import { FC } from 'react'

const Card: FC = ({ children }) => {
  return <div className="glassWrapper flex-col width-full">{children}</div>
}

export default Card

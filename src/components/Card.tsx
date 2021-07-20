import { FC } from 'react'

const Card: FC = ({ children }) => {
  return <div className="card flex-col width-full">{children}</div>
}

export default Card

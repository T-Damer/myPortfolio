import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const root = classnames(
  'flex',
  'flex-col',
  'space-y-6',
  'justify-center',
  'items-center',
  'pt-4',
  'mx-auto',
  'max-w-full'
)
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

export default Root

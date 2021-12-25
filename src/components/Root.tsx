import { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import Stars from 'components/Stars'

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
  return (
    <>
      <Stars />
      <main className={root} data-scroll-container>
        {children}
      </main>
    </>
  )
}

export default Root

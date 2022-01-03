import { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import Stars from 'components/Stars'
import useRoot from 'components/Root/useRoot'

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
  const { rootRef } = useRoot()

  return (
    <>
      <Stars />
      <main className={root} data-scroll-container ref={rootRef}>
        {children}
      </main>
    </>
  )
}

export default Root

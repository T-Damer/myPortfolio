import { FC } from 'react'
import { classnames } from 'tailwindcss-classnames'

export const sectionContainer = classnames(
  'flex',
  'flex-grow',
  'items-center',
  'p-1',
  'flex-col',
  'space-y-6'
)

const galleryBox = classnames('rounded-lg', 'p-5')
export const GalleryBox: FC = ({ children }) => {
  return <div className={galleryBox}>{children}</div>
}

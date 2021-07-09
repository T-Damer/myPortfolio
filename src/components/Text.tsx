import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const whiteText = classnames('text-white')
const grayText = classnames('text-gray-300')
export const glassWrapper = classnames(
  'border-solid',
  'border-2',
  'border-opacity-30',
  'border-white',
  'box-border',
  'shadow-lg',
  'rounded-lg',
  'backdrop-blur',
  'text-white'
)

export const gradientText = classnames(
  'block',
  'font-bold',
  'px-4',
  'py-2',
  'bg-clip-text',
  'text-transparent',
  'bg-gradient-to-l',
  'from-pink-500',
  'to-yellow-500',
  'hover:from-yellow-500'
)

const headerText = classnames(
  whiteText,
  'text-3xl',
  'md:text-6xl',
  'font-bold',
  'text-center',
  'mb-6'
)
export const HeaderText: FC = ({ children }) => {
  return <p className={headerText}>{children}</p>
}

const subheaderText = classnames(
  whiteText,
  'text-xl',
  'md:text-2xl',
  'font-bold',
  'text-center',
  'my-12'
)
export const SubheaderText: FC = ({ children }) => {
  return <p className={subheaderText}>{children}</p>
}

const bodyText = classnames(grayText, 'text-center')
export const BodyText: FC = ({ children }) => {
  return <p className={bodyText}>{children}</p>
}

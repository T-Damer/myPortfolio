import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const whiteText = classnames('text-white', 'text-base')
const grayText = classnames('text-gray-300')

export const gradientText = classnames(
  'flex',
  'font-sans',
  'text-xl',
  'md:text-3xl',
  'font-bold',
  'bg-clip-text',
  'text-transparent',
  'bg-gradient-to-l',
  'from-yellow-700',
  'to-yellow-300',
  'hover:from-yellow-100'
)

export const greyGradientText = classnames(
  'block',
  'font-mono',
  'font-bold',
  'bg-clip-text',
  'text-transparent',
  'bg-gradient-to-l',
  'from-black-background',
  'to-white',
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

export const yellowText = classnames('text-yellow-400')

const bigHeader = classnames('p-3', 'text-7xl')
export const BigHeader: FC = ({ children }) => {
  return <h1 className={bigHeader}>{children}</h1>
}

const paragraphWithPaddings = classnames(whiteText, 'py-4', 'px-5')
export const ParagraphWithPaddings: FC = ({ children }) => {
  return <p className={paragraphWithPaddings}>{children}</p>
}

const paragraphPX5 = classnames(whiteText, 'px-5')
export const ParagraphPX5: FC = ({ children }) => {
  return <p className={paragraphPX5}>{children}</p>
}

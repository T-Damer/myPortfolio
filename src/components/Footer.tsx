import { FC } from 'react'
import { greyGradientText } from 'components/Text'
import { Link } from 'react-router-dom'

type FooterBarProps = {
  href: string
}

const FooterBar: FC<FooterBarProps> = ({ href, children }) => {
  return (
    <footer className="bottomwrapper">
      <div className="flex flex-row flex-grow items-center justify-center py-2 md:px-10 md:divide-x-4 md:divide-grey-500">
        <div className="flex flex-col flex-grow items-end justify-center px-10">
          <a href="/copyright">
            <p className="text-center text-white my-5">Copyright &copy; 2021</p>
          </a>
          <a href={href} className={`${greyGradientText} text-xl`}>
            <p>T.DaM∑R Portfolio</p>
          </a>
        </div>
        <div className="flex flex-grow justify-center items-start px-10">
          <ul className="flex flex-col flex-grow justify-center space-y-2 text-white">
            {children}
          </ul>
        </div>
      </div>
    </footer>
  )
}

const FooterItem: FC<FooterBarProps> = ({ href, children }) => {
  return (
    <li>
      <Link to={href} className={`py-4`}>
        {children}
      </Link>
    </li>
  )
}

export const Footer: FC = () => {
  return (
    <FooterBar href="/">
      <FooterItem href="/smm">Smm</FooterItem>
      <FooterItem href="/design">Design</FooterItem>
      <FooterItem href="/code">Code</FooterItem>
      <FooterItem href="/photos">Photos</FooterItem>
    </FooterBar>
  )
}

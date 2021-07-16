import { FC } from 'react'
import { greyGradientText } from 'components/Text'

type FooterBarProps = {
  href: string
}

const FooterBar: FC<FooterBarProps> = ({ href, children }) => {
  return (
    <footer className="bottomwrapper">
      <div className="flex flex-row flex-grow items-center justify-center py-2">
        <div className="flex flex-col flex-grow justify-center items-end">
          <a href={href} className={`${greyGradientText} text-xl`}>
            <p className="text-center">Copyright &copy;</p>
            <p>2021 T.DaM∑R Portfolio</p>
          </a>
        </div>
        <div>
          <ul className="flex flex-col flex-grow justify-center space-y-2 text-white">
            {children}
          </ul>
        </div>
      </div>
    </footer>
  )
}

type FooterItemProps = FooterBarProps

const FooterItem: FC<FooterItemProps> = ({ href, children }) => {
  return (
    <li>
      <a href={href} className={`block py-4`}>
        {children}
      </a>
    </li>
  )
}

export const Footer: FC = () => {
  return (
    <FooterBar href="/">
      <FooterItem href="/Smm">Smm</FooterItem>
      <FooterItem href="/Design">Design</FooterItem>
      <FooterItem href="/Code">Code</FooterItem>
      <FooterItem href="/Photos">Photos</FooterItem>
    </FooterBar>
  )
}

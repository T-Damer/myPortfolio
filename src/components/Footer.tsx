import { FC } from 'react'
import { greyGradientText } from 'components/Text'
import Root from 'components/Root'

type FooterBarProps = {
  href: string
}

const FooterBar: FC<FooterBarProps> = ({ href, children }) => {
  return (
    <nav className="glassWrapper">
      <div className="flex items-center justify-center">
        <a href={href} className={greyGradientText}>
          <p className="text-center">Copyright &copy;</p>
          <p>2021 T.DaM∑R Portfolio</p>
        </a>
        <ul className="flex space-x-2 text-white">{children}</ul>
      </div>
    </nav>
  )
}

type FooterItemProps = FooterBarProps

const FooterItem: FC<FooterItemProps> = ({ href, children }) => {
  return (
    <li>
      <a href={href} className={`block px-4 py-2 rounded-md`}>
        {children}
      </a>
    </li>
  )
}

export const Footer: FC = () => {
  return (
    <Root>
      <FooterBar href="/">
        <FooterItem href="/Smm">Smm</FooterItem>
        <FooterItem href="/Design">Design</FooterItem>
        <FooterItem href="/Code">Code</FooterItem>
        <FooterItem href="/Photos">Photos</FooterItem>
      </FooterBar>
    </Root>
  )
}

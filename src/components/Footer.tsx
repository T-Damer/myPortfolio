import { FC } from 'react'
import { greyGradientText } from 'components/Text'
import { NavLink } from 'react-router-dom'
import { classnames } from 'classnames/tailwind'
import { FormattedMessage } from 'react-intl'

type FooterBarProps = {
  href: string
}

const footerLinkActive = classnames('text-yellow-400')

const FooterBar: FC<FooterBarProps> = ({ href, children }) => {
  return (
    <footer className="bottomwrapper">
      <div className="flex flex-row flex-grow items-center justify-center py-2 md:px-10 md:divide-x-4 md:divide-grey-500">
        <div className="flex flex-col flex-grow items-end justify-center px-10">
          <NavLink to="/copyright" activeClassName={footerLinkActive}>
            <p className="text-center text-white my-5 hover:text-yellow-300">
              Copyright &copy; 2021
            </p>
          </NavLink>
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
    <li className="footer__item">
      <NavLink to={href} activeClassName={footerLinkActive} className={`py-4`}>
        {children}
      </NavLink>
    </li>
  )
}

export const Footer: FC = () => {
  return (
    <FooterBar href="/myPortfolio">
      <FooterItem href="/design">
        <FormattedMessage id="design" />
      </FooterItem>
      <FooterItem href="/code">
        <FormattedMessage id="code" />
      </FooterItem>
      <FooterItem href="/photos">
        <FormattedMessage id="photography" />
      </FooterItem>
    </FooterBar>
  )
}

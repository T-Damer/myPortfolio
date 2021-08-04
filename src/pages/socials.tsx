import SocialLink from 'components/SocialLink'
import { Component } from 'react'

class Socials extends Component {
  render() {
    return (
      <div className="glassWrapper flex-row justify-center space-x-3 ">
        <SocialLink>
          <a href="https://github.com/T-Damer">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/developer-tool-1889494-1597554.png"
              alt="GitHub"
              className="heartbeat"
            />
          </a>
        </SocialLink>

        <SocialLink>
          <a href="https://twitter.com/True_Damer">
            <img
              src="https://static.cdnlogo.com/logos/t/96/twitter-icon.svg"
              alt="Twitter"
              className="heartbeat"
            />
          </a>
        </SocialLink>

        <SocialLink>
          <a href="https://discord.com/users/287475060493516810r">
            <img
              src="https://image.flaticon.com/icons/png/512/906/906361.png"
              alt="Discord"
              className="heartbeat"
            />
          </a>
        </SocialLink>

        <SocialLink>
          <a href="https://linkedin.com/in/t-damer">
            <img
              src="https://img.icons8.com/color/480/000000/linkedin-circled--v1.png"
              alt="LinkedIn"
              className="heartbeat"
            />
          </a>
        </SocialLink>

        <SocialLink>
          <a href="https://www.instagram.com/t_damer/">
            <img
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png"
              alt="Instagram"
              className="heartbeat align-center justify-center"
            />
          </a>
        </SocialLink>
      </div>
    )
  }
}

export default Socials

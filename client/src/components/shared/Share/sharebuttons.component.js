import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  MailruShareButton,
  MailruIcon,
  OKShareButton,
  OKIcon,
  VKIcon,
  VKShareButton,
  ViberIcon,
  ViberShareButton
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags, className}) => {

    return(
        <div>
          <FacebookShareButton url={url}  className={className}>
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>
          <MailruShareButton url={url} title={title} via={twitterHandle} hashtags={tags}  className={className}>
                <MailruIcon  size={40} round={true} />
          </MailruShareButton>
          <OKShareButton url={url} title={title} via={twitterHandle} hashtags={tags}  className={className}>
                <OKIcon  size={40} round={true} />
          </OKShareButton> 
         <VKShareButton url={url} title={title} via={twitterHandle} hashtags={tags}  className={className}>
                <VKIcon  size={40} round={true} />
          </VKShareButton>
          <ViberShareButton url={url} title={title} via={twitterHandle} hashtags={tags}  className={className}>
                <ViberIcon  size={40} round={true} />
          </ViberShareButton>

    

          
        </div>
      )

}
export default ShareButtons
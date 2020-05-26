import React from 'react';
import { Content } from './FooterCSS';
import { Email, GithubImage, Linkedin } from '../../Icons';

const Footer = () => {
  return (
    <Content>
      <div className="footer-wrapper footer ">

        <div className="footer-email">
          <a href="mailto:email@email.com"><Email /> <span>email@email.com</span></a>
        </div>

        <div className="footer-logo">L</div>

        <div className="footer-social">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><GithubImage /> <span>github</span></a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><Linkedin /> <span>linkedin</span></a>
        </div>
      </div>
    </Content>
  )
}

export default Footer

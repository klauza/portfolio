import React from 'react';
import { Content } from './FooterCSS';
import { Email, GithubImage, Linkedin } from '../../Icons';
import { FooterBackground } from '../../media';

const Footer = () => {
  return (
    <Content backgroundImage={FooterBackground}>
      <div className="footer-wrapper footer ">

        <div className="footer-icons">
          <a href="mailto:klauza.dev@gmail.com"><Email /> <span>klauza.dev@gmail.com</span></a>
          <a href="https://github.com/klauza" target="_blank" rel="noopener noreferrer"><GithubImage /> <span>github</span></a>
          <a href="https://www.linkedin.com/in/michal-klauza/" target="_blank" rel="noopener noreferrer"><Linkedin /> <span>linkedin</span></a>
        </div>
      </div>
    </Content>
  )
}

export default Footer

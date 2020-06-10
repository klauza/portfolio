import React from 'react';
import { Content } from './FooterCSS';
import { Email, GithubImage, Linkedin } from '../../Icons';
import { FooterBackground } from '../../media';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Content backgroundImage={FooterBackground}>
      <div className="footer-wrapper footer ">

        <div className="footer-icons">
          <NavLink to="/contact"><Email /> <span>Contact</span></NavLink>
          <a href="https://github.com/klauza" target="_blank" rel="noopener noreferrer"><GithubImage /> <span>github</span></a>
          <a href="https://www.linkedin.com/in/michal-klauza/" target="_blank" rel="noopener noreferrer"><Linkedin /> <span>linkedin</span></a>
        </div>

        <div className="footer-copyright">
          © 2018-2020 Klauza
        </div>
      </div>
    </Content>
  )
}

export default Footer

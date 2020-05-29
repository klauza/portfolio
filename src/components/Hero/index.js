import React from 'react';
import { Container } from './HeroCSS';
import { herodb } from './db';
import { Arrow, Skateboard } from '../../Icons';
import { HeroBackground } from '../../media';

const Hero = () => {
  return (
    <Container backgroundImage={HeroBackground}>
      
      <div className="header-text">
      <i><h1>{herodb.top_text}</h1></i>
      </div>

      <div className="content content-wrapper">

        <div className="content--left">
          <div className="about-me">
            <h2><span style={{fontSize: "2.25em"}}>A</span>bout me</h2>
            {herodb.about_me_text.map((item, i) => <p key={i}>{item}</p>)} 
          </div>
          <div className="about-portfolio">
            <h2><span style={{fontSize: "2.25em"}}>A</span>bout portfolio</h2>
            {herodb.about_portfolio_text.map((item, i) => <p key={i}>{item}</p>)} 
          </div>
        </div>

        <div className="content--right">
          <div>
            <Skateboard />
          </div>
        </div>

      </div>


    </Container>
  )
}

export default Hero

import React from 'react';
import { Container } from './HeroCSS';
import { herodb } from './db';
import { Arrow } from '../../Icons';

const Hero = () => {
  return (
    <Container>
      <h1> {herodb.top_text} </h1>

      <div className="content content-wrapper">

        <div className="content--left">
          <div className="about-me">
            <h2>About me</h2>
            {herodb.about_me_text.map((item, i) => <p key={i}>{item}</p>)} 
          </div>
          <div className="about-portfolio">
            <h2>About portfolio</h2>
            {herodb.about_portfolio_text.map((item, i) => <p key={i}>{item}</p>)} 
          </div>
        </div>

        <div className="content--right">
          <div>
            <Arrow />
          </div>
        </div>

      </div>


    </Container>
  )
}

export default Hero

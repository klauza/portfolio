import React from 'react';
import { Container } from './HeroCSS';
import { herodb } from './db';
import { Skateboard } from '../../Icons';
// import delay from 'delay';
import { Spring } from 'react-spring/renderprops';

const Hero = () => {
  return (
    <Container>
      <div className="header-text">
      <i><h1>{herodb.top_text}</h1></i>
      </div>

      <div className="content content-wrapper">

        <Spring
          delay={500}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
        {props =>
        <div className="content--left" style={props}>

            <div className="about-me" >
              <h2><span style={{fontSize: "2.25em"}}>A</span>bout me</h2>
              {herodb.about_me_text.map((item, i) => <p key={i}>{item}</p>)} 
            </div>
          
          <div className="about-portfolio">
            <h2><span style={{fontSize: "2.25em"}}>A</span>bout portfolio</h2>
            {herodb.about_portfolio_text.map((item, i) => <p key={i}>{item}</p>)} 
          </div>
          
        </div>
        }
       </Spring>

        <Spring
          delay={650}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
        {props =>
          <div className="content--right" style={props}>
            <div>
              <Skateboard />
            </div>
          </div>
        }
        </Spring>

      </div>

    </Container>
  )
}

export default Hero
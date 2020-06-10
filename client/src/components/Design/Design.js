import React from 'react'
import GlowingCard from './GlowingCard';
import { Wrapper } from './DesignCSS';

const Design = ({refs}) => {
  return (
    <Wrapper ref={refs['c']} > 
      <h1>UI / UX / Photoshop</h1>
      <div className="container">
        <div className="box">
          <div className="content">
            <h2>water wave div</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ipsum? Tempora officiis, vel quibusdam architecto blanditiis eos eaque, ad, soluta explicabo alias rerum temporibus laborum.</p>
          </div>
        </div>
      </div>
      <svg>
        <filter id="wavy">
          <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
            <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02" repeatCount="indefinite"/>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
      </svg>

      <GlowingCard />

    </Wrapper>
  )
}

export default Design
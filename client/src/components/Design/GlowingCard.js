import React from 'react';
import styled from 'styled-components';

const Wrappers = styled.div`

  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #060c21;

  &::before{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #000;
    z-index: -1; 
  }
  
  &::after{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #000;
    z-index: -2; 
    filter: blur(40px);
  }

  &::before, &::after{
    background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
  }

  .content-2{
    padding: 20px;
    color: #fff;
  }
`;

const GlowingCard = () => {
  return (
    <Wrappers>
      
      <div className="content-2">
        <h1>Glowing Border</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorum debitis et, quisquam tempore, reiciendis nemo quaerat quibusdam perferendis officia eligendi quo?</p>
      </div>

    </Wrappers>
  )
}

export default GlowingCard

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;

  .box{
    display: flex; flex-direction: row;
    justify-items: space-between;
    background: #000;
    width: 100%;

    div{
      width: 100%;
      height: 35px;      
      border: 1px solid red;
      color: #fff;

      span{

      }
    }
  }

  // screen
  @media(min-width: 998px){
    top: 0;
    bottom: unset;

    transform: translate(${props => props.hide ? "0, -35px" : "0, 0px"});
    transition: transform 100ms linear;
  }


`;

const Navigation = ( {hidden, handleClick} ) => {

  
  console.log(hidden);
  

  return (
    <Wrapper 
      hide={hidden}
    >
      <div className="box">
        <div onClick={()=>handleClick('a')} className="bullet-1"><span>Main projects</span></div>
        <div onClick={()=>handleClick('b')} className="bullet-2"><span>Side projects</span></div>
        <div onClick={()=>handleClick('c')} className="bullet-3"><span>Design</span></div>
      </div>
    </Wrapper>
  )
}

export default Navigation

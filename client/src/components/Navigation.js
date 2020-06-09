import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 35px; 
  background: #000;
  .hide-mobile{
    display: none;
  }

  .box{    
    height: 100%; 
    display: flex; flex-direction: row;
    justify-items: space-between;
    align-items: center;
    width: 100%;

    div{
      width: 100%; 
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

    display: flex;
    flex-direction: row;

    .hide-mobile{
      display: block;
    }
    .box{
      
      // width: 1024px;
      margin: 0 auto;
      justify-items: unset;
      width: auto;
      div{
        width: 200px;
      }
      
    }
  }


`;

const Navigation = ( {hidden, handleClick} ) => {

  
  

  return (
    <Wrapper 
      hide={hidden}
    >
      <div className="hide-mobile" />
      <div className="box">
        <div onClick={()=>handleClick('a')} className="bullet-1"><span>Main projects</span></div>
        <div onClick={()=>handleClick('b')} className="bullet-2"><span>Side projects</span></div>
        <div onClick={()=>handleClick('c')} className="bullet-3"><span>Design</span></div>
      </div>
    </Wrapper>
  )
}

export default Navigation

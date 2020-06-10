import React from 'react'
import MailForm from '../components/MailForm/MailForm'; 
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { Spring } from 'react-spring/renderprops';

const Wrapper = styled.div`
  will-change: transform, opacity;
  position: absolute;
  top: 50px; left: 50%; transform: translateX(-50%);
 
  .content{
    margin: 0 auto;
    height: auto;
    width: 100%;
  }

  a{
    padding: 5px 25px;
    background: #000;
    color: #fff;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.6);
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    width: 100%;

    &:hover{
      cursor: pointer;
      box-shadow: 0 0 4px 0 rgba(0,0,0,.85);
      color: lightgrey;
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <div className="content">
        <NavLink to="/">BACK</NavLink>
        <MailForm />
      </div>
    </Wrapper>
  )
}

export default Contact

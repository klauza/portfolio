import React, {useEffect} from 'react'
import MailForm from '../components/MailForm'; 
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';

const Wrapper = styled.div`
  will-change: transform, opacity;
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const Contact = () => {

  useEffect(()=>{

  }, [])
  return (

    <Wrapper>
      <NavLink to="/"><button>BACK</button></NavLink>

          <MailForm />

    </Wrapper>
  )
  
}

export default Contact

import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%; 
  height: 200px;
  background-image: url(${props => props.bg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  // background: #000;

  @media(max-width: 768px){
    height: 125px;
  }
`;

const Parallax = ( {img} ) => {
  return (
    <Container bg={img} />
  )
}

export default Parallax

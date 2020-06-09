import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 150vh;
  background: lightgreen;
`;

const MinorProjects = ({refs}) => {
  return (
    <Wrapper ref={refs['b']} style={{paddingTop: "100px"}}> 
      <h1>MINOR PROJECTS</h1>

      <div>
      
      </div>
    </Wrapper>
  )
}

export default MinorProjects

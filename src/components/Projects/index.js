import React from 'react';
import Single from './Single';
import { Container } from './ProjectsCSS';
import { projectList } from './database';

const Projects = () => {
  return (
    <Container>
      
      {/* map projects */}
      {projectList.map((project, i) => <Single key={i} project={project} /> )}

    </Container>
  )
}

export default Projects
import React from 'react';
import Single from './Single';
import Parallax from './Parallax';
import { Container } from './ProjectsCSS';
import { projectList } from './database';

const parallaxImage = "https://images.pexels.com/photos/3052725/pexels-photo-3052725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const Projects = ({refs}) => {
  return (
    <Container ref={refs['a']} >
        {projectList.map((project, i) => <React.Fragment key={i}> <Single project={project} /> <Parallax img={parallaxImage} /></ React.Fragment> )}
    </Container>
  )
}
export default Projects
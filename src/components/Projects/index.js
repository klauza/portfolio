import React from 'react';
import Single from './Single';
import SingleMobile from './SingleMobile';
import { Container } from './ProjectsCSS';
import { projectList } from './database';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

const Projects = () => {
  return (
    <Container>
      
      {/* map projects */}

      {/* <BrowserView> */}
        {projectList.map((project, i) => <Single key={i} project={project} /> )}
      {/* </BrowserView> */}

      {/* <MobileView> */}
        {/* {projectList.map((project, i) => <SingleMobile key={i} project={project} /> )} */}
      {/* </MobileView> */}

    </Container>
  )
}

export default Projects
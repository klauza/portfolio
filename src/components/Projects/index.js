import React from 'react';
import Single from './Single';
// import SingleMobile from './SingleMobile';
import { Container } from './ProjectsCSS';
import { projectList } from './database';
// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";


const Projects = () => {
  return (
    <Container>
      
      {/* map projects */}

      {/* <BrowserView> */}
        {projectList.map((project, i) => <React.Fragment key={i}> <Single project={project} /> <div style={{background: "#000", width: "100%", height: "100px"}} /></ React.Fragment> )}
      {/* </BrowserView> */}

      {/* <MobileView> */}
        {/* {projectList.map((project, i) => <SingleMobile key={i} project={project} /> )} */}
      {/* </MobileView> */}

    </Container>
  )
}

export default Projects
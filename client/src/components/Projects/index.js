import React from 'react';
import Single from './Single';
import Parallax from './Parallax';
// import SingleMobile from './SingleMobile';
import { Container } from './ProjectsCSS';
import { projectList } from './database';
// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

const parallaxImages = [
  "https://images.pexels.com/photos/3052725/pexels-photo-3052725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3052725/pexels-photo-3052725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3052725/pexels-photo-3052725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3052725/pexels-photo-3052725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,",
  "https://images.pexels.com/photos/3052725/pexels-photo-3052725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,"
]

const Projects = ({refs}) => {
  return (
    <Container ref={refs['a']} >
      
      {/* map projects */}

      {/* <BrowserView> */}
        {projectList.map((project, i) => <React.Fragment key={i}> <Single project={project} /> <Parallax img={parallaxImages[i]} /></ React.Fragment> )}
      {/* </BrowserView> */}

      {/* <MobileView> */}
        {/* {projectList.map((project, i) => <SingleMobile key={i} project={project} /> )} */}
      {/* </MobileView> */}

    </Container>
  )
}

export default Projects
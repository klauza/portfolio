import React, { useState } from 'react';
// import { isMobile } from "react-device-detect";

import { Keyframes, animated, Spring } from 'react-spring/renderprops';
import delay from 'delay';
import { Project } from './ProjectsCSS';
import { Secured, Arrow, TechnicalSupport, Coding, Youtube } from '../../Icons';
import { projectQty } from './database';

const detectMob = () => {
  return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  // peek: [{ x: 0, from: { x: -100 }, delay: 500 }, { x: -100, delay: 800 }],
  // single items,
  open: { delay: 0, x: 0 },
  // or async functions with side-effects
  close: async call => {
    await delay(400)
    await call({ delay: 0, x: 100 })
  },
})

const Waves = Keyframes.Spring({
  open: { delay: 0, x: 15 },
  // or async functions with side-effects
  close: async call => {
    await delay(400)
    await call({ delay: 0, x: 100 })
  },
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  // peek: [
  //   { x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 },
  //   { x: -100, opacity: 0, delay: 0 },
  // ],
  open: { x: 0, opacity: 1, delay: 100 },
  close: { x: 100, opacity: 0, delay: 0 },
})





const Single = ({project}) => {
  
  // ITEMS for content
  const items = [
    <div className="technologies">
      <div className="technologies--top">
        <Coding />
        <h2>Technologies</h2>
      </div>
      <div className="technologies--bot">
        <ul>
          {project.technologies.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>,

    <div className="features">
      <div className="features--top">
        <TechnicalSupport />
        <h2>Features</h2>
      </div>
      <div className="features--bot">
        <ul>
          {project.features.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>,
    
    <div className="presentation">
      <div>
        <Youtube />
        <h2>Presentation</h2>
      </div>
    </div>,

    // <div className="presn-btn-top">
    //   <a href={project.link_youtube} target="_blank" rel="noopener noreferrer"><button>YouTube</button></a>
    // </div>,

    <div className="presn-btn-bot">
      <a href={project.link_github} target="_blank" rel="noopener noreferrer"><button>Github</button></a>
    </div>
    
   
  ]

  const [open, setOpen] = useState(false);





  const toggle = () => setOpen(!open);

  // React.useEffect(()=>{


  //   setOpen(open === undefined 
  //     ? 'peek'
  //     : this.state.open
  //     ? 'open'
  //     : 'close'
  //     );

  // }, [])

  const state = open === false
  ? 'close'
  : open
  ? 'open'
  : 'close';
  
  return (
    <Project 
      fontPrimaryColor={project.font_primary_color} 
      primaryColor={project.primary_color} 
      svgColors={[project.wave_color_1, project.wave_color_2, project.wave_color_3]} 
      sidebar_bg_color={project.wave_color_3}
      font_sidebar_secondary_color={project.font_sidebar_secondary_color}
      bgImageCSSscreen={project.bg_css_screen}
      bgImageCSSmobile={project.bg_css_mobile}
      >
      
      <div className="background-image" >
        {project.bg_image}
      </div>
      
      <div className="project-top-info" style={{background: `${project.wave_color_2}`}}>
        <div><span>{project.id} / {projectQty}</span></div>
      </div>

      <div className="project-main-content">
        <div className="main-content-positioning">
          <div><img src={project.icon} alt="" /><h1>{project.name}</h1></div>
          <h4>{project.desc_short}</h4>
          <p>{project.desc_long}</p>
    
          <div className="live-link-container">
            <a href={project.link_live} target="_blank" rel="noopener noreferrer">
              <span><Secured/>https://</span>
              <span>{project.link_text_live}</span>
            </a>
          </div>

        </div>
      </div>

      <div className="project-justify">

        {/* waves */}
        
        <Waves native state={state}>
          {({ x }) => (

            <animated.div
            onClick={toggle}
            className="svg-waves-container noSelect"
            style={{
              transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
            }}>

              <Spring
                delay={250}
                to={{ transform: open === false ? "rotateZ(0deg)" : "rotateZ(180deg)" }}
              >

                {props =>
                <animated.div className="show-more-less" style={props}>
                  <Arrow />
                </animated.div>
                } 
              </Spring>
             
              {project.background}

          </animated.div>
          )}
        </Waves>
   
            {/* hidden content */}
        <Sidebar native state={state}>
          {({ x }) => (
            <animated.div
              onClick={toggle}
              className="sidebar noSelect"
              style={{
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
              }}>

              <div className="sidebar-content">
                <Content
                  native
                  items={items}
                  keys={items.map((_, i) => i)}
                  reverse={!open}
                  state={state}>
                  {(item, i) => ({ x, ...props }) => (
                    <animated.div
                      style={{
                        transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                        ...props,
                      }}>
                    
                        {item}
                    
                    </animated.div>
                  )}
                </Content>
              </div>

            </animated.div>
          )}
        </Sidebar>

       

      </div>

    </Project>
  )
}

export default Single

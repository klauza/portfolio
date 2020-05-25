import React, { useRef, useEffect, useState } from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import { Keyframes, animated, Spring } from 'react-spring/renderprops';
import delay from 'delay';
import { Project } from './ProjectsCSS';
import { Arrow, TechnicalSupport, Coding, Youtube } from '../../Icons';

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
  open: { delay: 0, x: isMobile ? -20 : 30 },
  // or async functions with side-effects
  close: async call => {
    await delay(400)
    await call({ delay: 0, x: isMobile ? 80 : 100 })
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

    <div className="presn-btn-top">
      <a href="https://www.google.com" target="_blank"><button>Youtube</button></a>
    </div>,

    <div className="presn-btn-bot">
      <a href="https://www.google.com" target="_blank"><button>Github</button></a>
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
  
  // const icon = open ? 'fold' : 'unfold';

  return (
    <Project fontPrimaryColor={project.font_primary_color} primaryColor={project.primary_color} svgColors={[project.wave_color_1, project.wave_color_2, project.wave_color_3]} >

      <div className="project-main-content">
        <div className="main-content-positioning">
          <div><img src={project.icon} alt="" /><h1>{project.name}</h1></div>
          <h4>{project.desc_short}</h4>
          <p>{project.desc_long}</p>
          <a href={project.link}><button style={{background:`${project.btn_bg_color}`, color:`${project.btn_text_color}`}}>Live page</button></a>
        </div>
      </div>

      <div className="project-justify">

        {/* waves */}
        
        <Waves native state={state}>
          {({ x }) => (

            <animated.div
            onClick={toggle}
            className="svg-waves-container"
            style={{
              transform: x.interpolate(x => `translate3d(${x+30}%,0,0)`)
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
              className="sidebar"
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

import React, { useState } from 'react';
import { Keyframes, animated } from 'react-spring/renderprops';
import delay from 'delay';
import { Project } from './ProjectsCSS';

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  // peek: [{ x: 0, from: { x: -100 }, delay: 500 }, { x: -100, delay: 800 }],
  // single items,
  open: { delay: 0, x: 0 },
  // or async functions with side-effects
  close: async call => {
    await delay(400)
    await call({ delay: 0, x: -100 })
  },
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  // peek: [
  //   { x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 },
  //   { x: -100, opacity: 0, delay: 0 },
  // ],
  open: { x: 0, opacity: 1, delay: 100 },
  close: { x: -100, opacity: 0, delay: 0 },
})





const Single = ({project}) => {

  // ITEMS for content
  const items = [
    <img src="https://www.smallbizgenius.net/wp-content/uploads/2019/06/smallbizgenius_favicon.png" alt="" />,
    <div>Div_{project.id}</div>,
    <div>Div_2</div>,
    <React.Fragment>
      <input type="checkbox" />Check
      <button>button</button>
    </React.Fragment>,
  ]

  const [open, setOpen] = useState(undefined);


  const toggle = () => setOpen(!open);

  // React.useEffect(()=>{


  //   setOpen(open === undefined 
  //     ? 'peek'
  //     : this.state.open
  //     ? 'open'
  //     : 'close'
  //     );

  // }, [])

  const state = open === undefined
  ? 'close'
  : open
  ? 'open'
  : 'close';

  const icon = open ? 'fold' : 'unfold';

  return (
    <Project>

      <div style={{ background: 'lightblue', width: '100%', height: '100%' }}>
        <div
          style={{width: '20px', height: '20px', background: 'red'}}
          onClick={toggle}
        />
        <Sidebar native state={state}>
          {({ x }) => (
            <animated.div
              className="sidebar"
              style={{
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
              }}>
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
                      {/* <Form.Item className={i === 0 ? 'middle' : ''}> */}
                      {item}
                    {/* </Form.Item> */}
                  </animated.div>
                )}
              </Content>
            </animated.div>
          )}
        </Sidebar>
      </div>

    </Project>
  )
}

export default Single

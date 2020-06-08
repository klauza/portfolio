import React, {createRef} from 'react';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MinorProjects from './components/MinorProjects';
import Design from './components/Design';
function App() {

  // scroll to
  const anchors = [
    {
      id: 'a',
      title: "Main projects"
    },
    {
      id: 'b',
      title: "Side projects"
    },
    {
      id: 'c',
      title: "Design"
    }
  ]
  
  const refs = anchors.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {})

  const handleClick = id =>
  refs[id].current.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  }); 

  // 'hide' function for screen device
  const [hidden, setHidden] = React.useState(false);

  const handleWheel = (e) => {
    let direction;
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
      direction = -e.deltaY;
    } else{
      direction = e.nativeEvent.wheelDelta;
    }

    if(direction < 0){
      setHidden(true);
    } else if(direction > 0){
      setHidden(false);
    }
  }

  return (
    <div className="App" onWheel={(e)=>handleWheel(e)}>
      {/* <Navigation hidden={hidden} handleClick={handleClick} /> */}
      <Hero />
      <Projects refs={refs} />
      {/* <MinorProjects refs={refs} /> */}
      {/* <Design refs={refs} /> */}
      <Footer />
    </div>
  );
}

export default App;

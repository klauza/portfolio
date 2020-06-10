import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring'

// Home
import Home from './views/Home'; 
// Contact
import Contact from './views/Contact'; 
// Error404
import Error404 from './views/Error404'; 


function App() {
  const location = useLocation()

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route exact path="/" component={Home}  />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
    </animated.div>
  ))
  );
}

export default App;
import React from 'react'

const Design = ({refs}) => {
  return (
    <div ref={refs['c']} style={{height: "150vh", background: "lightblue", paddingTop: "100px"}} > 
      <h1>DESIGN</h1>
    </div>
  )
}

export default Design

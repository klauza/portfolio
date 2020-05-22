import React from 'react'

const Single = ({project}) => {
  return (
    <div style={{height: "100vh", backgroundColor: project.primary_color}}>
      {project.id}
    </div>
  )
}

export default Single

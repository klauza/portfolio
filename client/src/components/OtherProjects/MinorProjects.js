import React from 'react';
import { Wrapper, Card } from './MinorProjectsCSS';
import { otherProjects } from './db';

const MinorProjects = ({refs}) => {
  return (
    <Wrapper ref={refs['b']} style={{paddingTop: "100px", background: '#d4d4d4'}}> 
      <h2>Other projects</h2>
      <div className="container">

        {otherProjects.map((project, id) => 
        <Card className="card" key={id} colors={project.color}>
          <div className="imgBx" data-text={project.title}>
            <img src={project.img} alt=""/>
          </div>
        
          <div className="content">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">App link</a>
            </div>
          </div>
        </Card>  
        )}

      </div>
    </Wrapper>
  )
}

export default MinorProjects
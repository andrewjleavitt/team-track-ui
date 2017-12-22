import React from 'react'
import Clear from './Clear'

function ProjectDetail(props) {
  const project = props.project

  return (
    <div>
      <Clear stateToClear={props.stateToClear} onClearClick={props.onClearClick}/>
      <h2>{project.name}</h2>
      <div>
        Status: {project.status}<br/>
        Health: {project.health}
      </div>
    </div>
  )
}

export default ProjectDetail
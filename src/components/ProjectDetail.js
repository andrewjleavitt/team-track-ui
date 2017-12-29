import React from 'react'
import Clear from './Clear'
import ProjectAssignmentList from './ProjectAssignmentList'

function ProjectDetail(props) {
  const project = props.project
  const teams = props.teams

  return (
    <div>
      <Clear stateToClear={props.stateToClear} onClearClick={props.onClearClick}/>
      <h2>{project.name}</h2>
      <div>
        Status: {project.status}<br/>
        Health: {project.health}
      </div>
      <div>
        <ProjectAssignmentList project={project} teams={teams}/>
      </div>
    </div>
  )
}

export default ProjectDetail
import React from 'react'
import {Grid, List} from 'semantic-ui-react'
import ProjectAdd from './ProjectAdd'
import ProjectDetail from './ProjectDetail'

function ProjectList(props) {
  const projects = props.projects
  const focusedProject = props.focusedProject
  const teams = props.teams
  const onProjectClick = props.onProjectClick
  const onClearClick = props.onClearClick
  const projectList = projects.map((project) => {
    return (<List.Item key={project.id}>
        <List.Content>
          <List.Header onClick={()=>onProjectClick(project)}>{project.name}</List.Header>
          <List.Description>
            health:{project.health}<br/>
            status:{project.status}
          </List.Description>
        </List.Content>
      </List.Item>
    )
  })

  const projectDetail = focusedProject == null ?
    <ProjectAdd addProjectToList={props.addProjectToList}/>
    : <ProjectDetail
      project={focusedProject}
      onClearClick={onClearClick}
      stateToClear='focusedProject'
      teams={teams}
    />

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <List divided relaxed>{projectList}</List>
        </Grid.Column>
        <Grid.Column width={12}>
          {projectDetail}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ProjectList
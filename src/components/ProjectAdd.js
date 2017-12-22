import React from 'react'
import {Form, Button, Header} from 'semantic-ui-react'
import ProjectService from '../lib/ProjectService'
class ProjectAdd extends React.Component {
  state = {
    name: '',
    status: '',
    health: ''
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSelectChange = (event, result) => {
    const {name, value} = result
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault()
    ProjectService.addProject({
      name: this.state.name,
      status: this.state.status,
      health: this.state.health
    }, this.props.addProjectToList)
    this.setState({name: ''})
    this.setState({status: ''})
    this.setState({health: ''})
  }

  statusOptions() {
    return ['not started', 'started', 'completed'].map((status) => {
      return {key: status, value: status, text: status}
    })
  }

  healthOptions() {
    return  ['green', 'yellow', 'red'].map((status) => {
      return {key: status, value: status, text: status}
    })
  }

  render() {

    return (
      <div>
        <Header size='small'>Add a Project</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field
              control='input'
              label='Name'
              name='name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Select
              label='Status'
              name='status'
              placeholder='select a status'
              options={this.statusOptions()}
              onChange={this.handleSelectChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Select
              label='Health'
              name='health'
              placeholder='select a health'
              options={this.healthOptions()}
              onChange={this.handleSelectChange}
            />
          </Form.Group>
          <Button type="submit">Add Project</Button>
        </Form>
      </div>
    )
  }
}

export default ProjectAdd
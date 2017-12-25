import React, {Component} from 'react'
import TeamService from "../lib/TeamService";
import {Header, Form, Button} from 'semantic-ui-react'
class TeamAdd extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) => {
    TeamService.addTeam(this.state.name, this.props.addTeamToList)
    this.setState({name: ''})
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <Header size='small'>Add a team</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field
              control="input"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Add Team</Button>
        </Form>
      </div>
    )
  }
}

export default TeamAdd
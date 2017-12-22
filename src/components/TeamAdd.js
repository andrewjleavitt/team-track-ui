import React, {Component} from 'react'
import TeamService from "../lib/TeamService";
import {Header} from 'semantic-ui-react'

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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Add Team"/>
        </form>
      </div>
    )
  }
}

export default TeamAdd
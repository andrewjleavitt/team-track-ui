import React from 'react'
import {Select} from 'semantic-ui-react'
import MemberService from '../lib/MemberService'

class AssignMemberToTeam extends React.Component {

  state = {
    selectedTeam: null
  }

  handleSelectTeam = (event, result) => {
    const {name, value} = result
    this.setState({selectedTeam: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const member = this.props.member
    const team_id = this.state.selectedTeam
    MemberService.assignToTeam({member_id: member.id, team_id: team_id}, this.props.addTeamAssignmentToList)
  }

  render() {
    const member = this.props.member
    const teams = this.props.teams
    const teamOptions = teams.map((team) => {
      return {key: team.name, value: team.id, text: team.name}
    })
    return (
      <div>
        <h3>Assign {member.name} to team</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Team:
            <Select placeholder='Select a team' options={teamOptions} onChange={this.handleSelectTeam}/>
          </label>
          <input type="submit" value="Assign"/>
        </form>
      </div>
    )
  }
}

export default AssignMemberToTeam
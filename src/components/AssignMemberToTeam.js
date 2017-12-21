import React from 'react'
import {Select, Form, Button} from 'semantic-ui-react'
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Select
              label='New Team Assignment'
              placeholder='Select a team'
              options={teamOptions}
              onChange={this.handleSelectTeam}
            />
          </Form.Group>
          <Button type="submit">Assign</Button>
        </Form>
      </div>
    )
  }
}

export default AssignMemberToTeam
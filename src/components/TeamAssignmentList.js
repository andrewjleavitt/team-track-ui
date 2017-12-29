import React from 'react'
import MemberService from '../lib/MemberService'
import TeamAssignment from './TeamAssignment'
import AssignMemberToTeam from './AssignMemberToTeam'
import {List} from 'semantic-ui-react'


class TeamAssignmentList extends React.Component {

  state = {
    teamAssignmentList: []
  }

  componentWillMount() {
    MemberService.fetchTeamAssignmentListFor(this.props.member, this.teamAssignmentsFetched)
  }

  componentWillReceiveProps(nextProps) {
    MemberService.fetchTeamAssignmentListFor(nextProps.member, this.teamAssignmentsFetched)
  }

  teamAssignmentsFetched = (teamAssignmentList) => {
    this.setState({teamAssignmentList: teamAssignmentList})
  }

  addTeamAssignmentToList = (teamAssignment) => {
    this.setState({teamAssignmentList: [...this.state.teamAssignmentList, teamAssignment]})
  }

  render() {
    const teams = this.props.teams
    const teamAssignments = this.state.teamAssignmentList.map((teamAssignment) => {
      const team = teams.find(team => team.id === teamAssignment.team_id)
      return (
        <List.Item key={teamAssignment.id}
        >
          <TeamAssignment
            teamAssignment={teamAssignment}
            team={team}
          />
        </List.Item>
      )
    })

    return (
      <div>
        <AssignMemberToTeam member={this.props.member} teams={teams}
                            addTeamAssignmentToList={this.addTeamAssignmentToList}/>
        <h3>Team Assignments</h3>
        <List divided relaxed>
          {teamAssignments}
        </List>
      </div>
    )
  }
}

export default TeamAssignmentList
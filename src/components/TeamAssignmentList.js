import React from 'react'
import TeamAssignmentService from '../lib/TeamAssignmentService'
import TeamAssignment from './TeamAssignment'
import AssignMemberToTeam from './AssignMemberToTeam'


class TeamAssignmentList extends React.Component {

  state = {
    teamAssignmentList: []
  }

  componentWillMount() {
    TeamAssignmentService.fetchTeamAssignmentListFor(this.props.member, this.teamAssignmentsFetched)
  }

  componentWillReceiveProps(nextProps) {
    TeamAssignmentService.fetchTeamAssignmentListFor(nextProps.member, this.teamAssignmentsFetched)
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
      const team = teams.filter(team => team.id === teamAssignment.team_id)
      return <TeamAssignment
        key={teamAssignment.id}
        teamAssignment={teamAssignment}
        team={team[0]}
      />
    })

    return (
      <div>
        <AssignMemberToTeam member={this.props.member} teams={teams} addTeamAssignmentToList={this.addTeamAssignmentToList}/>
        <h3>Team Assignments</h3>
        {teamAssignments}
      </div>
    )
  }
}

export default TeamAssignmentList
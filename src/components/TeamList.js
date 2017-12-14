import React from 'react'
import TeamItem from './TeamItem'
import AddTeam from './TeamAdd'
import TeamDetail from './TeamDetail'

class TeamList extends React.Component {

  componentWillReceiveProps() {
    if (this.selectedTeam == null) {
      return
    }
  }

  render() {
    const focusedTeam = this.props.focusedTeam
    const teams = this.props.teams
    const teamList = teams.map((team) => {
      return <TeamItem
        key={team.id}
        onClick={() => {
          this.props.onTeamClick(team)
        }}
        team={team}
        active={true}/>
    })

    const teamDetail = focusedTeam == null ? undefined :
      <TeamDetail team={focusedTeam} onTeamCloseClick={this.props.onTeamCloseClick}/>

    return (
      <div>
        <AddTeam addTeamToList={this.props.addTeamToList}/>
        <h3>Team List</h3>
        <ul>{teamList}</ul>
        {teamDetail}
      </div>
    )
  }
}

export default TeamList
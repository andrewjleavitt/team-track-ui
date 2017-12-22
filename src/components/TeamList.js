import React from 'react'
import TeamItem from './TeamItem'
import AddTeam from './TeamAdd'
import TeamDetail from './TeamDetail'


function TeamList(props) {
    const onClearClick = props.onClearClick
    const focusedTeam = props.focusedTeam
    const teams = props.teams
    const teamList = teams.map((team) => {
      return (
        <TeamItem
          key={team.id}
          onClick={() => {
            props.onTeamClick(team)
          }}
          team={team}
          active={true}/>
      )
    })

    const teamDetail = focusedTeam == null ? undefined :
      <TeamDetail team={focusedTeam} onClearClick={onClearClick}/>

    return (
      <div>
        <AddTeam addTeamToList={props.addTeamToList}/>
        <ul>{teamList}</ul>
        {teamDetail}
      </div>
    )
}

export default TeamList
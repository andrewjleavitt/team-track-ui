import React from 'react'
import TeamClose from './TeamClose'
import 'pivotal-ui/css/modals'

function TeamDetail(props) {

  const team = props.team
  const onTeamCloseClick = props.onTeamCloseClick

  return (
    <div>
      <h2>{team.name}</h2>
      <div>
        <span>{team.name}</span>
      </div>
      <TeamClose onTeamCloseClick={onTeamCloseClick}/>
    </div>
  )
}

export default TeamDetail
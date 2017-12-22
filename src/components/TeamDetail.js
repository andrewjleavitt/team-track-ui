import React from 'react'
import Clear from './Clear'

function TeamDetail(props) {

  const team = props.team
  const onClearClick = props.onClearClick

  return (
    <div>
      <h2>{team.name}</h2>
      <div>
        <span>{team.name}</span>
      </div>
      <Clear onClearClick={onClearClick} stateToClear='focusedTeam'/>
    </div>
  )
}

export default TeamDetail
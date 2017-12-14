import React from 'react'

function TeamClose(props) {
  const onTeamCloseClick = props.onTeamCloseClick
  return <button onClick={onTeamCloseClick}>Close</button>
}

export default TeamClose
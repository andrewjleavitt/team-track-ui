import React from 'react'

const TeamAssignment = function(props) {
  const teamAssignment = props.teamAssignment
  const team = props.team

  return (
    <li>
      {teamAssignment.team_id}
      {team.name}
      {teamAssignment.effective_date}
      {teamAssignment.termination_date}
    </li>
  )
}

export default TeamAssignment
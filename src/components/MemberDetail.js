import React from 'react'
import Clear from './Clear'
import TeamAssignmentList from './TeamAssignmentList'

function MemberDetail(props) {
  const member = props.member
  const onClearClick = props.onClearClick
  const teams = props.teams

  return (
    <div>
      <Clear onClearClick={onClearClick} stateToClear='focusedMember'/>
      <h2>{member.name}</h2>
      <div>
        <TeamAssignmentList member={member} teams={teams}/>
      </div>
    </div>
  )
}

export default MemberDetail
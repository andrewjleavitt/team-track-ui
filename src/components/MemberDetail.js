import React from 'react'
import MemberClose from './MemberClose'
import TeamAssignmentList from './TeamAssignmentList'

function MemberDetail(props) {

  const member = props.member
  const onMemberCloseClick = props.onMemberCloseClick
  const teams = props.teams

  return (
    <div>
      <MemberClose onMemberCloseClick={onMemberCloseClick}/>
      <h2>{member.name}</h2>
      <div>
        <TeamAssignmentList member={member} teams={teams}/>
      </div>
    </div>
  )
}

export default MemberDetail
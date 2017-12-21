import React from 'react'
import MemberAdd from './MemberAdd'
import MemberDetail from './MemberDetail'

function MemberList(props) {
  const onMemberCloseClick = props.onMemberCloseClick
  const focusedMember = props.focusedMember
  const members = props.members
  const memberList = members.map((member) => {
    return <li
      key={member.name}
      onClick={() => props.onMemberClick(member)}>
      {member.name}
    </li>
  })

  const memberDetail = focusedMember == null ? undefined :
    <MemberDetail member={focusedMember} onMemberCloseClick={onMemberCloseClick} teams={props.teams}/>

  return (
    <div>
      <MemberAdd addMemberToList={props.addMemberToList}/>
      <ul>{memberList}</ul>
      {memberDetail}
    </div>
  )
}

export default MemberList
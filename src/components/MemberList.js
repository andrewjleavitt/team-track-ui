import React from 'react'
import MemberAdd from './MemberAdd'

function MemberList(props) {
  const members = props.members
  const memberList = members.map((member) => {
    return <li key={member.name}>{member.name}</li>
  })

  return (
    <div>
      <MemberAdd addMemberToList={props.addMemberToList}/>
      <ul>{memberList}</ul>
    </div>
  )
}

export default MemberList
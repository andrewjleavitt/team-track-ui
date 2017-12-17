import React from 'react'
import MemberClose from './MemberClose'

function MemberDetail(props) {

  const member = props.member
  const onMemberCloseClick = props.onMemberCloseClick

  return (
    <div>
      <h2>{member.name}</h2>
      <div>
        <span>{member.name}</span>
      </div>
      <MemberClose onMemberCloseClick={onMemberCloseClick}/>
    </div>
  )
}

export default MemberDetail
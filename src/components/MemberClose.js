import React from 'react'

function MemberClose(props) {
  const onMemberCloseClick = props.onMemberCloseClick
  return <button onClick={onMemberCloseClick}>Close</button>
}

export default MemberClose

import React from 'react'

function Clear(props) {
  const stateToClear = props.stateToClear
  return <button onClick={()=>props.onClearClick(stateToClear)}>Close</button>
}

export default Clear
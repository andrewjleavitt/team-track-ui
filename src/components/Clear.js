import React from 'react'
import {Button} from 'semantic-ui-react'

function Clear(props) {
  const stateToClear = props.stateToClear
  return <Button onClick={()=>props.onClearClick(stateToClear)}>Close</Button>
}

export default Clear
import React from 'react'
import MemberAdd from './MemberAdd'
import MemberDetail from './MemberDetail'
import {Grid, List} from 'semantic-ui-react'

function MemberList(props) {
  const onClearClick = props.onClearClick
  const focusedMember = props.focusedMember
  const members = props.members
  const memberList = members.map((member) => {
    return <List.Item
      key={member.name}
      onClick={() => props.onMemberClick(member)}>
      {member.name}
    </List.Item>
  })

  const memberDetail = focusedMember == null ?
    <MemberAdd addMemberToList={props.addMemberToList}/>
    : <MemberDetail member={focusedMember} onClearClick={onClearClick} teams={props.teams}/>

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <List divided relaxed>{memberList}</List>
        </Grid.Column>
        <Grid.Column width={12}>
          {memberDetail}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MemberList
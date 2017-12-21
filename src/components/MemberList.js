import React from 'react'
import MemberAdd from './MemberAdd'
import MemberDetail from './MemberDetail'
import {Grid, List} from 'semantic-ui-react'

function MemberList(props) {
  const onMemberCloseClick = props.onMemberCloseClick
  const focusedMember = props.focusedMember
  const members = props.members
  const memberList = members.map((member) => {
    return <List.Item
      key={member.name}
      onClick={() => props.onMemberClick(member)}>
      {member.name}
    </List.Item>
  })

  const memberDetail = focusedMember == null ? undefined :
    <MemberDetail member={focusedMember} onMemberCloseClick={onMemberCloseClick} teams={props.teams}/>

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <MemberAdd addMemberToList={props.addMemberToList}/>
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
import React from 'react'
import TeamItem from './TeamItem'
import TeamAdd from './TeamAdd'
import TeamDetail from './TeamDetail'
import {Grid, List} from 'semantic-ui-react'


function TeamList(props) {
  const onClearClick = props.onClearClick
  const focusedTeam = props.focusedTeam
  const teams = props.teams
  const teamList = teams.map((team) => {
    return (
      <List.Item key={team.id}>
        <TeamItem
          onClick={() => {
            props.onTeamClick(team)
          }}
          team={team}
          active={true}/>
      </List.Item>
    )
  })

  const teamDetail = focusedTeam == null ?
    <TeamAdd addTeamToList={props.addTeamToList}/>
    : <TeamDetail team={focusedTeam} onClearClick={onClearClick}/>

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <List divided relaxed>{teamList}</List>
        </Grid.Column>
        <Grid.Column width={12}>
          {teamDetail}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default TeamList
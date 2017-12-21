import React, {Component} from 'react';
import Navigation from './components/Navigation'
import TeamList from './components/TeamList'
import TeamService from './lib/TeamService'
import MemberService from './lib/MemberService'

import './App.css';
import MemberList from "./components/MemberList";
import {Container, Divider} from 'semantic-ui-react'

class App extends Component {

  state = {
    teams: [],
    members: [],
    focusedTeam: null,
    focusedMember: null,
    focusedMenuItem: null
  }

  componentWillMount() {
    TeamService.fetchTeams(this.teamsFetched)
    MemberService.fetch(this.membersFetched)
  }

  teamsFetched = (data) => {
    this.setState({teams: data})
  }

  membersFetched = (data) => {
    this.setState({members: data})
  }

  onTeamClick = (team) => {
    this.setState({focusedTeam: team})
  }

  onMemberClick = (member) => {
    this.setState({focusedMember: member})
  }

  onTeamCloseClick = () => {
    this.setState({focusedTeam: null})
  }

  onMemberCloseClick = () => {
    this.setState({focusedMember: null})
  }

  addTeamToList = (team) => {
    this.setState({teams: [...this.state.teams, team]})
  }

  addMemberToList = (member) => {
    this.setState({members: [...this.state.members, member]})
  }

  onMenuItemClick = (item) => {
    this.setState({focusedMenuItem: item})
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Navigation
            onMenuItemClick={this.onMenuItemClick}
            focusedMenuItem={this.state.focusedMenuItem}
          />
          <Divider/>
          {this.state.focusedMenuItem !== 'teams' ? undefined : (
            <Container>
              <h2>Teams</h2>
              <TeamList
                teams={this.state.teams}
                focusedTeam={this.state.focusedTeam}
                addTeamToList={this.addTeamToList}
                onTeamClick={this.onTeamClick}
                onTeamCloseClick={this.onTeamCloseClick}
              />
            </Container>
          )}
          {this.state.focusedMenuItem !== 'people' ? undefined : (
            <Container>
              <h2>People</h2>
              <MemberList
                members={this.state.members}
                focusedMember={this.state.focusedMember}
                addMemberToList={this.addMemberToList}
                onMemberClick={this.onMemberClick}
                onMemberCloseClick={this.onMemberCloseClick}
                teams={this.state.teams}
              />
            </Container>
          )}
          {this.state.focusedMenuItem !== 'projects' ? undefined : (
            <Container>
              <h2>Projects</h2>
              <p>WHere the projects will live</p>
            </Container>
          )}
        </Container>
      </div>
    );
  }
}

export default App;

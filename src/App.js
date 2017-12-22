import React, {Component} from 'react';
import Navigation from './components/Navigation'
import TeamList from './components/TeamList'
import TeamService from './lib/TeamService'
import MemberService from './lib/MemberService'
import ProjectService from './lib/ProjectService'

import './App.css';
import MemberList from "./components/MemberList";
import ProjectList from './components/ProjectList'
import {Container, Divider, Header} from 'semantic-ui-react'

class App extends Component {

  state = {
    teams: [],
    members: [],
    projects: [],
    focusedTeam: null,
    focusedMember: null,
    focusedProject: null,
    focusedMenuItem: null
  }

  componentWillMount() {
    TeamService.fetchTeams(this.teamsFetched)
    MemberService.fetch(this.membersFetched)
    ProjectService.fetchProjectList(this.projectsFetched)
  }

  teamsFetched = (data) => {
    this.setState({teams: data})
  }

  onTeamClick = (team) => {
    this.setState({focusedTeam: team})
  }

  onTeamCloseClick = () => {
    this.setState({focusedTeam: null})
  }

  addTeamToList = (team) => {
    this.setState({teams: [...this.state.teams, team]})
  }

  membersFetched = (data) => {
    this.setState({members: data})
  }

  onMemberClick = (member) => {
    this.setState({focusedMember: member})
  }

  onMemberCloseClick = () => {
    this.setState({focusedMember: null})
  }

  addMemberToList = (member) => {
    this.setState({members: [...this.state.members, member]})
  }

  projectsFetched = (data) => {
    this.setState({projects: data})
  }

  onProjectClick = (project) => {
    this.setState({focusedProject: project})
  }

  onProjectCloseClick = () => {
    this.setState({focusedProject: null})
  }

  addProjectToList = (project) => {
    this.setState({projects: [...this.state.projects, project]})
  }

  onClearClick = (stateToClear) => {
    this.setState({[stateToClear]: null})
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
              <Header size='medium'>Teams</Header>
              <TeamList
                teams={this.state.teams}
                focusedTeam={this.state.focusedTeam}
                addTeamToList={this.addTeamToList}
                onTeamClick={this.onTeamClick}
                onClearClick={this.onClearClick}
              />
            </Container>
          )}
          {this.state.focusedMenuItem !== 'people' ? undefined : (
            <Container>
              <Header size='medium'>People</Header>
              <MemberList
                members={this.state.members}
                focusedMember={this.state.focusedMember}
                addMemberToList={this.addMemberToList}
                onMemberClick={this.onMemberClick}
                onClearClick={this.onClearClick}
                teams={this.state.teams}
              />
            </Container>
          )}
          {this.state.focusedMenuItem !== 'projects' ? undefined : (
            <Container>
              <Header size='medium'>Projects</Header>
              <ProjectList
                projects={this.state.projects}
                focusedProject={this.state.focusedProject}
                addProjectToList={this.addProjectToList}
                onProjectClick={this.onProjectClick}
                onClearClick={this.onClearClick}
              />
            </Container>
          )}
        </Container>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {Container, Divider, Header} from 'semantic-ui-react'
import Navigation from './components/Navigation'
import TeamList from './components/TeamList'
import TeamService from './lib/TeamService'
import MemberService from './lib/MemberService'
import MemberList from "./components/MemberList";
import ProjectList from './components/ProjectList'
import ProjectService from './lib/ProjectService'
import TeamStatusService from './lib/TeamStatusService'
import TeamStatusList from './components/TeamStatusList'
import './App.css';

class App extends Component {

  state = {
    teams: [],
    teamsLoaded: false,
    members: [],
    membersLoaded: false,
    projects: [],
    projectsLoaded: false,
    teamStatuses: [],
    teamStatusesLoaded: false,
    focusedTeam: null,
    focusedMember: null,
    focusedProject: null,
    focusedMenuItem: null
  }

  componentWillMount() {
    TeamService.fetchTeams(this.teamsFetched)
    MemberService.fetch(this.membersFetched)
    ProjectService.fetchProjectList(this.projectsFetched)
    TeamStatusService.fetchTeamStatusList(this.teamStatusesFetched)
  }

  teamsFetched = (data) => {
    this.setState({teams: data, teamsLoaded: true})
  }

  onTeamClick = (team) => {
    this.setState({focusedTeam: team})
  }

  addTeamToList = (team) => {
    this.setState({teams: [...this.state.teams, team]})
    this.setState({focusedTeam: team})
  }

  teamStatusesFetched = (data) => {
    this.setState({teamStatuses: data, teamStatusesLoaded: true})
  }

  membersFetched = (data) => {
    this.setState({members: data, membersLoaded: true})
  }

  onMemberClick = (member) => {
    this.setState({focusedMember: member})
  }

  addMemberToList = (member) => {
    this.setState({members: [...this.state.members, member]})
    this.setState({focusedMember: member})
  }

  projectsFetched = (data) => {
    this.setState({projects: data, projectsLoaded: true})
  }

  onProjectClick = (project) => {
    this.setState({focusedProject: project})
  }


  addProjectToList = (project) => {
    this.setState({projects: [...this.state.projects, project]})
    this.setState({focusedProject: project})
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
          {this.state.focusedMenuItem !== null ? undefined : (
            <Container>
              <Header size='medium'>Home</Header>
              <TeamStatusList
                teamStatuses={this.state.teamStatuses}
                teams={this.state.teams}
                projects={this.state.projects}
                teamsLoaded={this.state.teamsLoaded}
                teamStatusesLoaded={this.state.teamStatusesLoaded}
                projectsLoaded={this.state.projectsLoaded}
              />
            </Container>
          )}
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
                teams={this.state.teams}
              />
            </Container>
          )}
        </Container>
      </div>
    );
  }
}

export default App;

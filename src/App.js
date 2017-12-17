import React, {Component} from 'react';

import Header from './components/Header'
import Home from './components/Home'
import TeamList from './components/TeamList'
import TeamService from './lib/TeamService'
import MemberService from './lib/MemberService'

import './App.css';
import MemberList from "./components/MemberList";

class App extends Component {

  state = {
    teams: [],
    members: [],
    focusedTeam: null,
    focusedMember: null
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
    console.log("member clicked:" + member.name)
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


  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
          <div>
            <h2>Teams</h2>
              <TeamList
                teams={this.state.teams}
                focusedTeam={this.state.focusedTeam}
                addTeamToList={this.addTeamToList}
                onTeamClick={this.onTeamClick}
                onTeamCloseClick={this.onTeamCloseClick}
              />
          </div>
          <div>
            <h2>People</h2>
              <MemberList
                members={this.state.members}
                focusedMember={this.state.focusedMember}
                addMemberToList={this.addMemberToList}
                onMemberClick={this.onMemberClick}
                onMemberCloseClick={this.onMemberCloseClick}
                />
          </div>
          <div>
            <h2>Projects</h2>
              <p>WHere the projects will live</p>
          </div>
      </div>
    );
  }
}

export default App;

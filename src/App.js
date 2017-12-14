import React, {Component} from 'react';
import {Panel} from 'pivotal-ui/react/panels'
import {TileLayout, TileLayoutItem} from 'pivotal-ui/react/tile-layout'

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
    focusedTeam: null
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

  onTeamCloseClick = () => {
    this.setState({focusedTeam: null})
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
        <TileLayout columns={3}>
          <TileLayoutItem>
            <Panel header='Teams'>
              <TeamList
                teams={this.state.teams}
                focusedTeam={this.state.focusedTeam}
                addTeamToList={this.addTeamToList}
                onTeamClick={this.onTeamClick}
                onTeamCloseClick={this.onTeamCloseClick}
              />
            </Panel>
          </TileLayoutItem>
          <TileLayoutItem>
            <Panel header='People'>
              <MemberList
                members={this.state.members}
                addMemberToList={this.addMemberToList}/>
            </Panel>
          </TileLayoutItem>
          <TileLayoutItem>
            <Panel header='Projects'>
              <p>WHere the projects will live</p>
            </Panel>
          </TileLayoutItem>
        </TileLayout>
      </div>
    );
  }
}

export default App;

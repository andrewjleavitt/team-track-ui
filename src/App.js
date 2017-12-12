import React, {Component} from 'react';
import Header from './components/Header'
import Home from './components/Home'
import TeamList from './components/TeamList'
import TeamService from './lib/TeamService'

import './App.css';

class App extends Component {

    state = {
        teams: [],
        selectedTeam: null
    }

    componentWillMount() {
        TeamService.fetchTeams(this.teamsFetched)
    }

    teamsFetched = (data) => {
        this.setState({teams: data})
    }

    onTeamClick = (team) => {
        this.setState({selectedTeam: team})
    }

    addTeamToList = (team) => {
        this.setState({teams: [...this.state.teams, team]})
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Home/>
                <TeamList
                    teams={this.state.teams}
                    selectedTeam={this.state.selectedTeam}
                    addTeamToList={this.addTeamToList}
                    onTeamClick={this.onTeamClick}
                />
            </div>
        );
    }
}

export default App;

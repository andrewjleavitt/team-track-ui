import React, {Component} from 'react'
import FetchService from '../lib/FetchService'

class Teams extends Component {

    state = {
        teams: []
    }

    componentWillMount() {
        FetchService('teams', this.teamsFetched)
    }

    teamsFetched = (data) => {
        this.setState({teams: data})
    }

    render() {
        const teams = this.state.teams
        const teamList = teams.map((team) => {
            return <li key={team.id}>{team.name}</li>
        })

        return (
            <div>
                <h2>Teams</h2>
                <ul>{teamList}</ul>
            </div>
        )
    }
}

export default Teams
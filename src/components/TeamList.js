import React from 'react'
import TeamItem from './TeamItem'
import AddTeam from './AddTeam'
import TeamDetail from './TeamDetail'

class TeamList extends React.Component {

    componentWillReceiveProps() {
        if(this.selectedTeam == null) {
            return
        }
    }

    render() {
        const selectedTeam = this.props.selectedTeam
        const teams = this.props.teams
        const teamList = teams.map((team) => {
            return <TeamItem
                key={team.id}
                onClick={() => {
                    this.props.onTeamClick(team)
                }}
                team={team}
                active={true}/>
        })

        const teamDetail = selectedTeam == null ? undefined : <TeamDetail team={selectedTeam} onTeamCloseClick={this.props.onTeamCloseClick}/>

        return (
            <div>
                <AddTeam addTeamToList={this.props.addTeamToList}/>
                <h2>Teams</h2>
                <ul>{teamList}</ul>
                {teamDetail}
            </div>
        )
    }
}

export default TeamList
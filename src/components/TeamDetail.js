import React, {Component} from 'react'
import TeamMembers from './TeamMembers'
import TeamService from "../lib/TeamService";

class TeamDetail extends Component {

    state = {
        members: []
    }

    componentDidMount() {
        this.fetchTeamMembers(this.props.team)
    }

    componentWillReceiveProps(nextProps) {
        this.fetchTeamMembers(nextProps.team);
    }

    fetchTeamMembers(team) {
        TeamService.fetchTeamMembers(team, this.membersFetched)
    }

    membersFetched = (data) => {
        this.setState({members: data})
    }

    render() {
        const team = this.props.team
        const members = this.state.members
        return (
            <div>
                <TeamMembers team={team} members={members}/>
            </div>
        )
    }
}

export default TeamDetail
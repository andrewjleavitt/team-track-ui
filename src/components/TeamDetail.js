import React, {Component} from 'react'
import Members from './Members'
import AddMember from './AddMember'
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

    addMemberToList = (member) => {
        this.setState({members: [...this.state.members, member]})
    }

    render() {
        const team = this.props.team
        const members = this.state.members
        return (
            <div>
                <AddMember team={team} addMemberToList={this.addMemberToList}/>
                <Members team={team} members={members}/>
            </div>
        )
    }
}

export default TeamDetail
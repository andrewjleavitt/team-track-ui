import React, {Component} from 'react'
import MemberList from './MemberList'
import AddMember from './AddMember'
import TeamService from "../lib/TeamService";
import TeamClose from './TeamClose'

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
        const onTeamCloseClick = this.props.onTeamCloseClick
        return (
            <div>
                <AddMember team={team} addMemberToList={this.addMemberToList}/>
                <MemberList team={team} members={members}/>
                <TeamClose onTeamCloseClick={onTeamCloseClick}/>
            </div>
        )
    }
}

export default TeamDetail
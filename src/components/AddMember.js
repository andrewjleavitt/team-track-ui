import React from 'react'
import TeamService from "../lib/TeamService";

class AddTeamMember extends React.Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const teamMemberName = this.state.name
        const team = this.props.team
        TeamService.addMember(teamMemberName, team, this.props.addMemberToList)
        this.setState({name: ''})
    }

    render() {
        const team = this.props.team
        return (
            <div>
                <h3>Add a Member to {team.name}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Add Team Member"/>
                </form>
            </div>
        )
    }
}

export default AddTeamMember
import React, {Component} from 'react'
import TeamService from "../lib/TeamService";

class TeamAdd extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleSubmit = (event) => {
        TeamService.addTeam(this.state.name, this.props.addTeamToList)
        this.setState({name: ''})
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h3>Add a team</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Add Team"/>
                </form>
            </div>
        )
    }
}

export default TeamAdd
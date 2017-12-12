import React, {Component} from 'react'

class AddTeam extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleSubmit = (event) => {
        const body = {team: {name: this.state.name}}
        const method = 'POST'
        const url = 'http://localhost:3030'
        const init = {
            method: method,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        const request = new Request(`${url}/teams`, init)

        fetch(request).then((response) => {
            return response.json()
        }).then((team) => {
            console.log('Added TeamItem')
            this.props.addTeamToList(team)
            this.setState({name: ''})
        })

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

export default AddTeam
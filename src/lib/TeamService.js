const TeamService = {
    fetchTeams: function (callback) {
        const method = 'GET'
        const host = 'http://localhost:3030'
        const url = `${host}/teams`
        const init = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const request = new Request(url, init)

        return fetch(request).then((response) => {
            if (response.ok) {
                return response.json()
            }
        }).then((json) => {
            callback(json)
        })
    },

    fetchTeamMembers: function (team, callback) {
        const method = 'GET'
        const host = 'http://localhost:3030'
        const url = `${host}/teams/${team.id}/members`
        const init = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const request = new Request(url, init)

        return fetch(request).then((response) => {
            if (response.ok) {
                return response.json()
            }
        }).then((json) => {
            callback(json)
        })
    },

    addTeam: function(teamName, callback) {
        console.log(teamName)
        const body = {team: {name: teamName}}
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
            callback(team)
        })

    }
}

export default TeamService
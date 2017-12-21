const MemberService = {
  fetch: function (callback) {
    const method = 'GET'
    const host = 'http://localhost:3030'
    const url = `${host}/members`
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

  addMember: function(name, callback) {
    const body = {member: {name: name}}
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

    const request = new Request(`${url}/members`, init)

    fetch(request).then((response) => {
      return response.json()
    }).then((team) => {
      callback(team)
    })
  },

  assignToTeam(options, callback) {
    const {member_id, team_id} = options
    const body = {team_assignment: {member_id: member_id, team_id: team_id}}

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

    const request = new Request(`${url}/team_assignments`, init)

    fetch(request).then((response) => {
      return response.json()
    }).then((team_assignment) => {
      callback(team_assignment)
    })
  },

  fetchTeamAssignmentListFor: function(member, callback) {
    const method = 'GET'
    const host = 'http://localhost:3030'
    const url = `${host}/members/${member.id}/team_assignments`
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
  }
}

export default MemberService
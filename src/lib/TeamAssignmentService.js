const TeamAssignmentService = {
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

export default TeamAssignmentService
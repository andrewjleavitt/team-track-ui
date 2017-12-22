const ProjectService = {
  fetchProjectList: function (callback) {
    const method = 'GET'
    const host = 'http://localhost:3030'
    const url = `${host}/projects`
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

  addProject: function (options, callback) {
    const {name, status, health} = options
    const body = {
      project: {
        name: name,
        status: status,
        health: health
      }
    }
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

    const request = new Request(`${url}/projects`, init)

    fetch(request).then((response) => {
      return response.json()
    }).then((team) => {
      callback(team)
    })
  }
}

export default ProjectService
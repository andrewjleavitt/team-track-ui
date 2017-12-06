const FetchService = (service, callback) => {
    const method = 'GET'
    const url = 'http://localhost:3030'

    const init = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const request = new Request(`${url}/${service}`, init)

    return fetch(request).then((response) => {
        if (response.ok) {
            return response.json()
        }
    }).then((json) => {
        callback(json)
    })
}

export default FetchService
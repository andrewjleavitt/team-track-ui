// const AddService = (service, body, callback) => {
//     const method = 'POST'
//     const url = 'http://localhost:3030'
//
//     const init = {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: body
//     }
//
//     const request = new Request(`${url}/${service}`, init)
//
//     return fetch(request).then((response) => {
//         if (response.ok) {
//             return response.json()
//         }
//     }).then((json) => {
//         callback(json)
//     })
// }
//
// export default AddService
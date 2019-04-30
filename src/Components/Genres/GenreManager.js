const remoteURL="http://localhost:5002"

export default {
    getAll(){
        return fetch(`${remoteURL}/genres`).then(r=>r.json())
    },
    get(id) {
        return fetch(`${remoteURL}/genres/${id}`).then(r=>r.json())
    }
}
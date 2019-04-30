const remoteURL="http://localhost:5002"

export default {
    getAll(){
        return fetch(`${remoteURL}/genre`).then(r=>r.json())
    },
    get(id) {
        return fetch(`${remoteURL}/genre/${id}`).then(r=>r.json())
    }
}
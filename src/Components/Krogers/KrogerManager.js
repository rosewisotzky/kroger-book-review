const remoteURL="http://localhost:5002"

export default {
    getAll(){
        return fetch(`${remoteURL}/krogers`).then(r=>r.json())
    },
    get(id) {
        return fetch(`${remoteURL}/krogers/${id}`).then(r=>r.json())
    }
}
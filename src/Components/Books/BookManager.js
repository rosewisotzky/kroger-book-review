const remoteURL="http://localhost:5002"

export default {
    getAll(){
        return fetch(`${remoteURL}/books`).then(r=>r.json())
    }
}
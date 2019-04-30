const remoteURL="http://localhost:5002"

export default {
    getAll(){
        return fetch(`${remoteURL}/books?_expand=user&_expand=genre&_expand=kroger`).then(r=>r.json())
    },
    get(id){
        return fetch(`${remoteURL}/books/${id}`)
    }
}
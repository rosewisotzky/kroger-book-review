const remoteURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${remoteURL}/chat?_expand=user`).then(chat => chat.json())
    },
    get(id) {
        return fetch(`${remoteURL}/chat/${id}`).then(chat => chat.json())
    },
    post(newMessage) {
        return fetch(`${remoteURL}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(message => message.json())
    }
}
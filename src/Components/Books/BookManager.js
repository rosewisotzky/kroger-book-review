// In this module we are making our fetch calls to gather our data about our books. The first getAll is an expand so we can get the data regarding genre and krogers as well, which live in different resources.

const remoteURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${remoteURL}/books?_expand=user&_expand=genre&_expand=kroger`).then(r => r.json())
    },
    get(id) {
        return fetch(`${remoteURL}/books/${id}`)
        .then(book => book.json())
    },
    post(newBook) {
        return fetch(`${remoteURL}/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        }).then(book => book.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/books/${id}`, {
            method: "DELETE"
        })
            .then(book => book.json())
    },
    put(editedBook) {
        return fetch(`${remoteURL}/books/${editedBook.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedBook)
        }).then(data => data.json());
    }
}

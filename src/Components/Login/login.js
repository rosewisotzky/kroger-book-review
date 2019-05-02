import React, { Component } from "react"

export default class Login extends Component {
    state = {
        username: "",
        email: ""
    }
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    handleLogin = (event) => {
        event.preventDefault()
        return fetch("http://localhost:5002/users")
            .then(response => response.json())
            .then(userList => {
                let tempUserName = userList.find(user => user.username.toLowerCase() === this.state.username.toLowerCase() && user.email.toLowerCase() === this.state.email.toLowerCase())
                if (tempUserName) {
                    sessionStorage.setItem("userID", tempUserName.id)
                    this.props.onLogin();
                    this.props.history.push("/booklist")
                } else {
                    window.alert("Hey! These aren't your books! Try with your own username or register to create your own account")
                }
            })

    }
    render() {
        return (
            <React.Fragment>
                <h1>sign in</h1>
                <form onSubmit={this.handleLogin}>
                    <label htmlFor="inputUsername">username: </label>
                    <input
                        onChange={this.handleFieldChange}
                        type="username"
                        id="username"
                        placeholder="username"
                        required=""
                    ></input>
                    <label htmlFor="inputEmail">email: </label>
                    <input
                        onChange={this.handleFieldChange}
                        type="email"
                        id="email"
                        placeholder="email"
                        required=""
                    ></input>
                    <button type="submit">sign in</button>
                </form>
            </React.Fragment>

        )
    }
}
import React, { Component } from "react"
import LoginManager from '../Login/LoginManager'

export default class Registration extends Component {
    state = {
        username: "",
        email: ""
    }
    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    handleRegistration = (event) => {
        event.preventDefault()
        return LoginManager.getAll() 
            .then(userList => {
                let isMatch = userList.find(user => user.username.toLowerCase() === this.state.username.toLowerCase())
                if (isMatch) {
                    window.alert("Nice try! Someone beat you to it. Get more creative with your username.")
                } else if (userList.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())) {
                    window.alert("Oops! You've already registered an account with this email")
                } else if (this.state.username === "" || this.state.email === "") { window.alert("You forgot to fill in a field!") } else {
                    let newUser = {
                        username: this.state.username,
                        email: this.state.email
                    }
                    this.props.registerNewUser(newUser)
                    .then(() => LoginManager.getAll())
                    .then(response => response.find(user => user.username === this.state.username))
                    .then(matchedUserInfo => sessionStorage.setItem("userID", matchedUserInfo.id))
                    .then(() => this.props.onLogin())
                    .then(() => this.props.history.push("/booklist"))
                }

            })
    }


    render() {
        return (
            <React.Fragment>
                <h1>create new account</h1>
                <form onSubmit={this.handleRegistration}>
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
                    <button type="submit">register new account</button>
                </form>
            </React.Fragment>

        )
    }
}
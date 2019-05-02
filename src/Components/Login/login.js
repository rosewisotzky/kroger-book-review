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
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                username: this.state.username
            })
        )
    }
    render () {
        return(
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
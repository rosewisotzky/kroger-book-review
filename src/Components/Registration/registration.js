import React, { Component } from "react"
import LoginManager from '../Login/LoginManager'

export default class Registration extends Component {
    state = {
        username: "",
        email: ""
    }
    // Our old friend handleFieldChange! We're grabbing the input value by targeting the id and then setting our state to that!
    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    // This method is responsible for adding a new user! 
    handleRegistration = (event) => {
        // First things first, we don't wanna stress out our database by some impatient bozo clicking the button over and over again, so we're covering that by using preventDefault. 
        event.preventDefault()
        // We're getting all of our users with our handy GET call from LoginManager.
        return LoginManager.getAll() 
        // THEN (get it?) we are using find to go through our users and see if the username and email match an object in our array of users.
            .then(userList => {
                let isMatch = userList.find(user => user.username.toLowerCase() === this.state.username.toLowerCase())
                // If the username matches, our user is notified.
                if (isMatch) {
                    window.alert("Nice try! Someone beat you to it. Get more creative with your username.")
                    // same with the email!
                } else if (userList.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())) {
                    window.alert("Oops! You've already registered an account with this email")
                    // If the user leaves either field open the app will alert them of that.
                } else if (this.state.username === "" || this.state.email === "") { window.alert("You forgot to fill in a field!") } else {
                    // Once our user enters in a unique username and email, we create a new user object.
                    let newUser = {
                        username: this.state.username,
                        email: this.state.email
                    }
                    // Then we call our method registerNewUser, which is located in ApplicationView. Hop on over there and I'll fill you in on the details! A hint: we're POSTing our newUser to the database!
                    this.props.registerNewUser(newUser)
                    // Then we do another GET call to get our updated list of users.
                    .then(() => LoginManager.getAll())
                    // We make sure that it's matched!
                    .then(response => response.find(user => user.username === this.state.username))
                    // Then we give that brand spanking new user a userID with sessionStorage.setItem
                    .then(matchedUserInfo => sessionStorage.setItem("userID", matchedUserInfo.id))
                    // Next step is to log this new user in! We call our method onLogin, which is located in ApplicationView for more details.
                    .then(() => this.props.onLogin())
                    // Once our new user is logged in, the browser goes to the URL path that ends in /booklist.
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
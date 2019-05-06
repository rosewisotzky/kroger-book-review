import React, { Component } from "react"

export default class Login extends Component {
    state = {
        username: "",
        email: ""
    }
    // Our old friend handleFieldChange! To recap, this bad boy snags the value from the targeted event id, slaps that in the empty variable stateToChange and setsState to that. We call it on our input ids hence the id in there. A real workhorse, I tell you what.
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    // Here we find our method called handleLogin. We'll break this one down as we go along, but this is the method that saves our new userID to session storage and to our database. 
    handleLogin = (event) => {
        // preventDefault is there so a user can't just click that button over and over again, mucking up our operations over here.
        event.preventDefault()
        // Then we do the classic fetch call to get our users. 
        return fetch("http://localhost:5002/users")
            .then(response => response.json())
            .then(userList => {
                // Over here we are cycling through our userList from our database. We are setting a new variable, tempUserName and are assigning to that the result of our find. Our find array method goes through each object in our userList and checks to see that the username entered into the input field matches a username in our database AND does the same for the email.
                let tempUserName = userList.find(user => user.username.toLowerCase() === this.state.username.toLowerCase() && user.email.toLowerCase() === this.state.email.toLowerCase())
                // If we find a username and email that matches what's been entered into our inputs then we use session storage to set that userID and go through our login method and then take our user back to the URL path ending in /booklist. To read more about onLogin method, please checkout ApplicationViews!
                if (tempUserName) {
                    sessionStorage.setItem("userID", tempUserName.id)
                    this.props.onLogin();
                    this.props.history.push("/booklist")
                } else {
                    // If neither one matches a user object in our database our user will get a window alert with a sassy message telling them to MIND THEIR OWN BUSINESS.
                    window.alert("Hey! These aren't your books! Try with your own username or register to create your own account")
                }

            })

    }
    render() {
        // A classic render! We're making our login form. 
        return (
            <React.Fragment>
                <h1>sign in</h1>
                <form onSubmit={this.handleLogin}>
                    <label htmlFor="inputUsername">username: </label>
                    <input 
                    // We call handleFieldChange on our input with the id username so we can use that value to compare the input field value to our database value. V cool! I'm into it.
                        onChange={this.handleFieldChange}
                        type="username"
                        // Just pointing out that this is the same id that's referenced in handleLogin.
                        id="username"
                        placeholder="username"
                        required=""
                    ></input>
                    <label htmlFor="inputEmail">email: </label>
                    <input
                    // Same thing as above with our username!
                        onChange={this.handleFieldChange}
                        type="email"
                        id="email"
                        placeholder="email"
                        required=""
                    ></input>
                    {/* This button is a submit! On line 42 you can see that we're calling our handleLogin method onSubmit. Which is the same as clickcing this button. Because it's type is submit. */}
                    <button type="submit">sign in</button>
                    {/* This button here takes us to our registration form. Come on over to registration.js to learn more! */}
                    <button type="register" onClick={() =>{this.props.history.push("./registration")}}>register new account</button>
                </form>
            </React.Fragment>

        )
    }
}
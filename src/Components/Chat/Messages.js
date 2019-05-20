import React, { Component } from 'react'
import './chat.css'

export default class Messages extends Component {
    state = {
        message: "",
        userId: sessionStorage.getItem("userID")
    }
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    handleAddMessage = (event) => {
        event.preventDefault()
        event.target.firstChild.value = ""
        const newMessage = {
            message: this.state.message,
            userId: sessionStorage.getItem("userID")
        }
        this.props.addNewMessage(newMessage)
        .then(() => this.props.history.push("/chat"))
    }
    render() {
        return (
            <React.Fragment>
                <h1>kroger chat room</h1>
                <section className="chat-container">
                    <section className="message-list"> {
                        this.props.chat.map(messages =>
                            <div key={messages.id}>
                                <p>{messages.user.username}: {messages.message}</p>
                            </div>
                        )
                    }
                    </section>
                    <section className="new-chat">
                    <form onSubmit={this.handleAddMessage} className="new-chat">
                        <input
                        type="text"
                        id="message"
                        onChange={this.handleFieldChange}
                        ></input>
                        <button type="submit">send</button>
                    </form>
                    </section>

                </section>
            </React.Fragment>
        )
    }
}
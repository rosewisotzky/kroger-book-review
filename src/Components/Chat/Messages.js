import React, { Component } from 'react'

export default class Messages extends Component {
    state = {
        userId: sessionStorage.getItem("userID")
    }
    render() {
        return (
            <React.Fragment>
                <section className="chat-container">
                    <h1>kroger chat room</h1>
                    <section className="message-list"> {
                        this.props.chat.map(messages =>
                            <div key={messages.id}>
                                <p>{messages.username}: {messages.message}</p>
                            </div>
                        )
                    }
                    </section>
                </section>
            </React.Fragment>
        )
    }
}
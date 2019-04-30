import React, { Component } from 'react';



export default class AddBook extends Component {
    state = {
        title: "",
        author: "",
        genres: "",
        krogers: "",
        userId: ""
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    constructNewBook = (event) => {
        event.preventDefault()
        const newBook = {
            title: this.state.title,
            author: this.state.author,
            genres: parseInt(this.state.genre.id),
            krogers: parseInt(this.state.kroger.id),
            userId: parseInt(this.state.userId)
        }
        this.props
            .AddBook(newBook)
            .then(() => this.props.history.push("/booklist"))

    }
    render() {
        console.log(this.props.genres)
        return (
            <React.Fragment>
                <h1>add new book</h1>
                <form className="addform">
                    <div className="form-div">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            required
                            className="titleInput"
                            onChange={this.handleFieldChange}
                            id="title"
                            placeholder="title"></input> <br />
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            required
                            className="authorInput"
                            onChange={this.handleFieldChange}
                            id="author"
                            placeholder="author"></input> <br />
                        <label htmlFor="genre">Genre:</label>
                        <select name="genre"> {
                            this.props.genres.map(genre =>
                                <option value={genre.genre}>{genre.genre}</option>
                            )
                        }
                        </select> <br/>
                        <label htmlFor="kroger">Kroger:</label>
                        <select name="krogers"> {
                            this.props.krogers.map(kroger =>
                        <option value={kroger.id}>{kroger.neighborhood}</option>
                            )}
                        </select>
                        <button type="submit">add new book</button>
                    </div>
                </form>

            </React.Fragment>
        )
    }
}
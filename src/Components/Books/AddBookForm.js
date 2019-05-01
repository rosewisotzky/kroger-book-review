// This component builds the form to add a new book and also contains the functionality to add it to the DOM.
import React, { Component } from 'react';

export default class AddBookForm extends Component {
    state = {
        title: "",
        author: "",
        genreId: "",
        krogerId: "",
        review: "",
        userId: 1
    }
    // handleFieldChange set state to whatever the input value is.
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    // Here is our method to create a new book object.
    constructNewBook = (event) => {
        event.preventDefault()
        const newBook = {
            title: this.state.title,
            author: this.state.author,
            genreId: parseInt(this.state.genreId),
            krogerId: parseInt(this.state.krogerId),
            userId: parseInt(this.state.userId),
            review: this.state.review
        }
        // Here we are adding the new book to the URL path that ends with /booklist
        this.props.addBook(newBook)
            .then(() => this.props.history.push("/booklist"))
        console.log("newBook", newBook)

    }
    render() {
        // console.log(this.props.books)
        return (
            <React.Fragment>
                <h1>add new book</h1>
                {/* This tells us that when we click the button with the type of submit that our method constructNewBook will be called. */}
                <form onSubmit={this.constructNewBook} className="addform">
                    <div className="form-div" key="add-form">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            required
                            className="titleInput"
                            // We are calling our method handleFieldChange whenever there is a change in the input field. Rad!
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
                        <label htmlFor="review">Review(optional):</label>
                        <textarea
                            type="textarea"
                            className="reviewInput"
                            onChange={this.handleFieldChange}
                            id="review"
                            placeholder="review"></textarea> <br />
                        <label htmlFor="genre">Genre:</label>
                        <select name="genres"
                            onChange={this.handleFieldChange}
                            id="genreId"
                        >
                            <option value="">Select Genre</option>
                            {
                                // Inside of our drop down, we are mapping through our genres so the genres in our database are displayed as options. Nice. 
                                this.props.genres.map(genre =>
                                    <option id={genre.id} value={genre.id}>{genre.genre}</option>
                                )
                            }
                        </select> <br />
                        <label htmlFor="kroger">Kroger:</label>
                        <select name="krogers"
                            onChange={this.handleFieldChange}
                            id="krogerId"
                        >
                            <option value="">Select Kroger</option>
                            {
                                // Over here we're doing the same thing, but since we want both neighborhood and address we're just accessing both in our option. 
                                this.props.krogers.map(kroger =>
                                    <option id={kroger.id} value={kroger.id}>{kroger.neighborhood} {kroger.address}</option>
                                )}
                        </select>
                        <button type="submit">add new book</button>
                    </div>
                </form>

            </React.Fragment>
        )
    }
}
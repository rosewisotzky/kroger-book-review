import React, { Component } from 'react';
import BookManager from './BookManager';

export default class EditBookForm extends Component {
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
    // updateExisitingBook is our method that POSTS our editedBook to our database, then GETS the new fresh book list, puts it on the DOM and bring our user back to the booklist page.
    updateExisitingBook = (event) => {
        event.preventDefault()
        const editedBook = {
            id: this.props.match.params.bookId,
            title: this.state.title,
            author: this.state.author,
            genreId: parseInt(this.state.genreId),
            krogerId: parseInt(this.state.krogerId),
            userId: parseInt(this.state.userId),
            review: this.state.review
        }
        this.props.updateBook(editedBook)
        .then(() => this.props.history.push("/booklist"))
    }
    componentDidMount(){
        BookManager.get(this.props.match.params.bookId)
        .then(book => {
            this.setState({
                title: book.title,
                author: book.author,
                genreId: parseInt(book.genreId),
                krogerId: parseInt(book.krogerId),
                userId: parseInt(book.userId),
                review: book.review
            })
        })
    }
    render() {
        // console.log(this.props.books)
        return (
            <React.Fragment>
                <h1>edit book</h1>
                {/* This tells us that when we click the button with the type of submit that our method updateExisingBook will be called. */}
                <form onSubmit={this.updateExisitingBook} className="addform">
                    <div className="form-div" key="add-form">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            required
                            className="titleInput"
                            // We are calling our method handleFieldChange whenever there is a change in the input field. Rad!
                            onChange={this.handleFieldChange}
                            id="title"
                            value={this.state.title}></input> <br />
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            required
                            className="authorInput"
                            onChange={this.handleFieldChange}
                            id="author"
                            value={this.state.author}></input> <br />
                        <label htmlFor="review">Review(optional):</label>
                        <textarea
                            type="textarea"
                            className="reviewInput"
                            onChange={this.handleFieldChange}
                            id="review"
                            value={this.state.review}></textarea> <br />
                        <label htmlFor="genre">Genre:</label>
                        <select name="genres"
                            onChange={this.handleFieldChange}
                            id="genreId"
                            value={this.state.genreId}
                        >
                            <option value="">Select Genre</option>
                            {
                                // Inside of our drop down, we are mapping through our genres so the genres in our database are displayed as options. Nice. 
                                this.props.genres.map(genre =>
                                    <option id={genre.id} value={genre.id} key={genre.id}>{genre.genre}</option>
                                )
                            }
                        </select> <br />
                        <label htmlFor="kroger">Kroger:</label>
                        <select name="krogers"
                            onChange={this.handleFieldChange}
                            id="krogerId"
                            value={this.state.krogerId}
                        >
                            <option value="">Select Kroger</option>
                            {
                                // Over here we're doing the same thing, but since we want both neighborhood and address we're just accessing both in our option. 
                                this.props.krogers.map(kroger =>
                                    <option id={kroger.id} value={kroger.id} key={kroger.id}>{kroger.neighborhood} {kroger.address}</option>
                                )}
                        </select>
                        <button type="submit">edit book</button>
                    </div>
                </form>

            </React.Fragment>
        )
    }
}
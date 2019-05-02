import React, { Component } from 'react';
import BookManager from './BookManager';
import KrogerManager from '../Krogers/KrogerManager';
import GenreManager from '../Genres/GenreManager';

export default class ReviewBookForm extends Component {
    state = {
        title: "",
        author: "",
        genreId: "",
        genre: "",
        krogerId: "",
        neighborhood: "",
        address: "",
        review: "",
        userId: 1
    }
    // handleFieldChange set state to whatever the input value is.
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    reviewExisitingBook = (event) => {
        event.preventDefault()
        const reviewedBook = {
            id: this.props.match.params.bookId,
            title: this.state.title,
            author: this.state.author,
            genreId: parseInt(this.state.genreId),
            krogerId: parseInt(this.state.krogerId),
            userId: parseInt(this.state.userId),
            review: this.state.review
        }
        this.props.updateBook(reviewedBook)
            .then(() => this.props.history.push("/booklist"))
    }
    componentDidMount() {
        // Here we are nesting our fetch calls to get the info from the krogers and genres resource to prepopulate the text in our review component. The GenreManager is nested in the Krogers one, because we can't setState until we have all of the information including the kroger information. 
        BookManager.get(this.props.match.params.bookId)
            .then(book => {
                KrogerManager.get(parseInt(book.krogerId))
                    .then((krogerInfo) => {
                        console.log(krogerInfo)
                        GenreManager.get(parseInt(book.genreId)).then((genreInfo) => {
                            this.setState({
                                title: book.title,
                                author: book.author,
                                genreId: parseInt(book.genreId),
                                genre: genreInfo.genre,
                                krogerId: parseInt(book.krogerId),
                                neighborhood: krogerInfo.neighborhood,
                                address: krogerInfo.address,
                                userId: parseInt(book.userId),
                                review: book.review
                            })
                        })
                    }
                    )
            }
            )
    }
    render() {
        // console.log(this.props.books)
        return (
            <React.Fragment>
                <h1>review book</h1>
                {/* This tells us that when we click the button with the type of submit that our method updateExisingBook will be called. */}
                <form onSubmit={this.reviewExisitingBook} className="addform">
                    <div className="form-div" key="add-form">
                        title: {this.state.title} <br />
                        author: {this.state.author} <br />
                        genre: {this.state.genre} <br />
                        kroger: {this.state.neighborhood} <br />
                        address: {this.state.address} <br />
                        <label htmlFor="review">Review:</label>
                        <textarea
                            type="textarea"
                            className="reviewInput"
                            onChange={this.handleFieldChange}
                            id="review"
                            value={this.state.review}></textarea> <br />
                        <button type="submit">add review</button>
                    </div>
                </form>

            </React.Fragment>
        )
    }
}
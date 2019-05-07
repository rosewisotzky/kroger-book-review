import './booklist.css'
import React, { Component } from 'react';

export default class BookList extends Component {
    state = {
        currentUser: sessionStorage.getItem("userID")
    }
    // In this component we are rendering the JSX to create our list of books. 
    render() {
        return (
            <React.Fragment>
                <section className="book-container">
                    <section className="my-booklist">
                        <h1>my books</h1>

                        {
                            // We are mapping through the array of books in our database and plopping them into a new array. For each book, we are building the JSX to list the title, author, genre, and location. 
                            this.props.books.map(book => {
                                // If the book has an empty string as the value of the key review, we will not list the review.
                                if (book.review === "" && (parseInt(book.userId) === parseInt(this.state.currentUser))) {
                                    return <div key={book.id}>
                                        <p>
                                            title: {book.title} <br />
                                            author: {book.author} <br />
                                            genre: {book.genre.genre} <br />
                                            kroger: {book.kroger.neighborhood} <br />
                                            address: {book.kroger.address}
                                        </p>
                                        <div key={book.id}>
                                            <button type="button" className="edit-book" onClick={() => this.props.history.push(`/booklist/${book.id}/edit`)}>edit book</button>
                                            <button type="button" className="delete-book" onClick={() => this.props.deleteBook(book.id)}>delete</button> </div>
                                    </div>
                                    // Buuuuuut if it DOES have something other than an empty string, this tells it to add that review line on.
                                } else {
                                    return <div key={book.id}>
                                        {
                                            // We're doing the exact same thing here! It's happening twice because some of our books have reviews and some don't.
                                            (parseInt(book.userId) === parseInt(this.state.currentUser)) ?
                                                (<React.Fragment>
                                                    <p>
                                                        title: {book.title} <br />
                                                        author: {book.author} <br />
                                                        genre: {book.genre.genre} <br />
                                                        kroger: {book.kroger.neighborhood} <br />
                                                        address: {book.kroger.address} <br />
                                                        review: {book.review}
                                                    </p>
                                                    <div key={book.id}>
                                                        <button type="button" className="edit-book" onClick={() => this.props.history.push(`/booklist/${book.id}/edit`)}>edit book</button>
                                                        <button type="button" className="delete-book" onClick={() => this.props.deleteBook(book.id)}>delete</button></div></React.Fragment>) :
                                                (null)
                                        }
                                    </div>
                                }
                            }
                            )
                        }
                    </section>
                    <section className="friends-books">
                        <h1>my friend's books </h1>
                        {
                            // We are mapping through the array of books in our database and plopping them into a new array. For each book, we are building the JSX to list the title, author, genre, and location. 
                            this.props.books.map(book => {
                                // If the book has an empty string as the value of the key review, we will not list the review.
                                if (book.review === "" && (parseInt(book.userId) !== parseInt(this.state.currentUser))) {
                                    return <div key={book.id}>
                                        <p>
                                            title: {book.title} <br />
                                            author: {book.author} <br />
                                            genre: {book.genre.genre} <br />
                                            kroger: {book.kroger.neighborhood} <br />
                                            address: {book.kroger.address}
                                        </p>
                                    </div>
                                    // Buuuuuut if it DOES have something other than an empty string, this tells it to add that review line on.
                                } else {
                                    return <div key={book.id}>
                                        {
                                            // We're doing the exact same thing here! It's happening twice because some of our books have reviews and some don't.
                                            (parseInt(book.userId) !== parseInt(this.state.currentUser)) ?
                                                (<React.Fragment>
                                                    <p>
                                                        title: {book.title} <br />
                                                        author: {book.author} <br />
                                                        genre: {book.genre.genre} <br />
                                                        kroger: {book.kroger.neighborhood} <br />
                                                        address: {book.kroger.address} <br />
                                                        review: {book.review}
                                                    </p>
                                                </React.Fragment>) :
                                                (null)
                                        }
                                    </div>
                                }
                            }
                            )
                        }
                    </section>
                </section>
            </React.Fragment>
        )
    }
}
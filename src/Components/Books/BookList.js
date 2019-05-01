
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class BookList extends Component {
    // In this component we are rendering the JSX to create our list of books. 
    render() {
        console.log("books", this.props.books)
        return (
            <section className="booklist"> {
                // We are mapping through the array of books in our database and plopping them into a new array. For each book, we are building the JSX to list the title, author, genre, and location. 
                this.props.books.map(book => {
                    // If the book has an empty string as the value of the key review, we will not list the review.
                    if(book.review === "")
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
                    else {
                        return <div key={book.id}>
                        <p>
                            title: {book.title} <br />
                            author: {book.author} <br />
                            genre: {book.genre.genre} <br />
                            kroger: {book.kroger.neighborhood} <br />
                            address: {book.kroger.address} <br />
                            review: {book.review}
                        </p>
                    </div>
                    }
                }
                )
            }
            </section>
        )
    }
}
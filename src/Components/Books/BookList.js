import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class BookList extends Component {
    render() {
        return (
            <section className="booklist"> {
                this.props.books.map(book =>
                    <div key="book">
                    <h4>{book.title} by {book.author}</h4>
                    <p>
                    {book.genre.genre}
                    {book.kroger.neighborhood}
                    </p>
                    </div>
                )
            }
            </section>
        )
    }
}
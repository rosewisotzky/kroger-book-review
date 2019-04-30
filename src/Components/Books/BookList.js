import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class BookList extends Component {
    render() {
        return (
            <section className="booklist"> {
                this.props.books.map(book =>
                    <div key="book">
                    <p>{book.title} by {book.author}</p>
                    </div>
                )
            }
            </section>
        )
    }
}
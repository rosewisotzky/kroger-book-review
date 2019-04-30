import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class BookList extends Component {
    render() {
        return (
            <section className="booklist"> {
                this.props.books.map(book => {
                    if(book.review === " ")
                    return <div key="book">
                        <p>
                            title: {book.title} <br />
                            author: {book.author} <br />
                            genre: {book.genre.genre} <br />
                            kroger: {book.kroger.neighborhood} <br />
                            address: {book.kroger.address}
                        </p>
                    </div>
                    else {
                        return <div key="book">
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
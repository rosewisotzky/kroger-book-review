import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './review.css'

export default class ReviewList extends Component {

    // In this component we are rendering the JSX to create our list of books. 
    state = {
        currentUser: sessionStorage.getItem("userID")
    }
    
    render() {
        return (
            <section className="review">
                <h1> to be reviewed </h1>
                {

                    // We are mapping through the array of books in our database and plopping them into a new array. For each book, we are building the JSX to list the title, author, genre, and location. 
                    this.props.books.map(book => {
                        // If the book has an empty string as the value of the key review AND matches the userId of the logged in user, we will list that title as a link to the form to add a review.
                        if (book.review === "" && parseInt(book.userId) === parseInt(this.state.currentUser))
                            return <div key={book.id} className="review-list">
                                <p>
                                    <Link className="nav-link" to={`/review/${book.id}/addreview`}>{book.title}</Link>  <br />
                                </p>
                            </div>
                        // Buuuuuut if it DOES have something other than an empty string, this tells it to NOT show up in our review list.
                        else {
                            return null
                        }
                    }
                    )
                }
            </section>
        )
    }
}
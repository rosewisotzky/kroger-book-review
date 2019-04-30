import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookList from './Books/BookList'
import BookManager from './Books/BookManager';


export default class ApplicationView extends Component {

  state = {
    "users": [],
    "books": [],
    "krogers": [],
    "genre": [],
    "userId": ""
  }

  componentDidMount () {
    const newState = {}
    BookManager.getAll()
    .then(books => newState.books=books)
    .then(()=> this.setState(newState))
  }

  render () {
    return (
    <React.Fragment>
      <Route path="/" render={props => {
        return  null } 
      } />
      <Route exact path="/booklist" render={props => {
        return <BookList books={this.state.books} />
      }} />
    </React.Fragment>
    )
  }

}


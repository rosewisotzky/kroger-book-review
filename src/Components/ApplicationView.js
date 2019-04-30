import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookList from './Books/BookList'
import BookManager from './Books/BookManager';
import AddBookForm from './Books/AddBookForm'
import GenreManager from './Genres/GenreManager'
import KrogerManager from './Krogers/KrogerManager'


export default class ApplicationView extends Component {

  state = {
    "users": [],
    "books": [],
    "krogers": [],
    "genres": [],
    "userId": ""
  }

  componentDidMount () {
    const newState = {}
    BookManager.getAll()
    .then(books => newState.books=books)
    .then(()=> this.setState(newState))
    GenreManager.getAll()
    .then(genre => newState.genres=genre)
    .then(()=> this.setState(newState))
    KrogerManager.getAll()
    .then(kroger => newState.krogers=kroger)
    .then(()=> this.setState(newState))
  }
  addBook = newBook => {
   return BookManager.post(newBook)
    .then(books=> this.setState({"books": books}))
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
      <Route path="/addbook" render={props => {
        return <AddBookForm {...props} genres={this.state.genres} krogers={this.state.krogers} addBook={this.addBook}/>
      }} />
    </React.Fragment>
    )
  }

}


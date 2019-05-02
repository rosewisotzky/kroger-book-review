import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import BookList from './Books/BookList'
import BookManager from './Books/BookManager';
import AddBookForm from './Books/AddBookForm'
import GenreManager from './Genres/GenreManager'
import KrogerManager from './Krogers/KrogerManager'
import EditBookForm from './Books/EditBookForm'
import ReviewList from './Books/ReviewList';
import ReviewForm from './Books/ReviewForm'
import Login from './Login/login'
import LoginManager from './Login/LoginManager'

export default class ApplicationView extends Component {

  isAuthenticated = () => sessionStorage.getItem("userID") !== null

  state = {
    "users": [],
    "books": [],
    "krogers": [],
    "genres": [],
    "userId": ""
  }
// componentDidMount runs after the render and calls our getAll fetch calls and sets the new state.
  componentDidMount() {
    const newState = {}
    BookManager.getAll()
      .then(books => newState.books = books)
      .then(() => this.setState(newState))
    GenreManager.getAll()
      .then(genre => newState.genres = genre)
      .then(() => this.setState(newState))
    KrogerManager.getAll()
      .then(kroger => newState.krogers = kroger)
      .then(() => this.setState(newState))
    LoginManager.getAll()
    .then(user => newState.user = user)
    .then(() => this.setState(newState))
  }
  // Here's our method addBook which takes that new book and using our POST call written our BookManager module sets the new state to have that book in it.
  addBook = newBook => {
    return BookManager.post(newBook)
    .then(() => BookManager.getAll())
      .then(books => this.setState({ "books": books }))
  }
deleteBook = id => {
  return BookManager.delete(id)
  .then(() => BookManager.getAll())
  .then(books => this.setState({"books": books}))
}
updateBook = editedBook => {
  return BookManager.put(editedBook)
  .then(() => BookManager.getAll())
  .then(books => this.setState({"books": books}) )
}
patchBook = reviewedBook => {
  return BookManager.patch(reviewedBook)
  .then(() => BookManager.getAll())
  .then(books => this.setState({"books": books}))
}
onLogin = () => {
  this.setState({
    userId: sessionStorage.getItem("userID")
  })
  
  
}
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
          return <Login {...props} handleLogin={this.handleLogin} onLogin={this.onLogin} />
        }
        } />
        <Route exact path="/booklist" render={props => {
          if (this.isAuthenticated()) {
          return <BookList {...props} books={this.state.books} deleteBook={this.deleteBook}/> } else { return <Redirect to="/" /> }
        }} />
          <Route path="/booklist/:bookId(\d+)/edit" render={props => {
            return <EditBookForm {...props} books={this.state.books} genres={this.state.genres} krogers={this.state.krogers} updateBook={this.updateBook} />
          }} />
        <Route path="/addbook" render={props => {
          if (this.isAuthenticated()) {
          return <AddBookForm {...props} books={this.state.books} genres={this.state.genres} krogers={this.state.krogers} addBook={this.addBook} /> } else { return <Redirect to="/" /> }
        }} />
        <Route exact path="/review" render={props => {
          if (this.isAuthenticated()) {
          return <ReviewList {...props} books={this.state.books} /> } else { return <Redirect to="/" />}
        }} />
        <Route path="/review/:bookId(\d+)/addreview" render={props => {
          return <ReviewForm {...props} books={this.state.books} genres={this.state.genres} krogers={this.state.krogers} patchBook={this.patchBook} />
        }} />
      </React.Fragment>
    )
  }

}


import React, { Component } from 'react';
// import { withRouter } from 'react-router'
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
import RegistrationForm from './Registration/registration'

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
  // deleteBook calls our DELETE fetch call and then gives us the updated books and sets that to the state.
deleteBook = id => {
  return BookManager.delete(id)
  .then(() => BookManager.getAll())
  .then(books => this.setState({"books": books}))
}
// updateBook calls our PUT fetch call and gives us the new booklist that reflects our changes and sets it to state.
updateBook = editedBook => {
  return BookManager.put(editedBook)
  .then(() => BookManager.getAll())
  .then(books => this.setState({"books": books}) )
}
// patchBook calls our PATCH. Since we're only updating a single key value we are using a PATCH instead of a PUT. Rad!
patchBook = reviewedBook => {
  return BookManager.patch(reviewedBook)
  .then(() => BookManager.getAll())
  .then(books => this.setState({"books": books}))
}
// onLogin is our method that grabs the id of the user and changes state by setting the userID in session storage to the state. Now if that user adds a book, our app knows which userId to assign that book to. This user may only delete and edit books that are assigned to that ID but they may view all of them. Rad!
onLogin = () => {
  this.setState({
    userId: sessionStorage.getItem("userID")
  })
}
// registerNewUser is our method that returns our POST call, addNewUser. Then we get our brand spankin' new list of users with our GET and set our state to reflect the POST that we made. 
registerNewUser  = (newUser) => {
  return LoginManager.addNewUser(newUser)
  .then(() => LoginManager.getAll())
  .then(users => this.setState({"users": users}))
}
  

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
          return <Login {...props} onLogin={this.onLogin} />
        }
        } />
        <Route exact path="/registration" render={props => {
          return <RegistrationForm {...props} registerNewUser={this.registerNewUser} onLogin={this.onLogin}/>
        }} />
        <Route exact path="/booklist" render={props => {
          if (this.isAuthenticated()) {
          return <BookList {...props} onLogin={this.onLogin} books={this.state.books} deleteBook={this.deleteBook}/> } else { return <Redirect to="/" /> }
        }} />
          <Route path="/booklist/:bookId(\d+)/edit" render={props => {
            return <EditBookForm {...props} books={this.state.books} genres={this.state.genres} krogers={this.state.krogers} updateBook={this.updateBook} />
          }} />
        <Route exact path="/addbook" render={props => {
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


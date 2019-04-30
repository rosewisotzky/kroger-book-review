import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './Navbar/navbar';
import './App.css';

export default class ApplicationView extends Component {
  render () {
    return (
    <React.Fragment>
      <Route path="/" render={props => {
        return  <Navbar nav= {this.state.nav}/> } 
      } />
    </React.Fragment>
    )
  }

}


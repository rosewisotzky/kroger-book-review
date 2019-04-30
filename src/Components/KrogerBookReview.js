import React, { Component } from "react";
import NavBar from "./NavBar/navbar";
import ApplicationViews from "./ApplicationViews";


export default class KrogerBookReview extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}
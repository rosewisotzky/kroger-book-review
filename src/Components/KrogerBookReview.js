import React, { Component } from "react";
import NavBar from "./Navbar/navbar";
import ApplicationViews from "./ApplicationView";


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
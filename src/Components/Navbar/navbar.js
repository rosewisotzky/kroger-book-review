import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import './navbar.css'


export default class NavBar extends Component {
    render() {

        return (
            <React.Fragment>
                <div className="header-container">
                    <h1 className="title-header"> Kroger Book Review. </h1>
                </div>
                <div className="nav-container">
                    <Nav className="nav-bar">
                        <NavLink href="/booklist">my list</NavLink> <NavLink href="/addbook">add book</NavLink> <NavLink href="/review"> review </NavLink> <NavLink href="/" onClick={() => sessionStorage.clear()}>logout</NavLink>
                    </Nav>
                </div>
            </React.Fragment>
        )
    }
}
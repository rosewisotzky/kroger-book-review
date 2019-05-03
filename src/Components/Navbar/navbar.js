import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';


export default class NavBar extends Component {
    render() {

        return (
            <React.Fragment>
                <div className="header-container">
                    <h1> Kroger Book Review. </h1>
                </div>
                <div className="nav-container">
                    <Nav>
                        <NavLink href="/booklist">my list</NavLink> <NavLink href="/addbook">add book</NavLink> <NavLink href="/review"> review </NavLink> <NavLink href="/" onClick={() => sessionStorage.clear()}>logout</NavLink>
                    </Nav>
                </div>
            </React.Fragment>
        )
    }
}
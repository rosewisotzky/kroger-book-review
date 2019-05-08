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
                        <NavLink href="/booklist" className="inactive" activeclassname="active">kroger book list</NavLink>
                        <NavLink href="/addbook" className="inactive" activeclassname="active">add book</NavLink>
                        <NavLink href="/review" className="inactive" activeclassname="active"> review </NavLink>
                        <NavLink href="/" onClick={() => sessionStorage.clear()} className="inactive" activeclassname="active">logout</NavLink>
                    </Nav>
                </div>
            </React.Fragment>
        )
    }
}
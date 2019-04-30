import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Nav>
                    {/* <NavItem>
                        <NavLink disabled href="#">logout</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink href="/booklist">my list</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/addbook">add book</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/review">review</NavLink>
                    </NavItem>

                </Nav>
            </div>
        )
    }
}
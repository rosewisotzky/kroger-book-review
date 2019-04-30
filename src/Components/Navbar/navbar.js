import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <p>List Based</p>
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
                <hr />
                <p>Link Based</p>
                <Nav>
                    <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
                </Nav>
            </div>
        )
    }
}
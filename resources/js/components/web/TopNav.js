import React from 'react'
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button
} from 'reactstrap';

class TopNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
        this.toggle = this.toggle.bind(this)
    }

    toggle() { this.setState({ isOpen: !this.state.isOpen }) }

    render() {
        return (
            <React.Fragment>
                <Navbar fixed="top" dark expand="md">
                    <NavbarBrand href="/"><img src="images/logo2.png" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} >
                        <span className="fas fa-bars"></span>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://laravel.com" target="new" className="laravel-color">Laravel</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://reactjs.org/" target="new" className="react-color">React</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default TopNav
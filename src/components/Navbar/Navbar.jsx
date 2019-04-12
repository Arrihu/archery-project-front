import React from 'react'
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap'


class NavbarView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color='light' light expand='md'>
                    <NavbarBrand href='/'><b>Archery Tournament</b></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href='/create-a-tournament'>Create a tournament</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href='/score'>Score</NavLink>
                            </NavItem>

                            <span className='menu-sign-up-space'></span>
                            <NavItem>
                                <NavLink href='/components'><b>Login</b></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href='/components'><b>Sign Up</b></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavbarView
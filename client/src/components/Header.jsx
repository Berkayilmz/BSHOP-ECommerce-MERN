import React from 'react'
import {Navbar, Nav, Container, NavbarBrand} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'

const Header = () => {
  return (
    <div>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>BSHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'> <FaShoppingCart/> </Nav.Link>
                        <Nav.Link href='/auth'> <FaUser/> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
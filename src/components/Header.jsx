import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faTruckFast} /> E CART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <input type="text" className='form-control rounded' placeholder='Search Products Here' />
            </Nav.Item>
            <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faHeart} className='btn text-danger' /> Wishlist <Badge pill bg="secondary">10</Badge></Link>
            <Link to={'/cart'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faCartShopping} className='btn text-success'/> Cart <Badge pill bg="secondary">10</Badge></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
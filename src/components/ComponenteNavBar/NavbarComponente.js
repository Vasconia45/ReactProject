import React from 'react'

import './../../assets/css/estilos.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Imagen1 from './../../assets/img/logo.png'

export const NavBarComponente = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Nav className="col-md-3 col-sm-4 col-4 d-lg-none">
          <img src={Imagen1} class="w-100"></img>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col-5 navbar-nav mr-auto justify-content-around">
            <Nav.Item>
              <Nav.Link href="#categorias"><p className='botones'>Categorias</p></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#info"><p className='botones'>Info</p></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#marcas"><p className='botones'>Marcas</p></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact"><p className='botones'>Contact</p></Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="hover-zoom col-xl-2 col-lg-3 d-none d-lg-block d-xl-block">
            <Nav.Link href="#categorias"><img src={Imagen1} class="w-100"></img></Nav.Link>
          </Nav>
          <Nav className="col-3 navbar-bar d-flex flex-row justify-content-lg-end justify-content-xs-start justify-content-sm-start justify-content-md-start">
            <Nav.Link className="btn fs-5"><i class="bi bi-person-circle botones"></i></Nav.Link>
            <Nav.Link className="btn fs-5"><i class="bi bi-cart4 botones"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavBarComponente
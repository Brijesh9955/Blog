import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../Garage Img/logo-light.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { CgProfile } from "react-icons/cg";
import Button from 'react-bootstrap/Button';


const Header = () => {


  return (
    <div>


      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid  className='ps-sticky p-3'>
          <Container>
            <Row className=''>
              <div className=' col-3 p-0'>
                <Navbar.Brand href="/" ><img src={logo} className='img-w-50 pt-2' alt="" /></Navbar.Brand>
              </div>
              <div className='col-9 p-0 d-flexx justify-content-end'>
                <Navbar.Toggle aria-controls="basic-navbar-nav " className='' />
                <Navbar.Collapse id="basic-navbar-nav" className='d-end'>
                  <Nav className="">
                    <Nav.Link href="/"  className='text-white ps-sm-5 fs-5 hov'>Home</Nav.Link>
                    <Nav.Link href="/about-us"   className='text-white ps-sm-5 fs-5 hov'>About</Nav.Link>
                    <Nav.Link href="/all/service"   className='text-white ps-sm-5 fs-5 hov'>Service</Nav.Link>
                    <Nav.Link href="/technician-login"   className='text-white ps-sm-5 fs-5 hov'>Technician</Nav.Link>
                    <Nav.Link href="/customer-login"   className='text-white ps-sm-5 fs-5 hov'>Customer</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Row>
          </Container>
        </Container>
      </Navbar>

      {/* <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
        <Container fluid className='ps-sticky p-3 '>
          <Navbar.Brand href="/"><img src={logo} className='img-w-50' alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='/' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className=''> </Nav.Link>
            </Nav>

            <Nav className="">
              <Nav.Link href="/" className=' hov me-3 fs-5'> Home</Nav.Link>
              <Nav.Link href="/about-us" className=' hov me-3 fs-5'> About</Nav.Link>
              <Nav.Link href="/all/service" className=' hov me-3 fs-5'> Service</Nav.Link>
              <Nav.Link href="/technician-login" className=' hov me-3 fs-5'> Technician</Nav.Link>
              <Nav.Link href="/customer-login" className=' hov me-3 fs-5'> Customer</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}


    </div>
  )
}

export default Header




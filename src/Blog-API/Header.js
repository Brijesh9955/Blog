import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { FaBlog } from "react-icons/fa6";
import axios from 'axios';

const Logout = () => {
    console.log("Demo");
    localStorage.removeItem('blogid')
    localStorage.removeItem('usertoken')
}

const Header = () => {
    return (
        <div>
            <Container fluid className='pt-2 pb-2 p-0 bg-dark text-white '>
                <Container className='p-0'>
                    <Row className='align-items-center'>
                        <div className='col-3 p-0 ps-3'>
                            <a href="/" className='text-white fs-2 fw-bold'><FaBlog className='mb-3' />LOGGER</a>
                        </div>
                        <div className='col-5 p-0'>
                            <ul className='d-flex mb-0  justify-content-center'>
                                <li className=' ps-4  list-unstyled fw-bold'><Link to="/" className="hov-blog text-white ">Home</Link></li>
                                <li className=' ps-4  list-unstyled fw-bold'><Link to="/" className="hov-blog text-white ">Blog</Link></li>
                            </ul>
                        </div>
                        <div className='col-4 p-0'>
                            <ul className='d-flex mb-0 justify-content-end'>
                                <Link to="/user/login" className="text-white"><li className=' fw-bold  blog-btn'> <FaBlog />  Create Blog..</li></Link>
                                <Link to="" className="text-white"><li onClick={Logout} className=' fw-bold  blog-btn ms-2'> Logout</li></Link>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </Container>



            <Container fluid className='d-none'>
                <Container>
                    <Row>
                        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                            <div className="container-fluid">
                                <div> <a className="navbar-brand" href="/">BLOGGER</a></div>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center d-flex">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/blog">Blog</a>
                                        </li>

                                        {/* <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li> */}

                                    </ul>
                                    <div className='d-flex'>
                                        <Link to="/user/login" className="text-white me-2"><li className=' fw-bold  blog-btn'>Login</li></Link>
                                        <Link to="/blog/create" className="text-white"><li className=' fw-bold  blog-btn'>Create Blog..</li></Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </Row>
                </Container>
            </Container>

        </div>
    )
}

export default Header
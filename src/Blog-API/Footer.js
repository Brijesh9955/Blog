import React from 'react'
import { Container, Row } from 'react-bootstrap'


import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { FaBlog } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <Container fluid className='bg-dark mt-5 pt-5 text-white '>
                <Container className=''>
                    <Row>
                        <div className='col-12 p-5 d-md-block d-none'>
                            <div className="text-center border-start border-end">
                                <h4 className='pb-3'><FaBlog className='mb-3' />LOGGER</h4>
                                <ul className='d-flex ps-0 justify-content-center '>
                                    <li className='  fs-3 list-unstyled fw-bold'><Link to="/" className="hov-blog text-white"><FaInstagram /></Link></li>
                                    <li className=' ps-4 fs-3 list-unstyled fw-bold'><Link to="/" className="hov-blog text-white"><FaFacebookF /></Link></li>
                                    <li className=' ps-4 fs-3 list-unstyled fw-bold'><Link to="/" className="hov-blog text-white"><FaTwitter /></Link></li>
                                    <li className=' ps-4 fs-3 list-unstyled fw-bold'><Link to="/" className="hov-blog text-white"><FaGooglePlusG /></Link></li>
                                </ul>
                                <p>© 2024 by Design for Blogger .Powered and secured by Dhruv Dholiya</p>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <div className='col-12 p-5 text-center'>
                                <p>© 2024 by Design for Blogger .Powered and secured by Dhruv Dholiya</p>
                        </div>

                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Footer
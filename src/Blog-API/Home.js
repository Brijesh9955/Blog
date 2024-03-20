import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { FcLikePlaceholder } from "react-icons/fc";
import { Container, Row } from 'react-bootstrap';

const Home = () => {

  const [blog, setBlog] = useState([])

  const history = useHistory()

  const getBlog = () => {
    axios.get('https://blog-backend-nklg.onrender.com/blog/find')
      .then((res) => {
        console.log(res.data.data);
        setBlog(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  useEffect(() => {
    getBlog()
  }, [])

  const card = (id) => {
    console.log(id);
    localStorage.setItem('blogid', id)
    history.push('/blog')
  }


  return (
    <div>

      {/* Main IMG */}
      <div className="container-fluid mb-5 p-0">
        <div className="container-fluid mt-3 mb-5 position-relative d-block">
          <div className="row align-items-center">
            <div className="p-0 img">
              <img width="100%" height="100%" src="https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1349,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="container-fluid pos-ab">
          <div className="row align-items-center">
            <div className="p-0">
              <h1 className='fs-60 fs-sm-6'>DESIGN <span className='fs-2 fs-sm-6 for'>FOR</span> LIFE</h1>
            </div>
          </div>
        </div>
      </div>

      <Container fluid className='bg-lite text-dark'>
        <Container className="">
          <Row className=" d-flex py-5 g-5 ">
            {
              blog.map((el, index) => {
                return <div className="d-flex bor-box p-0 " key={index} >
                  <div className="col-5 p-0">
                    <div className="img-box">
                      <img className='w-100 img-fluid' onClick={() => card(el._id)} src={'https://blog-backend-nklg.onrender.com/images/' + el.image} alt="" />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className='ms-5 mt-4'>
                      <h3 className='fw-bold'>{el.title}</h3>
                      <p>{el.description}</p>
                      <div>
                        <span onClick={() => card(el._id)} className="text-dark  blog-btn fw-bold">Read More..!</span>
                      </div>
                    </div>
                    {/* <div className='d-flex bor-top mt-4  ms-5 justify-content-between align-items-center'>
                      <div>
                        <ul className=' ps-0 d-flex'>
                          <li className='p-2'>views</li>
                          <li className='p-2'>comments</li>
                        </ul>
                      </div>
                      <div className='p-2 me-5'>
                        <p><FcLikePlaceholder /> like</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              })
            }
          </Row>
        </Container>
      </Container>


      {/* blog box */}


    </div>


  )
}

export default Home
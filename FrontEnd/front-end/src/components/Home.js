import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { width } from '@mui/system';
import { grey } from '@mui/material/colors';
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'
function Home() {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  const fetchUser = () => {
    axios.get('http://localhost:8080/Products/allproducts', config.headers)
      .then(response => console.log(response.data));
  }



  return (
    <div className="divv">
      <Navbar bg="dark" expand={false}>


        <Navbar.Brand style={{ marginLeft: 590 , color : 'grey' }} href="/Products">Product</Navbar.Brand>
      
        <Navbar.Toggle style={{ marginRight: 60 }} aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          style={{ backgroundColor: "grey", width: 300 }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/Profile">Profile</Nav.Link>
             
            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Navbar>
      <div className="carousel">


        <Carousel variant="dark">
          <Carousel.Item>
            <img
              width={930} height={370}
              src='https://wallpapercave.com/wp/wp3537545.jpg'
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={930} height={370}
              src='https://wallpapercave.com/wp/wp3537564.jpg'
              alt="Second slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={930} height={370}
              src='https://wallpapercave.com/wp/wp3537555.jpg'

              alt="Third slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h1 style={{ marginLeft: 500, marginTop: 10, color: 'grey' }}>Latest Product</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap', justifyContent: 'center',
        flex: 20, alignContent: 'center'
      }}>
        <div>
          <Box
            sx={{

              '& > :not(style)': {
                m: 1,
                width: 298,
                height: 328,
                marginTop: 5, marginLeft: 5, marginBottom: 20
              },
            }}
          >


            <Paper elevation={4} >

              <img className='imagee' src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Paris" width="277" height="233" />


            </Paper>
          </Box>
        </div>

        <div>
          <Box
            sx={{

              '& > :not(style)': {
                m: 1,
                width: 298,
                height: 328,
                marginTop: 5, marginBottom: 20
              },
            }}
          >

            <Paper elevation={3} >

              <img className='imagee' src="https://c1.wallpaperflare.com/preview/142/553/241/hipster-man-design-tshirt.jpg" alt="Paris" width="277" height="233" />


            </Paper>
          </Box>
        </div>
        <div>
          <Box
            sx={{

              '& > :not(style)': {
                m: 1,
                width: 298,
                height: 328,
                marginTop: 5, marginBottom: 20
              },
            }}
          >

            <Paper elevation={3} >

              <img className='imagee' src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Paris" width="277" height="233" />


            </Paper>
          </Box>
        </div>


      </div>
      <input
        type="button"
        value="Alert the text input"
        onClick={fetchUser}
      />
    </div>
  )
}

export default Home

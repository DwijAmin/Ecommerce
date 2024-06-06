import React, { useEffect } from 'react'
import './Product.css';
import Navbar from './Navbar';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch } from "react-redux";
import { addtobasket } from './Slices'
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
function Products() {
    const dispatch = useDispatch();


    const [data, setdata] = useState([]);


    let history = useHistory();
    const handlekey = (e) => {
        if (e.key === 'Enter') {
           // console.log(e.target.value);
const B = e.target.value;
            const fetchUser = () => {
                const res = axios.get(`http://localhost:8080/Fileupload/GetCategory?title=${e.target.value}`,{
                   
                  }).then((response) => {
                    let A = response.data.title;
                    console.log(A)
                    if (A == null) {
                        alert("Your file is being uploaded!")
                    } else {
                        const fetch_User = () => {
                            const res = axios.get(`http://localhost:8080/Fileupload/Get?title=${e.target.value}`).then((response) => {
                                let A = response.data;
                              //  setdata(A);
                              setdata(response.data)
                                console.log(A)
                               
                            })
                        }
                        fetch_User()
                    }
                })
                    // setName(response.data.name))
                    .catch((error) => console.log(error));;
                // console.log("hii" + res)
                // setuser(res.data);


                // setName(res.data);


            };
            fetchUser();


            // history.push("/Profile/Dwij Amin")
        }
    }
console.log(data)
    const Shopping_cart = () => {
        history.push("/Shopping_cart")
    }
const [Products, setProducts] = useState()
    const Addtocart = (e) => {
        console.log("hii"+e.target.value)
       // const Product = {};
        const fun = ()=>{
            axios
            .get(
                `http://localhost:8080/Fileupload/Getbyname?id=${e.target.value}`
            )
            .then(res =>   {
              
              
                const newItem = {
                  id: res.data.pid,
                  picByte: res.data.picByte,
                  price : res.data.price,
                  product_name : res.data.title,
                  quantity : 0
                };
                console.log(res.data)
                 dispatch(addtobasket(newItem))})
            .catch((error) => console.log(error));
        }
        fun()
       console.log(Products)
        

    }

    const activeColor = "#dddddd";

    return (
        <div className="Pro">
        <div className="header">
        <div className = "header_left"> 
       <div className = "header_input">
         
       <input placeholder="Search" onKeyDown={handlekey} type="text"></input>
          </div>
          <Button onClick={Shopping_cart} className='buttons' variant="outline-primary">Shopping Cart</Button>
   </div>

       
        
    </div>
        <div className='pa'>
           
            <div className='carousel'>


                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            width={800} height={380}
                            src='https://wallpapercave.com/wp/wp3537545.jpg'
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={800} height={380}
                            src='https://wallpapercave.com/wp/wp3537564.jpg'
                            alt="Second slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={800} height={380}
                            src='https://wallpapercave.com/wp/wp3537555.jpg'

                            alt="Third slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {
                data.map((m)=>(
                    <div className='ddiv'>
                    <Box
                        sx={{
    
                            '& > :not(style)': {
                                m: 1,
                                width: 298,
                                height: 348,
                                marginTop: 10, marginLeft: 5
                            },
                        }}
                    >
    
                        <Paper elevation={10} style={{
                            backgroundColor: 'lightgray'
                        }}>
    
    
    
                            <img src={m.picByte} alt="Paris" width="277" height="233" />
    
                            <br />
                            <div className='dixx'>
                                <h4 style={{
                                    textAlign: 'start', color: 'black', marginInline: '29px'
                                }}>{m.title}</h4>
                                <h4 style={{
                                    textAlign: 'end',
                                    marginLeft: '30px'
                                }}>Prize : {m.price}</h4>
                            </div>
    
    
                            <Button onClick={Addtocart} value = {m.pid} variant="outline-secondary">Add to cart</Button>
    
    
    
    
    
    
                        </Paper>
                    </Box>
                </div>
                
    ))
            }
           
          

        </div >
        </div>
    )
}

export default Products

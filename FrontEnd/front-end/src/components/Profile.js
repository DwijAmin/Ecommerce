import React, { useState } from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar';
import { useLocation } from "react-router-dom";
import './Profile.css';
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Navbar_ from './Navbar_';
function Profile(props) {
    const location = useLocation();
    const [username, setUsername] = useState("");
    const [email, setemail] = useState("");
    const [data_, setdata_] = useState([])
    
    const [Address, setAddress] = useState("");
    useEffect(() => {
        var b = 1;
        axios
            .get(
                `http://localhost:8080/Order/user_/${b}`
            )
            .then(res => {
              //  console.log(res.data[4].products.title)
               setdata_(res.data)
           
                
            })
    }, [])

    useEffect(() => {

        let logintoken_ = JSON.parse(localStorage.getItem('user'));
        console.log(logintoken_)
        setUsername(logintoken_.name)
        setemail(logintoken_.email)
        //  console.log(location.pathname); // result: '/secondpage'
        // console.log(location.search); // result: '?query=abc'
        //  console.log(location.state.detail.data_); // result: 'some_value'
        //  setdata_(location.state.detail.data_)


    }, [location]);



    return (
        <>

            <div className="Pro_">
            <Navbar_></Navbar_>
                <div className="profile__">
                    <div className='hh'>
                        <h4>Name : {username}</h4>
                        <br></br>
                        <h4>Email : {email}</h4>
                    </div>

                    <div className="order_">
                        <Accordion defaultActiveKey="0">
                            {
                                data_.map((m , index) => (
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>order Item </Accordion.Header>
                                        <Accordion.Body>
                                           Products name = 
                                            </Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }


                        </Accordion>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Profile

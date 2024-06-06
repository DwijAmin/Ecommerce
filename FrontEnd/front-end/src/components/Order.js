import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";

import Navbar from './Navbar';
import './Order.css';

import useRazorpay from "react-razorpay";
import Button from 'react-bootstrap/Button'
import { useLocation } from "react-router-dom";
import Navbar_ from './Navbar_';


function loadScript(src) {

    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
function Order(props) {
    const location = useLocation();
    const [username, setUsername] = useState("");
    const [email, setemail] = useState("");
    const [data_, setdata_] = useState([])
    const [Address, setAddress] = useState("");
   
    useEffect(() => {

        let logintoken_ = JSON.parse(localStorage.getItem('user'));
        console.log(logintoken_)
        setUsername(logintoken_.name)
        setemail(logintoken_.email)
        //  console.log(location.pathname); // result: '/secondpage'
        // console.log(location.search); // result: '?query=abc'
        console.log(location.state.detail.data_); // result: 'some_value'
        setdata_(location.state.detail.data_)


    }, [location]);

    const Razorpay = useRazorpay();

    const handlekey = (e) => {
        if (e.key === 'Enter') {
           // console.log(e.target.value);
const B = e.target.value;
setAddress(B)
        }
    }
    const Pay = () => {
        data_.map((m) => (
            axios({
                method: 'post',
                url: 'http://localhost:8080/Order/',
                data: {
                    quntity: m.quntity,
                    products: {
                        pid: m.id
                    },

                    users: {
                        uid : 1
                    },
                    address : Address
                }
            }).then((res) =>
                // const data = await fetch('http://localhost:8080/user/create_order', { method: 'POST' }).then((t) =>
                console.log(res)
            )

        ))
        const data = { "amount": 200 };
        const res = loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const add_data = axios.post("http://localhost:8080/user/create_order", data).then((res) =>
            // const data = await fetch('http://localhost:8080/user/create_order', { method: 'POST' }).then((t) =>
            console.log(res)
        )

        console.log(data)

        const options = {
            key: 'rzp_test_IMtOQYxTuBCdlF',
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: 'Payment',
            description: 'Thank you for shopping',

            handler: function (response) {
                alert(response.razorpay_payment_id)
                alert(response.razorpay_order_id)
                alert(response.razorpay_signature)
            },
            prefill: {

                email: '',
                phone_number: '9899999999'
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }
    return (
        <div className='order'>
            <Navbar_></Navbar_>
            <div className='Orders'>

                <Button className='buttonss' onClick={Pay} variant="outline-primary">Order</Button>

                <div className="order_">
                    <div className="details">
                        <h4 >Customer name : {username}</h4>
                        <br></br>
                        <h4 >Customer email : {email}</h4>
                    </div>
                    <hr size="8" width="100%" />

                    <textarea className='detailss' onKeyDown={handlekey} placeholder='Address' rows="4" cols="90"></textarea>

                    <hr size="8" width="100%" />
                    {
                        data_.map((m) => (
                            <div>

                                <div className='details'>
                                    <h4 > Price : {m.price}</h4>
                                    <br></br>
                                    <h4 > Product Name : {m.product_name}</h4>
                                    <br></br>

                                </div>
                                <hr size="9" width="100%" />
                            </div>
                        )
                        )
                    }


                </div>



            </div>
        </div>
    )
}

export default Order

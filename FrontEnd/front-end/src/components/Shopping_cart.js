import React from 'react'
import './Shopping_cart.css';
import { selectItems } from './Slices'
import { removefrombasket } from './Slices'
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Route, Redirect } from 'react-router'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import Navbar from './Navbar';
function Shopping_cart() {
    const items = useSelector(selectItems);
    const [value, setValue] = useState("default");

    let history = useHistory();
    const dispatch = useDispatch();
    let x = 0;
    const [data, setdata] = useState([]);
    const [data_, setdata_] = useState([]);
    const [amount, setamount] = useState(0);
    var tmpHours = [];
    const Shopping_cart = () => {
        history.push({
            pathname: '/order',
           // search: '?query=abc',
            state: { detail: {data_} }
        });
    }
    const remove = (id) => {
        tmpHours = items.find(items => items.id === id);
        const B = amount - tmpHours.price;
        console.log(B)
    //    const B = amount + A;
    if(amount === 0){
        dispatch(removefrombasket({ id } ))
    }
    else{
        setamount(B)
        dispatch(removefrombasket({ id } ))
    
    }
       
     
      
    }

    const add = () => {
        console.log(items)
    }
    useEffect(() => {
        console.log(items)

        setdata(items)
        console.log(data)


    }, [])

    const b = (c, d) => {

        console.log(c)
        console.log(d)
        console.log(items)
        //var y = c.target.value;

        tmpHours = items.find(items => items.id === c);
        tmpHours = ({ ...tmpHours, quantity: d })
        const A = tmpHours.price * tmpHours.quantity;
        console.log(A)
        const B = amount + A;
        setamount(B)
        data_.push(tmpHours)

console.log(data_)

    }
    
   
    console.log(amount)
    return (
        <div className='shop'>

            <div className="hers">
                <div className="header_left">
                    <Navbar></Navbar>
                </div>

                <Button  onClick={()=>Shopping_cart()} className='buttonss' variant="outline-primary">Order</Button>
  

            </div>

            <div className="shoppings">
                <div>


                    {
                        items.map((m,i) => (
                            <div className="shopping">
                                <div className="cart">
                                    <div className='ff'>
                                        <img src={m.picByte} className='images' alt="Paris" width="237" height="183" />





                                        <div className='text'>
                                            <h5 style={{
                                                textAlign: 'start', color: 'grey', marginTop: '40px', whiteSpace: 'pre-wrap'
                                            }}>Product: kkkkkkkkkk</h5>
                                            <h5 style={{
                                                display: 'flex', color: 'grey',
                                                float: 'inline',
                                                marginTop: '30px'
                                            }}>Prize :{m.price}</h5>
                                        </div>
                                    </div>
                                    <div className='btnn'>
                                        <Button onClick={()=>remove(m.id)} variant="outline-danger">Remove</Button>
                                        <br></br>
                                        <br></br>
                                        <select
                                            onChange={(event) => b(m.id, event.target.value)} defaultValue={value} className="drop"
                                        >
                                            <option value="default" disabled hidden>
                                                Quantity
                                            </option>
                                            <option value={0}>0</option>
                                            <option value={1}>1</option>
                                        </select>
                                    </div>

                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="calculate">

                    <h4 style={{
                        textAlign: 'start', color: 'grey', marginLeft: '20px', marginTop: '60px'
                    }}>Bill</h4>
                    <h4 style={{

                        marginLeft: '40px', marginTop: '60px', color: 'grey'
                    }}>Prize : {amount}</h4>
 
                </div>
            </div>

        </div>
    )
}

export default Shopping_cart

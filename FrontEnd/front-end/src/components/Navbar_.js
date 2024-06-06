import React from 'react'
import './Navbar_.css';
import { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
function Navbar_() {
 //   let history = useHistory();
    let history = useHistory();
const [data, setdata] = useState([]);
    const Shopping_cart = () => {
        history.push("/Shopping_cart")
    }
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
    return (
        <div className="header">
            <div className='homee'>
            <Link to={"/home"}
>Home</Link>
            </div>
                      
        </div>
    )
}

export default Navbar_

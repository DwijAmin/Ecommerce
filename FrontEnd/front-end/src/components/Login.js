
/*import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from "react-router-dom";

import { useHistory } from "react-router-dom";
import Headers from './Headers';
function Login(props) {
    const [username, setusername] = useState("");
    const [redirect, setredirect] = useState("false");
    const [password, setpassword] = useState("");
    const [token, settoken] = useState("");
    const [userrole, setuserrole] = useState("");
    let history = useHistory();
function log() {
    history.push("/Home")
}
function logs() {
    history.push("/SignUp")
}
    const paperStyle = {
        padding: 30, height: '75vh', width: 340, margin: "30px auto", backgroundColor: "aliceblue",
    }

    const AvatarStyle = { backgroundColor: "blue" }
    const GridStyle = { backgroundColor: "midnightblue" }
    return (

        <div>

            <Headers />
            <Grid  >
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={GridStyle} >
                            <LockTwoToneIcon />
                        </Avatar>
                        <div>
                            <h1>Sign In</h1>
                        </div>
                        <br></br>
                        <div>
                            <TextField id="outlined-basic" label="UserName" variant="outlined" required fullWidth onChange={(event) => { setusername(event.target.value) }} />

                        </div>
                        <br></br>
                        <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined" required fullWidth onChange={(event) => { setpassword(event.target.value) }} />

                        </div>
                       
                        <br></br>
                        <div>
                            <Button variant="contained" color="primary" onClick={()=>{
 log()
                            }} >

                                SignIn
                            </Button>
                      </div>
                      <br></br>
                      <Button variant="contained" color="primary" onClick={()=>{
 logs()
                            }} > New User</Button>
                        
                    
                      
                     
                        <br></br> <br></br>
                      <div>      
                            <Button variant="contained" color="primary"  >
                             
                                SignIn with GOOGLE
                            </Button>

                        </div>

                    </Grid>

                </Paper>
            </Grid>
        </div>
    )
}
*/
import { Link } from "react-router-dom";

import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { useHistory } from "react-router-dom";
function Login(props) {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setemail] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const history = useHistory();
    
    const responsesucessGoogle = (response) => {
        console.log(response)
       setUser(response.Ru)
       localStorage.setItem('login', JSON.stringify({
        user : response.Ru,

    }))
        setUsername(response.Ru.tf)
        setemail(response.Ru.Iv)

    
    
       const  onClick = () => history.push("/home")

       onClick()
      
    }
    const responsefailGoogle = (response) => {
        console.log(response)

    }
    
    return (
        <div className="divvv">


                <GoogleLogout
                    clientId="292090500301-rmppg5m8th25lnf6cel4asdnua8e1r2q.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={responsefailGoogle}
                />,
           


           
                <GoogleLogin
                    clientId="292090500301-rmppg5m8th25lnf6cel4asdnua8e1r2q.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={responsesucessGoogle}
                    onFailure={responsefailGoogle}
                    isSignedIn={true}
                />







        </div>

    )
}
export default Login

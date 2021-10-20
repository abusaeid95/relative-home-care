import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './SignIn.css'

const SignIn = () => {

    const history = useHistory();
    const location = useLocation();

    const redirect_url = location.state?.from || "/home";

    const { signInWithGoogle, handlerToEmailLogin } = useAuth();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');


    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }
    const handlerEmailLogin=()=>{
        handlerToEmailLogin(email, password)
                .then((result) => {
                    history.push(redirect_url);
                })
    }

    const handlerGoogleLoin = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_url)
            });

    }
    return (
        <div className="text-center my-5 signin">
           <h1>Sign In</h1> 
           <p>Your Email</p>
           <input onChange={getEmail} type="email" name="" id="" />
           <p>Your Password</p>
           <input onChange={getPassword} type="password" name="" id="" />
           <br />
           <button onClick={()=>handlerEmailLogin()} className="mt-3 signin-btn">Signin</button>
           <Link to="/signup" className="ms-3">New User?</Link>
           <br />

           <button onClick={()=>handlerGoogleLoin()} className="signin-btn mt-2">Signin With Google</button>
        </div>
    );
};

export default SignIn;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './SignUp.css'

const SignUp = () => {
    const { emailPassSignUp } = useAuth()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const [error, setError] = useState('');

    const getName = (e) => {
        setName(e.target.value);
    }
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }
    const getRePassword = (e) => {
        setRepass(e.target.value);
    }
    const handlerEmailSignUp = () => {
        console.log('fdgdfg');
        if (password == repass) {
            setError('')
            emailPassSignUp(email, password);
        }
        else {
            setError('password not match...try again')
        }
    }

    return (
        <div className="text-center my-3 signup-css">
            <h1>Sign Up</h1>
            <p>Your Name</p>
            <input onChange={getName} type="name" />
            <p>Your Email</p>
            <input onChange={getEmail} type="email" name="" id="" />
            <p>Confirm Your Email</p>
            <input onChange={getPassword} type="password" name="" id="" />
            <p>Your Password</p>
            <input onChange={getRePassword} type="password" name="" id="" />
            <br />
            <button onClick={handlerEmailSignUp} className="mt-3 signin-btn">Register</button>
            <p>{error}</p>
            <Link to="/signin" className="ms-3">Already Register?</Link>
        </div>
    );
};

export default SignUp;
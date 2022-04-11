import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate=useNavigate()
    const handleEmailBlur=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassBlur=(e)=>{
        setPassword(e.target.value)
    }
    if(user){
        navigate('/shop')
    }
    const handleUserSignIn=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id=""  required  />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassBlur} type="password" name="password" id="" required  />
                    </div>
                    <p style={{color:'red'}}>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                    {
                       loading && <p>Loading...</p> 
                    }
                </form>
                <p>New to Ema-John? <Link className='form-link' to='/signup' >Create an account</Link> </p>
                <div className='or'>
                    <hr /> or <hr />
                </div>
                <button className='google-btn'><img src="https://eliteglassdesign.com/wp-content/uploads/2021/01/c3a26c0c8b6110d2e232e72c79c1ba68.jpg" alt="" /> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
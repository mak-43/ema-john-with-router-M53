import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import auth from '../../firebase.init'
const SignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPass,setConfirmPass]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)

   
    const handleEmailBlur=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassBlur=(e)=>{
        setPassword(e.target.value)
    }
    const handleConfirmPassBlur=(e)=>{
        setConfirmPass(e.target.value)
    }
    if(user){
        navigate('/inventory')
    }
    const handleCreateUser=(e)=>{
        e.preventDefault()

        if(password !==confirmPass){
            setError('Your two password did not match')
            return
        }
        if(password.length<6){
            setError('Password must be 6 characters or more')
            return 
        }

        createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassBlur} type="password" name="password" id=""  required  />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPassBlur} type="password" name="confirm-password" id=""  required  />
                    </div>
                    < p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already Have an account? <Link className='form-link' to='/login' >Login</Link> </p>
                <div className='or'>
                    <hr /> or <hr />
                </div>
                <button className='google-btn'><img src="https://eliteglassdesign.com/wp-content/uploads/2021/01/c3a26c0c8b6110d2e232e72c79c1ba68.jpg" alt="" /> Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;
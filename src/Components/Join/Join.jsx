import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar'
export default function Join() {
    return (
        <>
            <Navbar/>
            <div className='join'>

                <div className='login'>
                
                <h2 >Welcome Back</h2>
                <h4>Login with your email & password</h4>
                
                <form className='login-form' action="submit">
                <input type="email" placeholder='Enter your email' name="" id="" />
                <input type="password" placeholder='Enter your password' name="" id="" />
                <button>Continue</button>
                </form>
                
                <button  className='login-btn-f'>Continue with Facebook</button>
                
                <button className='login-btn-g'>Continue with Google</button>
                
                <h5 >Don't Have any account? <span><NavLink className='join-link' to='/signup'>Signup</NavLink></span></h5>
                
                <h5 className='h5-reset'>Forgot your password? <span><a href="" className='join-link'>Reset</a></span></h5>

                </div>

            </div>
        </>
    )
}

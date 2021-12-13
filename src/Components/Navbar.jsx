import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
            <NavLink className='Nav-logo' to='/'>
                <h1>MEDI<span style={{color:'rgb(0, 206, 255)',marginLeft:'3px'}}>CARE</span></h1>
                </NavLink>
            </div>
            <div className='navbar-links'>
                <NavLink activeClassName='active' className='Nav-link' to='/offer'>Offer</NavLink>
                <NavLink activeClassName='active' className='Nav-link' to='/need'>Need Help</NavLink>
                
                <NavLink to='/login'><button className='navbar-btn'>Join Us</button></NavLink>
            </div>
        </div>
    )
}

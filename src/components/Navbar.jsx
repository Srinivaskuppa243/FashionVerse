import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded p-3">
        <NavLink to='/'className="navbar-brand">FashionVerse</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink to ='/' className='nav-link'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' className='nav-link'>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/products' className='nav-link'>Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                </li>
            </ul>
        </div>
        <button type='button' className='btn btn-outline-secondary'>Want to buy!!</button>
    </nav>
  )
}

export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Integral Kata</Link>
      <div className="collapse navbar-collapse">
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/' className='nav-link'>Login Users</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/timeline' className='nav-link'>Timeline</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/followers' className='nav-link'>Followers</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/wall' className='nav-link'>Wall</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/user' className='nav-link'>Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
const Navbar = () => {
  return (
    <>
      <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">Coursify</label>
      <ul>
        
      <li><NavLink to="/" >Internships</NavLink></li>
      <li><NavLink to="/" >Courses</NavLink></li>
      <li><NavLink to="/" >Jobs</NavLink></li>
      <li><NavLink to="/" >Login</NavLink></li>
      <li><NavLink to="/" className="register_btn" >Register</NavLink></li>



        
      </ul>
    </nav>
    </>
  )
}

export default Navbar
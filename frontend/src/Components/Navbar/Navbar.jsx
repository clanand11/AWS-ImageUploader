import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
      <h1>ImageBlog</h1>
    <nav className="navbar">
        <div className="links">
            <Link to="/">Upload</Link>
        </div>
        <span>
        <div className="links">
            <Link to="/uploadedImages">Gallery</Link>
        </div>
        </span>
    </nav>
        </>
  )
}

export default Navbar
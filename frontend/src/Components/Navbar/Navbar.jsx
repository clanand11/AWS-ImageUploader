import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
      <h1>ImageBlog</h1>
    <nav className="navbar">
        <div className="links">
            <a href="/">Upload</a>
        </div>
        <span>
        <div className="links">
            <a href="/uploadedImages">Uploads</a>
        </div>
        </span>
    </nav>
        </>
  )
}

export default Navbar
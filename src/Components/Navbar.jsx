import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <div className='p-2 mb-2' style={{ display: "flex", justifyContent: "space-between", alignItems: "center",backgroundColor:"rgb(195, 52, 235"}}>
        <span className="navbar-brand mb-0 h1 text-center Honk_font" style={{ marginLeft: "10px",fontSize: "30px" }}>Cric Blog</span>
        <div style={{ background: "rgb(195, 52, 235)", color: "black", display: "flex", justifyContent: "right", alignContent: "center" }} >
          <Link className='btn btn-outline-dark btn-sm caveat_font' style={{ marginRight: "40px" }} to="/">Home</Link>
          <Link className='btn btn-outline-dark btn-sm caveat_font' style={{ marginRight: "40px" }} to="/posts">Posts</Link>
          <Link className='btn btn-outline-dark btn-sm caveat_font' style={{ marginRight: "40px" }} to="/about">About</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom'

const PagesHome = () => (
  <div id="pages-home">
    <div className="container">
      <header className="text-center border-bottom">
        <h1>Home Page</h1>
        <div><Link to="/plans">Plan</Link></div>
        <div><Link to="/products">Product</Link></div>
        <div><Link to="/services">Services</Link></div>
      </header>
    </div>
  </div>
)

export default PagesHome

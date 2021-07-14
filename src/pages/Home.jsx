import React from 'react'
import { Link } from 'react-router-dom'

const PagesHome = () => (
  <div id="pages-home">
    <div id="home-layout" className="h-100 position-relative">
      <div className="circle-wrapper">
        <div className="circle" />
        <h1 className="circle-text">
          <div className="large">WC DIGITAL</div>
          <div className="medium">The One and Only Agency You Need</div>
        </h1>
      </div>
      <div id="home-redirects" className="flex-column flex-sm-row text-center text-sm-left mt-5" style={{ zIndex: 10 }}>
        <div className="links"><Link to="/plans">Plans</Link></div>
        <div className="links"><Link to="/products">Products</Link></div>
        <div className="links"><Link to="/services">Services</Link></div>
      </div>
      <div className="clouds">
        <img src="/images/cloud1.png" style={{ '--i': 1 }} />
        <img src="/images/cloud2.png" style={{ '--i': 2 }} />
        <img src="/images/cloud3.png" style={{ '--i': 3 }} />
        <img src="/images/cloud4.png" style={{ '--i': 4 }} />
        <img src="/images/cloud5.png" style={{ '--i': 5 }} />
      </div>
    </div>
  </div>
)

export default PagesHome

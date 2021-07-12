import React from 'react'
import { Link } from 'react-router-dom'

const PagesHome = () => (
  <div id="pages-home">
    <div id="home-layout" className="h-100 position-relative">
      <header className="text-center" style={{ zIndex: 10 }}>
        <div id="circle">
          <h1 id="circle-title">
            <div className="large">WC DIGITAL</div>
            <div className="medium">The One and Only Agency You Need</div>
          </h1>
        </div>
        <div id="home-redirects">
          <div className="links"><Link to="/plans">Plans</Link></div>
          <div className="links"><Link to="/products">Products</Link></div>
          <div className="links"><Link to="/services">Services</Link></div>
        </div>
      </header>
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

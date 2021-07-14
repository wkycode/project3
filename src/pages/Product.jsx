import React from 'react'

const PageProducts = () => (
  <div id="pages-product" className="container">

    <div className="container main ">
      <div className="section">
        <div className="main-img">
          <div img src="img/f3fd338b-0d65-42e5-9651-6782870f5d71.png" alt="a">
            <div className="main-about-me">
              <div className="title"><spam>WC DIGITAL Design</spam></div>
              <div className="slogan">WC Digital  is the thought lab specializes in creative Website , expansive thinking, and brainstorming.  We specializes in planning and
                website  design and development coordination for innovative projects around the world.</div>
            </div>
            <a href="#projects" className="arrow"><div className="ar" />
            </a>
          </div>

        </div>

      </div>
      <div id="projects" className="container projects">
        <div className="projects-description">
          <div className="description">Project list</div>
        </div>
        <div className="projects-list-wrapper">
          <div className="list">
            <a href="/product/product1" target="_blank" className="list-item">
              <div className="name"><span>Project 1</span></div>
              <div className="img img-bike-card" />
            </a>
            <a href="/product/product2" target="_blank" className="list-item">
              <div className="name"><span>Project 2 </span></div>
              <div className="img img-tesla-card" />
            </a>
            <a href="/product/product3" className="list-item">
              <div className="name"><span>Project 3</span></div>
              <div className="img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default PageProducts

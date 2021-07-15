import React from 'react'

const PageProducts = () => (
  <div id="page-product">
    <div className="untitled">
      <div className="untitled__slides">
        <div className="untitled__slide">
          <div className="untitled__slideBg">
            <div className="untitled__slideContent">
              <span>Project 1</span>
              <a className="button" href="/product/product1" target="/black">View More Detail</a>
            </div>
          </div>
        </div>
        <div className="untitled__slide">
          <div className="untitled__slideBg">
            <div className="untitled__slideContent">

              <span>Project 2</span>
              <a className="button" href="/product/product1" target="/black">View More Detail</a>
            </div>
          </div>
        </div>
        <div className="untitled__slide">
          <div className="untitled__slideBg">
            <div className="untitled__slideContent">
              <span>Project 3</span>
              <a className="button" href="/product/product1" target="/black">View More Detail</a>
            </div>
          </div>
        </div>
      </div>
      <div className="untitled__shutters" />
    </div>
  </div>
)
export default PageProducts

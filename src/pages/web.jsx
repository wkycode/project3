import React from 'react'
import { Card } from 'react-bootstrap'

const PageWeb = () => (
  <>
    <Card className="bg-dark text-white">
      <Card.Img src="https://bbltech.com/wp-content/uploads/2021/01/services.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="font-weight-bold text-center">Our Services</Card.Title>
        <Card.Text className="font-weight-light text-center">
          Helping your great idea stands out
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div className="col card-wrapper">
        <div className="wrapper">
          <div className="wcard">
            <input type="checkbox" id="card1" className="more" aria-hidden="true" />
            <div className="content">
              <div className="front">
                <div className="inner">
                  <h2>Cozy apartment</h2>
                  <label htmlFor="card1" className="button">Details</label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                  </div>
                  <label htmlFor="card1" className="button return" aria-hidden="true">
                    <i className="fas fa-arrow-left" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col card-wrapper">
        <div className="wcard">
          <input type="checkbox" id="card2" className="more" aria-hidden="true" />
          <div className="content">
            <div className="front">
              <div className="inner">
                <h2>Cozy apartment</h2>
                <label htmlFor="card2" className="button">Details</label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                </div>
                <label htmlFor="card2" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col card-wrapper">
        <div className="wcard">
          <input type="checkbox" id="card3" className="more" aria-hidden="true" />
          <div className="content">
            <div className="front">
              <div className="inner">
                <h2>Cozy apartment</h2>
                <label htmlFor="card3" className="button">Details</label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                </div>
                <label htmlFor="card3" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col card-wrapper">
        <div className="wcard">
          <input type="checkbox" id="card4" className="more" aria-hidden="true" />
          <div className="content">
            <div className="front">
              <div className="inner">
                <h2>Cozy apartment</h2>
                <label htmlFor="card4" className="button">Details</label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                </div>
                <label htmlFor="card4" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col card-wrapper">
        <div className="wcard">
          <input type="checkbox" id="card5" className="more" aria-hidden="true" />
          <div className="content">
            <div className="front">
              <div className="inner">
                <h2>Cozy apartment</h2>
                <label htmlFor="card5" className="button">Details</label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                </div>
                <label htmlFor="card5" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col card-wrapper">
        <div className="wcard">
          <input type="checkbox" id="card6" className="more" aria-hidden="true" />
          <div className="content">
            <div className="front">
              <div className="inner">
                <h2>Cozy apartment</h2>
                <label htmlFor="card6" className="button">Details</label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                </div>
                <label htmlFor="card6" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
export default PageWeb

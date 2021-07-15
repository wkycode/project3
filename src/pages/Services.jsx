import React from 'react'
import { Card } from 'react-bootstrap'

const PageServices = () => (
  <>
    <Card className="bg-dark text-white">
      <Card.Img src="https://bbltech.com/wp-content/uploads/2021/01/services.jpg" alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title className="services-title text-center">Our Services</Card.Title>
        <Card.Text className="services-subtitle text-center text-muted">
          Helping your great idea stands out
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div className="col card-wrapper">
          <div className="wrapper">
            <div className="wcard">
              <input type="checkbox" id="card1" className="more" aria-hidden="true" />
              <div className="content">
                <div className="front">
                  <div className="inner">
                    <h2>Website Development and Renovation</h2>
                    <label htmlFor="card1" className="button">Details</label>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="description">
                      <p>Website is the storefront of your business.
                        A trendy storefront attracts more customers and clients;
                        whereas an outdated and poorly maintained one push your customers away.
                        How is your website? How is it compared with your competitors?
                        We believe a great website will help your business stands out from your competitors,
                        just as a nicely decorated shop attracts visitors.
                        Dont hesitate to contact us for more information.
                        Drop us a message and we will call you back. No nuisance, we guarantee.</p>
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
                  <h2>Mobile App
                    Design & Development</h2>
                  <label htmlFor="card2" className="button">Details</label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="description">
                    <p>If website is a storefront of a business, Mobile App will be the personnel.
                      You will be greeted by the shop-keeper. He/she understands your needs,
                      recommends suitable product, and calls you when a new item arrives.
                      A great Mobile App does the similar, and even more. It helps you do something easily,
                      maybe via a swipe gesture, and integrate with the functions in your mobile phone such as GPS, NFC, camera, bluetooth seamlessly.
                      Like a warm reminder from a shop-keeper, your Mobile App can send notification to your customers phone with a Ding tone, and remind them of important events, or update them a hot gossip within your industry.
                    </p>
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
                  <h2>Facebook App
                    Fanpage campaign promotion</h2>
                  <label htmlFor="card3" className="button">Details</label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="description">
                    <p>Facebook is an important social media platform in Hong Kong,
                      with over 4.4 millions of Hong Kong users. This is over 50% of the city population.
                      Just like you will open your shop in places with the largest number of population,
                      many businesses open their Fanpage in Facebook. It helps you to communicate more effectively with your customer,
                      builds up your brand, and spreads your message easily through viral marketing. Just as you will organize sales campaign for your store or business to boost up sales,
                      you can also use a Facebook App to run a marketing campaign on your Fanpage.</p>
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
                  <h2>Production, Sending & Engagement Reporting</h2>
                  <label htmlFor="card4" className="button">Details</label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="description">
                    <p>eDM is the most cost effective way to communicate with your customers or clients on a regular basis.
                      Yet, your customers receive many legitimate and spam emails. In order to grab your customers attention, you eDM must be smart and clear,
                      easy to read on phone or tablet, and attract readers to go on reading. Or else your eDM will be lost in the ocean of trash mailbox. How is your eDMs compared with your customers?
                      Is it easy to read on every device? We believe a great eDM can effectively engage your customers and increase their loyalty.</p>
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
                  <h2>IT Solutions
                    Design, Implementation & Integration</h2>
                  <label htmlFor="card5" className="button">Details</label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="description">
                    <p>Very often your great idea involves multiple components,
                      not just software but hardware. Not just network equipment but other electronics devices or sensors.
                      We have done projects involving hardware and software,
                      from taxi headrest advertisement system, to smart charging system.
                      Our team understands both hardware world and software world.
                      We are capable to build great and efficient system.</p>
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
                  <h2>IT Maintenance
                    Office Computer & Server Maintenance</h2>
                  <label htmlFor="card6" className="button">Details</label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="description">
                    <p>There are numerous computers and accessories in your office. PCs, notebooks,
                      servers, routers, switches, printers,
                      as well as numerous software packages office 365, exchange, anti-virus, virtual machines, ...
                      you name it. Do you have problems with IT in your office? Are they well managed?
                      We believe a great office IT maintenance helps to eliminate many nuisance and release your resources for other high productivity work. </p>
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
    </div>
  </>
)
export default PageServices

import React from 'react'
import { Carousel, Row, Button, Col, TabContent } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'

const PageProduct1 = () => (
  <>
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: '500px' }}
          className="img-fluid w-100  "
          src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Demo Display</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '500px' }}
          className="img-fluid w-100 "
          src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Demo Display2</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '500px' }}
          className="img-fluid w-100 "
          src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Demo Display3</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="text-left" Container>
      <div className="Col-md-auto">
        <h5 className=" text-left text-bold ">Project C </h5>
        <h3 className="text-left"> AlphaThink & Design</h3>
        <h3 className="text-left"> McBrideDesign Design</h3>

      </div>
    </div>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/24/sign-info-icon.png" />
              <div className="text center text-bold">Website Services</div>
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/24/sign-info-icon.png" />
              <div className="text center text-bold">Facebook App</div>
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/24/sign-info-icon.png" />
              <div className="text center text-bold">Website Services</div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <div className="text-right">
                evelopment and Renovation Responsive Websites, Tailor-made Backend System, Corporate Website, …</div>
              <TabContent />
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <div className="text-right">
                Fanpage campaign promotion New product launch, brand awareness, promotional events, …
              </div>
              <TabContent />
              <Tab.Pane eventKey="#link3">
                <div className="text-right">
                  Fanpage campaign promotion New product launch, brand awareness, promotional events, …
                </div>
                <TabContent />
              </Tab.Pane>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

    <div className="bg-white d-inline clearfix">
      <Button type="Button" href="/product/product4" className="btn btn-secondary float-left">PREVIOUS</Button>
      <Button type="Button" href="/product/product2" className="btn btn-secondary float-right">NEXT</Button>
    </div>
  </>
)
export default PageProduct1

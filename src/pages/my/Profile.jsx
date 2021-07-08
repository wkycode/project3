import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Container, ListGroup, Card, Button, Image } from 'react-bootstrap'

import { updateCurrentUser } from '@/actions/my/profile'

class PagesMyProfile extends React.Component {
  renderProfile() {
    const { stateCurrentUser: { currentUser } } = this.props

    return (
      <div className="ListGroup">
        <Container>
          <Row>
            <ListGroup>
              <Image
                width={400}
                height={400}
                src={currentUser.avatar}
                roundedCircle
              />
              <ListGroup.Item>{currentUser.username}</ListGroup.Item>
              <ListGroup.Item>{currentUser.id}</ListGroup.Item>
              <ListGroup.Item>{currentUser.email}</ListGroup.Item>
              <Button className="btn btn-success mb-3" type="button" href="/my/profile/edit">Edit</Button>
            </ListGroup>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Header>My Order</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  render() {
    return (
      <div id="pages-todos-index" className="container">
        <header className="text-center border-bottom">
          <h1>Profile</h1>
          <div><Link to="/">Home Page</Link></div>
        </header>
        <main className="text-center mt-3">
          <>
            <Container>
              <Row>
                <Col>{this.renderProfile()}</Col>

              </Row>
            </Container>
          </>
        </main>
      </div>
    )
  }
}

PagesMyProfile.propTypes = {
  stateCurrentUser: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser
})

const mapDispatchToProps = {
  updateCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesMyProfile)

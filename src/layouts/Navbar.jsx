import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavDropdown } from 'react-bootstrap'

import { authLogout } from '@/actions/auth'

class LayoutsNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLogoutClick() {
    this.props.authLogout()
  }

  render() {
    const { stateCurrentUser: { currentUser } } = this.props

    return (
      <Navbar id="layouts-navbar" bg="light" variant="dark" expand="lg" collapseOnSelect>

        <Navbar.Brand id="home-page-redirect" as={NavLink} to="/" href="#"> WC DIGITAL </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown id="nav-dropdown" title="Menu">
              <NavDropdown.Item className="dropdown-text" href="/plans">Plans</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-text" href="/products">Products</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-text" href="/services">Services</NavDropdown.Item>
            </NavDropdown>
            {
              currentUser ? (
                <>
                  <NavDropdown id="nav-current-user-dropdown" title="My">
                    <NavDropdown.Item className="dropdown-text" href="/my/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-text" href="/my/requests">Requests</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="auth-btn" eventKey="C" onClick={this.handleLogoutClick}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="auth-btn" as={NavLink} to="/auth/signup" eventKey="A">Signup</Nav.Link>
                  <Nav.Link className="auth-btn" as={NavLink} to="/auth/login" eventKey="B">Login</Nav.Link>
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

LayoutsNavbar.propTypes = {
  stateCurrentUser: PropTypes.shape().isRequired,
  authLogout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser
})

const mapDispatchToProps = {
  authLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutsNavbar)

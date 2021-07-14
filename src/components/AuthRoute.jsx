import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = ({ component: Component, stateCurrentUser: { currentUser }, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      currentUser ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
)

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.element,
    PropTypes.func
  ]).isRequired,
  stateCurrentUser: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser
})

export default connect(mapStateToProps)(AuthRoute)

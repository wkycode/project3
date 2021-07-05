import React from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import LayoutsNavbar from '@/layouts/Navbar'

import PagesHome from '@/pages/Home'

import PagesAuthSignup from '@/pages/auth/Signup'
import PagesAuthLogin from '@/pages/auth/Login'

import PagesNotFound from '@/pages/NotFound'

import { getCurrentUser } from '@/actions/my/profile'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Router>
        <LayoutsNavbar />

        <Switch>
          <Route exact path="/" component={PagesHome} />

          <Route path="/auth">
            <Route exact path="/auth/signup" component={PagesAuthSignup} />
            <Route exact path="/auth/login" component={PagesAuthLogin} />
          </Route>

          <Route component={PagesNotFound} />
        </Switch>
      </Router>
    )
  }
}
App.propTypes = {
  getCurrentUser: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  getCurrentUser
}

export default connect(null, mapDispatchToProps)(App)

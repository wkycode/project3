import React from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import LayoutsNavbar from '@/layouts/Navbar'
import PrivateRoute from '@/components/PrivateRoute'
import Loading from '@/components/Loading'

import PagesHome from '@/pages/Home'
import PagesPlan from '@/pages/Plan'
import PagesProduct from '@/pages/Product'
import PagesServices from '@/pages/Services'
import PagesMyProfile from '@/pages/my/Profile'
import PagesMyProfileEdit from '@/pages/my/ProfileEdit'

import PagesAuthSignup from '@/pages/auth/Signup'
import PagesAuthLogin from '@/pages/auth/Login'

import PagesNotFound from '@/pages/NotFound'

import { getCurrentUser } from '@/actions/my/profile'
import PagesMyRequests from '@/pages/my/Requests'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.getCurrentUser().finally(() => {
      this.setState({ loaded: true })
    })
  }

  render() {
    const { loaded } = this.state

    return (
      <Router>
        <div>
          <LayoutsNavbar />

          {
            loaded ? (
              <Switch>
                <Route exact path="/" component={PagesHome} />

                <PrivateRoute exact path="/my/profile" component={PagesMyProfile} />
                <PrivateRoute exact path="/my/profile/edit" component={PagesMyProfileEdit} />
                <PrivateRoute exact path="/my/requests" component={PagesMyRequests} />

                <Route path="/auth">
                  <Route exact path="/auth/signup" component={PagesAuthSignup} />
                  <Route exact path="/auth/login" component={PagesAuthLogin} />
                </Route>

                <Route exact path="/plans" component={PagesPlan} />
                <Route exact path="/products" component={PagesProduct} />
                <Route exact path="/services" component={PagesServices} />

                <Route component={PagesNotFound} />
              </Switch>
            ) : (
              <div className="my-3">
                <Loading />
              </div>
            )
          }
        </div>
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

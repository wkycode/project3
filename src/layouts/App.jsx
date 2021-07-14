import React from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import LayoutsNavbar from '@/layouts/Navbar'
import PrivateRoute from '@/components/PrivateRoute'
import AuthRoute from '@/components/AuthRoute'
import Loading from '@/components/Loading'

import PagesServices from '@/pages/Services'

import PagesProduct from '@/pages/Product'
import Product1 from '@/pages/product/product1'
import Product2 from '@/pages/product/product2'
import Product3 from '@/pages/product/product3'
import Product4 from '@/pages/product/product4'

import PagesHome from '@/pages/Home'
import PagesPlan from '@/pages/Plan'

import PagesMyProfile from '@/pages/my/Profile'

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
        <ToastContainer />
        <LayoutsNavbar />

        {
          loaded ? (
            <Switch>
              <Route exact path="/" component={PagesHome} />

              <PrivateRoute exact path="/my/profile" component={PagesMyProfile} />
              <PrivateRoute exact path="/my/requests" component={PagesMyRequests} />

              <Route path="/auth">
                <AuthRoute exact path="/auth/signup" component={PagesAuthSignup} />
                <AuthRoute exact path="/auth/login" component={PagesAuthLogin} />
              </Route>

              <Route exact path="/plans" component={PagesPlan} />
              <Route exact path="/services" component={PagesServices} />

              <Route exact path="/products" component={PagesProduct} />
              <Route exact path="/product/product1" component={Product1} />
              <Route exact path="/product/product2" component={Product2} />
              <Route exact path="/product/product3" component={Product3} />
              <Route exact path="/product/product4" component={Product4} />

              <Route component={PagesNotFound} />
            </Switch>
          ) : (
            <div className="my-3">
              <Loading />
            </div>
          )
        }
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

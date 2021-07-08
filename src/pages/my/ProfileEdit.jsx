import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  updateCurrentUser
} from '@/actions/my/profile'

import FormMyProfileEdit from '@/forms/my/profile/Edit'

class PagesMyProfileEdit extends React.Component {
  constructor(props) {
    super(props)

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleLoginSubmit(values) {
    this.props.updateCurrentUser(values).then(() => {
      const { history: { push } } = this.props
      push('/')
    })
  }

  render() {
    return (
      <div id="pages-auth-login" className="container text-center my-3">
        <h1 className="mb-3">Edit Profile</h1>

        <div className="row text-left">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <FormMyProfileEdit onSubmit={this.handleLoginSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

PagesMyProfileEdit.propTypes = {
  history: PropTypes.shape().isRequired,
  updateCurrentUser: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  updateCurrentUser
}

export default connect(null, mapDispatchToProps)(PagesMyProfileEdit)

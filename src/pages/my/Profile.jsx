import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ModalsRequestsProfileEdit from '@/modals/profile/ProfileEdit'
import ModalsRequestsPasswordEdit from '@/modals/profile/PasswordEdit'

import { updateMyProfile, updatePassword } from '@/actions/my/profile'

class PagesMyProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModalsRequestsProfileEdit: false,
      showModalsRequestsPasswordEdit: false

    }
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleUpdatePasswordSubmit = this.handleUpdatePasswordSubmit.bind(this)
    this.openModalsRequestsEdit = this.openModalsRequestsEdit.bind(this)
    this.openModalsRequestsPasswordEdit = this.openModalsRequestsPasswordEdit.bind(this)
    this.closeModalsRequestsEdit = this.closeModalsRequestsEdit.bind(this)
    this.closeModalsRequestsPasswordEdit = this.closeModalsRequestsPasswordEdit.bind(this)
  }

  handleEditSubmit(values, formik) {
    this.props.updateMyProfile(values).then(() => {
      this.closeModalsRequestsEdit()
    }).finally(() => {
      formik.setSubmitting(false)
    })
  }

  handleUpdatePasswordSubmit(values, formik) {
    this.props.updatePassword(values).then(() => {
      this.closeModalsRequestsPasswordEdit()
    }).finally(() => {
      formik.setSubmitting(false)
    })
  }

  openModalsRequestsEdit() {
    this.setState({ showModalsRequestsProfileEdit: true })
  }

  openModalsRequestsPasswordEdit() {
    this.setState({ showModalsRequestsPasswordEdit: true })
  }

  closeModalsRequestsEdit() {
    this.setState({ showModalsRequestsProfileEdit: false })
  }

  closeModalsRequestsPasswordEdit() {
    this.setState({ showModalsRequestsPasswordEdit: false })
  }

  renderProfile() {
    const { stateCurrentUser: { currentUser } } = this.props

    return (
      <div>
        <div id="page-profile" className="container">
          <div className="row">
            <div className="col">
              <div className="text-center">
                <div className="h2">Settings</div>
              </div>
            </div>
          </div>

          <div id="profile-edit" className="container">
            <div className="row">
              <div className="content">
                <div className="card-info">
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <div className="font" p>Information Edit</div>

                      <div className="d-flex flex-row-reverse">
                        <button
                          className="btn btn-light"
                          type="button"
                          onClick={() => {
                            this.openModalsRequestsEdit(currentUser)
                          }}
                        >Edit
                        </button>
                      </div>
                    </div>

                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="title col-12 col-md-4 col-lg-3 spacing">E-mail </div>
                      <div className=" col-12 col-md-8 col-lg-9 spacing">{currentUser.email} </div>
                      <div className="title col-12 col-md-4 col-lg-3 spacing">User Name </div>
                      <div className=" col-12 col-md-4 col-lg-9 spacing"> {currentUser.username}</div>
                      <div className="title col-12 col-md-4 col-lg-3 spacing">Address </div>
                      <div className=" col-12 col-md-4 col-lg-9 spacing"> {currentUser.address}</div>
                      <div className="title col-12 col-md-4 col-lg-3 spacing">Phone </div>
                      <div className=" col-12 col-md-4 col-lg-9 spacing">{currentUser.phone} </div>
                    </div>
                  </div>
                </div>

                <div className="card-pw">
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <div className="font" p>Password Edit</div>
                      <div className="d-flex flex-row-reverse">
                        <button
                          className="btn btn-light"
                          type="button"
                          onClick={() => {
                            this.openModalsRequestsPasswordEdit(currentUser)
                          }}
                        >Edit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 lg-3">Password  ******** </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { showModalsRequestsProfileEdit } = this.state
    const { showModalsRequestsPasswordEdit } = this.state

    return (
      <div id="pages-my-profile" className="container my-3">
        {this.renderProfile()}
        {showModalsRequestsProfileEdit && <ModalsRequestsProfileEdit close={this.closeModalsRequestsEdit} onSubmit={this.handleEditSubmit} />}
        {showModalsRequestsPasswordEdit && <ModalsRequestsPasswordEdit close={this.closeModalsRequestsPasswordEdit} onSubmit={this.handleUpdatePasswordSubmit} />}
      </div>
    )
  }
}

PagesMyProfile.propTypes = {
  stateCurrentUser: PropTypes.shape().isRequired,
  updateMyProfile: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser,
  stateRequests: state.requests
})

const mapDispatchToProps = {
  updateMyProfile,
  updatePassword
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesMyProfile)

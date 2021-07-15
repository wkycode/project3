import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { Image } from 'react-bootstrap'
import ModalsRequestsProfileEdit from '@/modals/profile/ProfileEdit'
import ModalsRequestsPasswordEdit from '@/modals/profile/PasswordEdit'

import { updateMyProfile, updatePassword } from '@/actions/my/profile'

class PagesMyProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModalsRequestsProfileEdit: false,
      showModalsRequestsPasswordEdit: false
      // selectedRequest: null
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
            <div className="col-12">
              <div className="h2">ABC</div>
            </div>
          </div>
          <div id="profile-edit" className="container">
            <div className="row">
              <div className="content">
                <div className="card">
                  <div className="card-header">
                    <p>Information Edit</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 col-lg-3">E-mail </div>
                      <div className="col-12 col-md-8 col-lg-9">{currentUser.email} </div>
                      <div className="col-12 col-md-4 col-lg-3">User Name </div>
                      <div className="col-12 col-md-4 col-lg-9"> {currentUser.username}</div>
                      <div className="col-12 col-md-4 col-lg-3">Address </div>
                      <div className="col-12 col-md-4 col-lg-9"> {currentUser.address}</div>
                      <div className="col-12 col-md-4 col-lg-3">Phone </div>
                      <div className="col-12 col-md-4 col-lg-9">{currentUser.phone} </div>
                      <div className="bg-transparent border-0 pt-0 card-footer">
                        <div className="d-flex flex-row-reverse">
                          <button
                            className="btn btn-outline-primary p-2"
                            type="button"
                            onClick={() => {
                              this.openModalsRequestsEdit(currentUser)
                            }}
                          >Edit
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <p>Password Edit</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 col-lg-3">Password </div>
                      <div className="bg-transparent border-0 pt-0 card-footer">
                        <div className="d-flex flex-row-reverse">
                          <button
                            className="btn btn-outline-primary p-2"
                            type="button"
                            onClick={() => {
                              this.openModalsRequestsPasswordEdit(currentUser)
                            }}
                          >Edit
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <div className="profile">
            <div className="profile-image">
              <Image
                width={200}
                height={200}
                src={currentUser.avatar}
                roundedCircle
              />
            </div>
            <div className="profile-user-settings">

              <div className="profile-user-name">{currentUser.username}
                <button
                  className="btn profile-edit-btn"
                  type="button"
                  onClick={() => {
                    this.openModalsRequestsEdit(currentUser)
                  }}
                >Edit</button>
              </div>
              <div className="profile-user-email">{currentUser.email} </div>
              <div className="profile-user-address">{currentUser.address} </div>
              <div className="profile-user-address">{currentUser.phone} </div>
            </div>
          </div> */}
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

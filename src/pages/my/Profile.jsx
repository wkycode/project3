/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListGroup, Card, Image, Table } from 'react-bootstrap'
import qs from 'query-string'
import { getRequests } from '@/actions/requests'
import ModalsRequestsProfileEdit from '@/modals/requests/ProfileEdit'

import { updateCurrentUser } from '@/actions/my/profile'

class PagesMyProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModalsRequestsProfileEdit: false,
      selectedRequest: null
    }
    this.openModalsRequestsEdit = this.openModalsRequestsEdit.bind(this)
    this.closeModalsRequestsEdit = this.closeModalsRequestsEdit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  // componentDidMount() {
  //   const { RequestId } = qs.parse(window.location.search)
  //   this.props.getRequests().then((resp) => {
  //     const selectedRequest = resp.data.requests.find((request) => request.id === Number(RequestId))
  //   })
  // }

  handleEditSubmit(values, formik) {
    this.props.updateCurrentUser(values).then(() => {
      this.closeModalsRequestsEdit()
    }).finally(() => {
      formik.setSubmitting(false)
    })
  }

  openModalsRequestsEdit() {
    this.setState({ showModalsRequestsProfileEdit: true })
  }

  closeModalsRequestsEdit() {
    this.setState({ showModalsRequestsProfileEdit: false })
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
                    <p>Information</p>
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
                      <div className="col">
                        <button
                          className="btn profile-edit-btn"
                          type="button"
                          onClick={() => {
                            this.openModalsRequestsEdit(currentUser)
                          }}
                        >Edit</button>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="profile">
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
          </div>
        </div>
      </div>
    )
  }

  // renderRequest() {
  //   const { stateRequests: { requests } } = this.props

  //   return (
  //     <div className="flex-grow-1">
  //       <Table>
  //         <thead className=" orderDetail">

  //           <th className=" orderDetail">Title</th>
  //           <th className=" orderDetail"> Plan</th>
  //           <th className=" orderDetail">Template</th>
  //           <th className=" orderDetail">Note</th>
  //         </thead>

  //       </Table>

  //       {
  //         requests.length > 0 ? (
  //           requests.slice(0, 3).map((item) => (
  //             <div key={item.id}>
  //               <Table responsive="sm">

  //                 <tbody className="orderItem">
  //                   <tr>
  //                     <td className=" orderDetail">{item.title}</td>
  //                     <td className=" orderDetail">{item.plan}</td>
  //                     <td className=" orderDetail">{item.template}</td>
  //                     <td className=" orderDetail">{item.note}</td>
  //                   </tr>
  //                 </tbody>
  //               </Table>

  //             </div>
  //           ))
  //         ) : <h2>No Requests</h2>
  //       }
  // </div >
  // )
  // }

  render() {
    const { showModalsRequestsProfileEdit } = this.state

    return (
      <div id="pages-my-profile" className="container my-3">
        {this.renderProfile()}
        {/* <div className="Request">
          {this.renderRequest()}
        </div> */}

        {showModalsRequestsProfileEdit && <ModalsRequestsProfileEdit close={this.closeModalsRequestsEdit} onSubmit={this.handleEditSubmit} />}
      </div>
    )
  }
}

PagesMyProfile.propTypes = {
  stateCurrentUser: PropTypes.shape().isRequired,
  // stateRequests: PropTypes.shape().isRequired,
  updateCurrentUser: PropTypes.func.isRequired
  // getRequests: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser,
  stateRequests: state.requests
})

const mapDispatchToProps = {
  updateCurrentUser
  // getRequests
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesMyProfile)

/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListGroup, Card, Image } from 'react-bootstrap'
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

  componentDidMount() {
    const { RequestId } = qs.parse(window.location.search)
    this.props.getRequests().then((resp) => {
      const selectedRequest = resp.data.requests.find((request) => request.id === Number(RequestId))
    })
  }

  handleEditSubmit(values) {
    this.props.updateCurrentUser(values).then(() => {
      this.closeModalsRequestsEdit()
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
        <Image
          width={300}
          height={300}
          src={currentUser.avatar}
          roundedCircle
        />
        <div>Username: {currentUser.username}</div>
        <div>Email: {currentUser.email}</div>

        <button
          className="btn btn-success mb-3"
          type="button"
          onClick={() => {
            this.openModalsRequestsEdit(currentUser)
          }}
        >Edit</button>
      </div>
    )
  }

  renderRequest() {
    const { stateRequests: { requests } } = this.props

    return (
      <div className="flex-grow-1">
        {
          requests.length > 0 ? (
            requests.slice(0, 3).map((item) => (
              <div key={item.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Header>My Order</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{item.id}</ListGroup.Item>
                    <ListGroup.Item>{item.template}</ListGroup.Item>
                    <ListGroup.Item>{item.note}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            ))
          ) : <h2>No Requests</h2>
        }
      </div>
    )
  }

  render() {
    const { showModalsRequestsProfileEdit } = this.state

    return (
      <div id="pages-my-profile" className="container my-3">
        <div className="d-flex">
          {this.renderProfile()}
          {this.renderRequest()}
        </div>

        {showModalsRequestsProfileEdit && <ModalsRequestsProfileEdit close={this.closeModalsRequestsEdit} onSubmit={this.handleEditSubmit} />}
      </div>
    )
  }
}

PagesMyProfile.propTypes = {
  stateCurrentUser: PropTypes.shape().isRequired,
  stateRequests: PropTypes.shape().isRequired,
  updateCurrentUser: PropTypes.func.isRequired,
  getRequests: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser,
  stateRequests: state.requests
})

const mapDispatchToProps = {
  updateCurrentUser,
  getRequests
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesMyProfile)

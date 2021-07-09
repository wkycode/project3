import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import qs from 'query-string'

import {
  getRequests, destroyRequest, updateRequest, resetRequests
} from '@/actions/requests'

import ModalsRequestsEdit from '@/modals/requests/Edit'
import Loading from '@/components/Loading'

class PagesMyRequests extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModalsRequestsEdit: false,
      selectedRequest: null
    }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.openModalsRequestsEdit = this.openModalsRequestsEdit.bind(this)
    this.closeModalsRequestsEdit = this.closeModalsRequestsEdit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  componentDidMount() {
    const { RequestId } = qs.parse(window.location.search)
    this.props.getRequests().then((resp) => {
      const selectedRequest = resp.data.requests.find((request) => request.id === Number(RequestId))
      if (selectedRequest) {
        this.setState({ selectedRequest, showModalsRequestsEdit: true })
      }
    })
  }

  componentWillUnmount() {
    this.props.resetRequests()
  }

  handleDeleteClick(id) {
    this.props.destroyRequest(id)
  }

  handleEditSubmit(values, formik) {
    const { selectedRequest: { id } } = this.state
    this.props.updateRequest(values, id).then(() => {
      this.closeModalsRequestsEdit()
    }).finally(() => {
      formik.setSubmitting(false)
    })
  }

  openModalsRequestsEdit(selectedRequest) {
    this.setState({ showModalsRequestsEdit: true, selectedRequest })
  }

  closeModalsRequestsEdit() {
    this.setState({ showModalsRequestsEdit: false, selectedRequest: null })
  }

  render() {
    const { showModalsRequestsEdit, selectedRequest } = this.state
    const { stateRequests: { requests, isGetRequestsLoading, destroyingIDs } } = this.props

    if (isGetRequestsLoading) return <Loading />
    if (requests.length === 0) return <h2>No Requests</h2>
    return (
      <div className="list-group">
        {
          requests.map((item) => (
            <>
              <div className="d-flex flex-column justify-content-center align-items-center" />
              <div className="btn-group btn-group-sm mt-3">
                {item.title}
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    this.openModalsRequestsEdit(item)
                  }}
                  disabled={destroyingIDs.includes(item.id)}
                >Edit</button>

                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    this.handleDeleteClick(item.id)
                  }}
                  disabled={destroyingIDs.includes(item.id)}
                >Delete</button>
              </div>
            </>
          ))
        }
        {showModalsRequestsEdit && <ModalsRequestsEdit close={this.closeModalsRequestsEdit} onSubmit={this.handleEditSubmit} request={selectedRequest} />}
      </div>
    )
  }
}

PagesMyRequests.propTypes = {
  // history: PropTypes.shape().isRequired,
  stateRequests: PropTypes.shape().isRequired,
  getRequests: PropTypes.func.isRequired,
  destroyRequest: PropTypes.func.isRequired,
  updateRequest: PropTypes.func.isRequired,
  resetRequests: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stateRequests: state.requests
})

const mapDispatchToProps = {
  getRequests,
  destroyRequest,
  updateRequest,
  resetRequests
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesMyRequests)

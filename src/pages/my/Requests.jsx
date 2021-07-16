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

    this.tblContent = React.createRef()
    this.tblContentTable = React.createRef()

    this.state = {
      showModalsRequestsEdit: false,
      selectedRequest: null,
      style: {}
    }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.setTBLPadding = this.setTBLPadding.bind(this)
    this.openModalsRequestsEdit = this.openModalsRequestsEdit.bind(this)
    this.closeModalsRequestsEdit = this.closeModalsRequestsEdit.bind(this)
  }

  componentDidMount() {
    const { RequestId } = qs.parse(window.location.search)
    this.props.getRequests().then((resp) => {
      const selectedRequest = resp.data.requests.find((request) => request.id === Number(RequestId))
      if (selectedRequest) {
        this.setState({ selectedRequest, showModalsRequestsEdit: true })
      }
    })

    window.addEventListener('resize', this.setTBLPadding)
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.style.paddingRight && !this.state.style.paddingRight) {
      this.setTBLPadding()
    }
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

  setTBLPadding() {
    if (this.tblContent.current && this.tblContentTable.current) {
      this.setState({
        style: {
          paddingRight: this.tblContent.current.offsetWidth - this.tblContentTable.current.offsetWidth
        }
      })
    }
  }

  openModalsRequestsEdit(selectedRequest) {
    this.setState({ showModalsRequestsEdit: true, selectedRequest })
  }

  closeModalsRequestsEdit() {
    this.setState({ showModalsRequestsEdit: false, selectedRequest: null })
  }

  render() {
    const { showModalsRequestsEdit, selectedRequest, style } = this.state
    const { stateRequests: { requests, isGetRequestsLoading, destroyingIDs } } = this.props

    if (isGetRequestsLoading) return <Loading />
    if (requests.length === 0) {
      return (
        <div id="pages-my-request">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="no-request">No Requests</div>
          </div>
        </div>
      )
    }
    return (
      <div className="list-group">
        <div id="pages-my-request">

          <section>
            <h1>My Request List</h1>
            <div className="tbl-header" style={style}>
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr>
                    <th>Website Title</th>
                    <th>Plan</th>
                    <th>Template</th>
                    <th>Notes</th>
                    <th>Edit Item</th>
                    <th>Delete Item</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="tbl-content" ref={this.tblContent}>
              <table className="table-hover" cellPadding="0" cellSpacing="0" border="0" ref={this.tblContentTable}>
                <tbody>
                  {
                    requests.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.plan}</td>
                        <td>{item.template}</td>
                        <td>{item.note}</td>
                        <td>  <button
                          className="btn btn-outline-light"
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            this.openModalsRequestsEdit(item)
                          }}
                          disabled={destroyingIDs.includes(item.id)}
                        ><i className="far fa-edit" /></button></td>
                        <td><button
                          className="btn btn-outline-light"
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            this.handleDeleteClick(item.id)
                          }}
                          disabled={destroyingIDs.includes(item.id)}
                        ><i className="far fa-trash-alt" /></button></td>
                      </tr>
                    ))
                  }
                  {showModalsRequestsEdit && <ModalsRequestsEdit close={this.closeModalsRequestsEdit} onSubmit={this.handleEditSubmit} request={selectedRequest} />}
                </tbody>
              </table>
            </div>
          </section>

        </div>
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

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createRequest } from '@/actions/requests'
import ModalsRequestsCreate from '@/modals/requests/Create'

class PagesPlan extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedPlan: '',
      showModalsRequestsCreate: false
    }

    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.closeModalsRequestsCreate = this.closeModalsRequestsCreate.bind(this)
    this.openModalsRequestsCreate = this.openModalsRequestsCreate.bind(this)
  }

  handleCreateSubmit(values, formik) {
    this.props.createRequest(values).then((resp) => {
      const { history: { push } } = this.props
      push(`/my/requests?RequestId=${resp.data.request.id}`)
    }).finally(() => {
      formik.setSubmitting(false)
    })
  }

  openModalsRequestsCreate(selectedPlan) {
    const { stateCurrentUser: { currentUser } } = this.props
    if (!currentUser) {
      window.localStorage.setItem('originalPath', window.location.pathname)
      this.props.history.push('/auth/signup')
    } else {
      this.setState({ showModalsRequestsCreate: true, selectedPlan })
    }
  }

  closeModalsRequestsCreate() {
    this.setState({ showModalsRequestsCreate: false })
  }

  render() {
    const { showModalsRequestsCreate, selectedPlan } = this.state
    return (
      <>
        <div id="pages-plan" className="py-3">
          <header>
            <div id="pricing-header">
              <h1>Pricing</h1>
              <p className="fs-5 text-muted">No bullshit, Let&apos;s go</p>
            </div>
          </header>
          <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">

              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Basic Plan</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">Services Included</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Website <i className="far fa-check-circle" /></li>
                      <li>Mobile App <i className="far fa-check-circle" /></li>
                      <li>Facebook App <i className="far fa-check-circle" /></li>
                      <li>eDM <i className="far fa-check-circle" /></li>
                      <li>IT Solution <i className="far fa-times-circle" /></li>
                      <li>IT Maintenance <i className="far fa-times-circle" /></li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-outline-dark" onClick={() => this.openModalsRequestsCreate('Basic Plan')}>Quote a Price</button>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Advance Plan</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">Services Included</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Website <i className="far fa-check-circle" /></li>
                      <li>Mobile App <i className="far fa-check-circle" /></li>
                      <li>Facebook App <i className="far fa-check-circle" /></li>
                      <li>eDM <i className="far fa-check-circle" /></li>
                      <li>IT Solution <i className="far fa-check-circle" /></li>
                      <li>IT Maintenance <i className="far fa-times-circle" /></li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-outline-dark" onClick={() => this.openModalsRequestsCreate('Advance Plan')}>Quote a Price</button>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">VIP Plan</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">Services Included</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Website <i className="far fa-check-circle" /></li>
                      <li>Mobile App <i className="far fa-check-circle" /></li>
                      <li>Facebook App <i className="far fa-check-circle" /></li>
                      <li>eDM <i className="far fa-check-circle" /></li>
                      <li>IT Solution <i className="far fa-check-circle" /></li>
                      <li>IT Maintenance <i className="far fa-check-circle" /></li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-outline-dark" onClick={() => this.openModalsRequestsCreate('VIP Plan')}>Quote a Price</button>
                  </div>
                </div>
              </div>

            </div>
          </main>
          {showModalsRequestsCreate && <ModalsRequestsCreate selectedPlan={selectedPlan} close={() => this.closeModalsRequestsCreate()} onSubmit={this.handleCreateSubmit} />}
        </div>
      </>
    )
  }
}

PagesPlan.propTypes = {
  history: PropTypes.shape().isRequired,
  createRequest: PropTypes.func.isRequired,
  stateCurrentUser: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  stateRequests: state.requests,
  stateCurrentUser: state.currentUser
})

const mapDispatchToProps = {
  createRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(PagesPlan)

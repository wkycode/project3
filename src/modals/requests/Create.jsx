import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import FormsRequestsCreate from '@/forms/requests/Create'

const ModalsRequestsCreate = ({ close, onSubmit, selectedPlan }) => (
  <Modal className="reveal-modal" show onHide={close}>
    <Modal.Header className="modal-title" closeButton>
      <Modal.Title>We will get back to you in 24H</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormsRequestsCreate
        initialValues={{
          plan: selectedPlan,
          template: '',
          note: ''
        }}
        onSubmit={onSubmit}
      />
    </Modal.Body>
  </Modal>
)
ModalsRequestsCreate.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  selectedPlan: PropTypes.string.isRequired
}

export default ModalsRequestsCreate

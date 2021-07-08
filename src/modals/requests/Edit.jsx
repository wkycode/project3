import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import FormsRequestsCreate from '@/forms/requests/Create'

const ModalsRequestsEdit = ({ close, onSubmit, request }) => (
  <Modal show onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Request{request.id}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormsRequestsCreate
        initialValues={request}
        onSubmit={onSubmit}
      />
    </Modal.Body>
  </Modal>
)
ModalsRequestsEdit.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  request: PropTypes.shape().isRequired
}

export default ModalsRequestsEdit

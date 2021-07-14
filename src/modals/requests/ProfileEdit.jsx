import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import FormMyProfileEdit from '@/forms/my/profile/Edit'

const ModalsRequestsProfileEdit = ({ close, onSubmit }) => (
  <Modal show onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Password</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormMyProfileEdit
        initialValues={{
          address: '',
          phone: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={onSubmit}
      />
    </Modal.Body>
  </Modal>
)
ModalsRequestsProfileEdit.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ModalsRequestsProfileEdit

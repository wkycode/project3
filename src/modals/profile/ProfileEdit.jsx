import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import FormMyProfileEdit from '@/forms/my/profile/Edit'

const ModalsRequestsProfileEdit = ({ close, onSubmit }) => (
  <Modal show onHide={close} centered>
    <Modal.Header className="profile-edit-header" closeButton>
      <Modal.Title className="profile-edit-title">Edit Information</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormMyProfileEdit
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

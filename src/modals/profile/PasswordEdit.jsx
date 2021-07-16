import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import FormMyProfilePasswordEdit from '@/forms/my/profile/PasswordEdit'

const ModalsRequestsPasswordEdit = ({ close, onSubmit }) => (
  <Modal show onHide={close} centered>
    <Modal.Header className="profile-edit-header" closeButton>
      <Modal.Title className="profile-edit-title">Edit Password</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormMyProfilePasswordEdit
        onSubmit={onSubmit}
      />
    </Modal.Body>
  </Modal>
)
ModalsRequestsPasswordEdit.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ModalsRequestsPasswordEdit

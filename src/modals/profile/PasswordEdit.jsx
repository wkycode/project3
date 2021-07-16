import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import FormMyProfilePasswordEdit from '@/forms/my/profile/PasswordEdit'

const ModalsRequestsPasswordEdit = ({ close, onSubmit }) => (
  <Modal className="passwordmodal" show onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Password</Modal.Title>
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

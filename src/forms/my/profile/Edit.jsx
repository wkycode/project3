import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="currentPassword">Current Password</label>
      <Field
        id="currentPassword"
        className={`form - control ${(errors.currentPassword && touched.currentPassword ? ' is-invalid' : '')}`}
        name="currentPassword"
        type="password"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="currentPassword" />
    </div>

    <div className="form-group">
      <label htmlFor="newPassword">New Password</label>
      <Field
        id="newPassword"
        className={`form - control ${(errors.newPassword && touched.newPassword ? ' is-invalid' : '')}`}
        name="newPassword"
        type="password"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="newPassword" />
    </div>

    <div className="form-group">
      <label htmlFor="passwordConfirmation">Confirmation</label>
      <Field
        id="passwordConfirmation"
        className={`form - control ${(errors.passwordConfirmation && touched.passwordConfirmation ? ' is-invalid' : '')}`}
        name="passwordConfirmation"
        type="password"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="passwordConfirmation" />
    </div>

    <div className="form-group">
      <label htmlFor="address">Address</label>
      <Field
        id="address"
        name="address"
        type="text"
      />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <Field
        id="phone"
        name="phone"
        type="number"
      />
    </div>

    <button className="btn btn-success" type="submit" disabled={isSubmitting}>Submit</button>
  </Form>
)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const editSchema = yup.object().shape({
  currentPassword: yup.string().required('Required'),
  newPassword: yup.string().min(6).required('Required'),
  passwordConfirmation: yup.string().when('newPassword', {
    is: (val) => (!!(val && val.length > 0)),
    then: yup.string().oneOf(
      [yup.ref('newPassword')],
      'Both password need to be the same'
    )
  })
})

const FormMyProfileEdit = ({ onSubmit }) => (
  <Formik
    initialValues={{
      currentPassword: '',
      newPassword: '',
      passwordConfirmation: '',
      address: '',
      phone: ''
    }}
    validationSchema={editSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormMyProfileEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormMyProfileEdit

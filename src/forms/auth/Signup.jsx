import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import bsCustomFileInput from 'bs-custom-file-input'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => {
  useEffect(() => {
    bsCustomFileInput.init()
  })

  return (
    <Form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <Field
          id="username"
          className={`form-control ${(errors.username && touched.username ? ' is-invalid' : '')}`}
          name="username"
          type="username"
        />
        <ErrorMessage component="div" className="invalid-feedback" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          className={`form-control ${(errors.email && touched.email ? ' is-invalid' : '')}`}
          name="email"
          type="email"
        />
        <ErrorMessage component="div" className="invalid-feedback" name="email" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field
          id="password"
          className={`form-control ${(errors.password && touched.password ? ' is-invalid' : '')}`}
          name="password"
          type="password"
        />
        <ErrorMessage component="div" className="invalid-feedback" name="password" />
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Confirmation</label>
        <Field
          id="passwordConfirmation"
          className={`form-control ${(errors.passwordConfirmation && touched.passwordConfirmation ? ' is-invalid' : '')}`}
          name="passwordConfirmation"
          type="password"
        />
        <ErrorMessage component="div" className="invalid-feedback" name="passwordConfirmation" />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <Field
          id="address"
          className={`form-control ${(errors.username && touched.username ? ' is-invalid' : '')}`}
          name="address"
          type="text"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <Field
          id="phone"
          className={`form-control ${(errors.username && touched.username ? ' is-invalid' : '')}`}
          name="phone"
          type="number"
        />
      </div>
      <div className="submit-btn d-flex justify-content-end mr-1">
        <button className="btn btn-outline-dark" type="submit" disabled={isSubmitting}><i className="fas fa-check" /></button>
      </div>
    </Form>
  )
}
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const signupSchema = yup.object().shape({
  username: yup.string().required('Required'),
  email: yup.string().email().required('Required'),
  password: yup.string().min(6).required('Required'),
  passwordConfirmation: yup.string().when('password', {
    is: (val) => (!!(val && val.length > 0)),
    then: yup.string().oneOf(
      [yup.ref('password')],
      'Both password need to be the same'
    )
  })
})

const FormsAuthSignup = ({ onSubmit }) => (
  <Formik
    initialValues={{
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }}
    validationSchema={signupSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsAuthSignup.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormsAuthSignup

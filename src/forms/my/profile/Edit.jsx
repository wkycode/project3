import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="address">Address</label>
      <Field
        id="address"
        className={`form-control ${(errors.address && touched.address ? ' is-invalid' : '')}`}
        name="address"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="address" />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <Field
        id="phone"
        className={`form-control ${(errors.phone && touched.phone ? ' is-invalid' : '')}`}
        name="phone"
        type="number"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="phone" />
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
  address: yup.string(),
  phone: yup.number()
})

const FormMyProfileEdit = ({ onSubmit, currentUser }) => (
  <Formik
    initialValues={currentUser}
    validationSchema={editSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormMyProfileEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps)(FormMyProfileEdit)

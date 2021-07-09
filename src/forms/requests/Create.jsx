import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <h5>Website Title</h5>
      <Field
        id="title"
        className={`form-control ${(errors.title && touched.title ? ' is-invalid' : '')}`}
        name="title"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="title" />
    </div>

    <div className="form-group">
      <h5>Plan</h5>
      <Field
        id="plan"
        className={`custom-select ${(errors.plan && touched.plan ? ' is-invalid' : '')}`}
        name="plan"
        as="select"
      >
        <option value="">Please select a plan...</option>
        <option value="Basic Plan">Basic Plan</option>
        <option value="Advance Plan">Advance Plan</option>
        <option value="VIP Plan">VIP Plan</option>
      </Field>
      <ErrorMessage component="div" className="invalid-feedback" name="plan" />
    </div>

    <div className="form-group">
      <h5>Style</h5>
      <Field
        id="template"
        className={`custom-select ${(errors.template && touched.template ? ' is-invalid' : '')}`}
        name="template"
        as="select"
      >
        <option value="">Please select a template...</option>
        <option value="Design A">Design A</option>
        <option value="Design B">Design B</option>
        <option value="Design C">Design C</option>
        <option value="Design D">Design D</option>
      </Field>
      <ErrorMessage component="div" className="invalid-feedback" name="template" />
    </div>

    <div className="form-group">
      <h5>Note</h5>
      <Field
        id="note"
        className={`form-control ${(errors.note && touched.note ? ' is-invalid' : '')}`}
        name="note"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="note" />
    </div>

    <button className="btn btn-outline-dark" type="submit" disabled={isSubmitting}>Submit</button>

  </Form>
)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const requestsChangeSchema = yup.object().shape({
  plan: yup.string().required('Required'),
  template: yup.string().required('Required'),
  note: yup.string().required('Required')
})

const FormsRequestsCreate = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={requestsChangeSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsRequestsCreate.propTypes = {
  initialValues: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default FormsRequestsCreate

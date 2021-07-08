import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_REQUESTS = 'SET_REQUESTS'
export const setRequests = (payload) => ({ type: SET_REQUESTS, payload })

export const SET_REQUEST = 'SET_REQUEST'
export const setRequest = (payload) => ({ type: SET_REQUEST, payload })

export const EDIT_REQUEST_IN_REQUESTS = 'EDIT_REQUEST_IN_REQUESTS'
export const editRequestInRequests = (payload) => ({ type: EDIT_REQUEST_IN_REQUESTS, payload })

export const REMOVE_REQUEST_IN_REQUESTS = 'REMOVE_REQUEST_IN_REQUESTS'
export const removeRequestInRequests = (payload) => ({ type: REMOVE_REQUEST_IN_REQUESTS, payload })

export const UNSET_REQUESTS = 'UNSET_REQUESTS'
export const unsetRequests = () => ({ type: UNSET_REQUESTS })

export const UNSET_REQUEST = 'UNSET_REQUEST'
export const unsetRequest = () => ({ type: UNSET_REQUEST })

export const GET_REQUESTS = 'GET_REQUESTS'
export const getRequests = () => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(GET_REQUESTS, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/my/requests',
    withCredentials: true
  }).then((resp) => {
    dispatch(setRequests(resp.data))
    resolve(resp)
  }).catch(() => {
    reject()
  }).finally(() => {
    dispatch(loading(GET_REQUESTS, { loading: false }))
  })
})

export const CREATE_REQUEST = 'CREATE_REQUEST'
export const createRequest = (values) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_REQUEST, { loading: true }))
  axios({
    method: 'POST',
    url: 'http://localhost:3000/api/my/requests',
    data: values,
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_REQUEST, { loading: false }))
  })
})

export const GET_REQUEST = 'GET_REQUEST'
export const getRequest = (RequestId) => (dispatch) => {
  dispatch(loading(GET_REQUEST, { loading: true }))
  axios({
    method: 'GET',
    url: `http://localhost:3000/api/my/requests/${RequestId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(setRequest(resp.data))
  }).catch(() => {
    dispatch(setRequest(null))
  }).finally(() => {
    dispatch(loading(GET_REQUEST, { loading: false }))
  })
}

export const UPDATE_REQUEST = 'UPDATE_REQUEST'
export const updateRequest = (values, RequestId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_REQUEST, { loading: true }))
  axios({
    method: 'PUT',
    url: `http://localhost:3000/api/my/requests/${RequestId}`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(editRequestInRequests(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(UPDATE_REQUEST, { loading: false }))
  })
})

export const DESTROY_REQUEST = 'DESTROY_REQUEST'
export const destroyRequest = (RequestId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(DESTROY_REQUEST, { loading: true, id: RequestId }))
  axios({
    method: 'DELETE',
    url: `http://localhost:3000/api/my/requests/${RequestId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(removeRequestInRequests(RequestId))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(DESTROY_REQUEST, { loading: false, id: RequestId }))
  })
})

export const resetRequests = () => (dispatch) => {
  dispatch(unsetRequests())
}

export const resetRequest = () => (dispatch) => {
  dispatch(unsetRequest())
}

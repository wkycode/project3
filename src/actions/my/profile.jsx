import axios from 'axios'
import { loading } from '@/actions/loading'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const setCurrentUser = (payload) => ({ type: SET_CURRENT_USER, payload })

export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER'
export const unsetCurrentUser = () => ({ type: UNSET_CURRENT_USER })

export const getCurrentUser = () => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/my/profile',
    withCredentials: true
  }).then((resp) => {
    dispatch(setCurrentUser(resp.data))
    resolve()
  }).catch(() => {
    dispatch(setCurrentUser({ user: null }))
    reject()
  })
})

export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'
export const updateCurrentUser = (values) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_CURRENT_USER, { loading: true }))
  axios({
    method: 'PUT',
    url: 'http://localhost:3000/api/my/profile',
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(setCurrentUser(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    loading(UPDATE_CURRENT_USER, { loading: false })
  })
})

import axios from 'axios'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const setCurrentUser = (payload) => ({ type: SET_CURRENT_USER, payload })

export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER'
export const unsetCurrentUser = () => ({ type: UNSET_CURRENT_USER })

export const getCurrentUser = () => (dispatch) => {
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/my/profile',
    withCredentials: true
  }).then((resp) => {
    dispatch(setCurrentUser(resp.data))
  }).catch(() => {
    dispatch(setCurrentUser({ user: null }))
  })
}

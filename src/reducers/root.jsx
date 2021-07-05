import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'

const createReducersRoot = (history) => combineReducers({
  router: connectRouter(history),
  currentUser: ReducersCurrentUser
})

export default createReducersRoot

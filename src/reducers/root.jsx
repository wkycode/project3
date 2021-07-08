import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'
import ReducersRequests from '@/reducers/requests'

const createReducersRoot = (history) => combineReducers({
  router: connectRouter(history),
  currentUser: ReducersCurrentUser,
  requests: ReducersRequests
})

export default createReducersRoot

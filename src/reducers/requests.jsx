import produce from 'immer'

import {
  SET_REQUESTS,
  UNSET_REQUESTS,
  EDIT_REQUEST_IN_REQUESTS,
  REMOVE_REQUEST_IN_REQUESTS,
  GET_REQUESTS,
  DESTROY_REQUEST
} from '@/actions/requests'

const initialState = {
  meta: null,
  requests: [],
  isGetRequestsLoading: false,
  destroyingIDs: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUESTS: {
      return produce(state, (draft) => {
        draft.meta = action.payload.meta
        draft.requests = action.payload.requests
      })
    }
    case UNSET_REQUESTS: {
      return produce(state, (draft) => {
        draft.meta = null
        draft.requests = []
      })
    }
    case EDIT_REQUEST_IN_REQUESTS: {
      return produce(state, (draft) => {
        const index = draft.requests.findIndex((request) => request.id === action.payload.request.id)
        if (index !== -1) draft.requests[index] = action.payload.request
      })
    }
    case REMOVE_REQUEST_IN_REQUESTS: {
      return produce(state, (draft) => {
        const index = draft.requests.findIndex((request) => request.id === action.payload)
        if (index !== -1) draft.requests.splice(index, 1)
      })
    }
    case GET_REQUESTS: {
      return produce(state, (draft) => {
        draft.isGetRequestsLoading = action.payload.loading
      })
    }
    case DESTROY_REQUEST: {
      return produce(state, (draft) => {
        if (action.payload.loading) {
          draft.destroyingIDs.push(action.payload.id)
        } else {
          const index = draft.destroyingIDs.indexOf(action.payload.id)
          if (index !== -1) draft.destroyingIDs.splice(index, 1)
        }
      })
    }
    default: {
      return state
    }
  }
}

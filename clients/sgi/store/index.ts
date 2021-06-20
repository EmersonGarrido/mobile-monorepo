import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const INITIAL_STATE = {
  internal: {},
  report: [
    {
      itens_seguranca: []
    }
  ]
}

function reducer (state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_INTERNAL') {
    return {
      ...state,
      internal: action.areaInterna
    }
  }

  return state
}

const store = createStore(reducer, composeWithDevTools())

export default store

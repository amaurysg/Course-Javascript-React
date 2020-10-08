const createStore = (reducer, inicialState) => {
  let state = inicialState
  let updater = () => { }
  const getState = () => {
    return state
  }
  const dispatch = (action) => {
    state = reducer(state, action)
    updater()
  }
  const subscribe = (listener) => {
    updater = listener
  }
  return {
    getState,
    dispatch,
    subscribe
  }

}
const createStoreRest = (reducer, inicialState) => {
  let state = inicialState
  let updater = () => { }
  const getState = () => {
    return state
  }
  const dispatch = (action) => {
    state = reducer(state, action)
    updater()
  }
  const subscribe = (listener) => {
    updater = listener
  }
  return {
    getState,
    dispatch,
    subscribe
  }

}

function combineReducers() {

}

/* export default createStore
export default createStoreRest */

export {
  createStore,
  createStoreRest,
  combineReducers,

}

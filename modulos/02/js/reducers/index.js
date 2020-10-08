import { BURN } from "../actions/index.js"
import { REST } from "../actions/index.js"

const reducer = (state, action) => {

  switch (action.type) {
    case "BURN":
      return state + 1.42

    case "REST":
      return state - 1

    default:
      return state

  }

}

export default reducer
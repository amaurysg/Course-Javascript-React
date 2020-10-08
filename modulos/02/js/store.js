
import { createStore } from './redux/index.js'
import { createStoreRest } from './redux/index.js'
import reducer from './reducers/index.js'

const store = createStore(reducer, 0)
const storeRest = createStoreRest(reducer, 1360563)

export { store }
export { storeRest }


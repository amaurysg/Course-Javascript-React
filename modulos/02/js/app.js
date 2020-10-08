
import { store } from "./store.js"
import { storeRest } from "./store.js"
import { BURN } from "./actions/index.js"
import { REST } from "./actions/index.js"



store.subscribe(() => {

  window.result.textContent = `Haz quemado ${store.getState()} 🔥 Calorías `

})

storeRest.subscribe(() => {
  window.resultRest.textContent = `Faltan ${storeRest.getState()} Clicks, para quemar las 🔥 de una 🍕`
})

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42

  })

}
const rest = () => {
  console.log("Button function")
  storeRest.dispatch({
    type: REST,
    payload: 1

  })

}

window.burn.addEventListener("click", burn)
window.faltan.addEventListener("click", rest)
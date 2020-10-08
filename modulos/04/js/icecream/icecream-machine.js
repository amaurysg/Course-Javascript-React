
import { isRequired } from "./validation.js"

function makeIceCream(flavor1 = isRequired("flavor1"), flavor2 = isRequired("flavor2")) {
  // console.log(flavor1)

  alert(`tienes un rico helado de ${flavor1.dataset.flavor} y ${flavor2.dataset.flavor}`)
}

export {
  makeIceCream
}



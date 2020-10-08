import { makeIceCream } from "./icecream-machine.js"


const $flavors = document.querySelectorAll(".flavor")
$flavors.forEach($el => $el.addEventListener("click", selectFlavor))
function selectFlavor() {
  this.classList.toggle("is-active")
}



window.btn.addEventListener("click", () => {
  const $flavors = document.querySelectorAll(".flavor.is-active")
  console.log($flavors)
  try {
    makeIceCream($flavors[0], $flavors[1])

  } catch (error) {
    alert("Aún no completas ")
  }

})

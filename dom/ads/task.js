const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"))

let rotatorNumber = 0

function rotatorCaseClass() {
  if (rotatorNumber == rotatorCase.length - 1) {
    rotatorNumber = 0
    rotatorCase[rotatorCase.length - 1].classList.remove("rotator__case_active")
    rotatorCase[rotatorNumber].classList.add("rotator__case_active")
  } else {
    rotatorCase[rotatorNumber].classList.remove("rotator__case_active")
    rotatorCase[rotatorNumber + 1].classList.add("rotator__case_active")
    rotatorNumber++
  }
}

setInterval(rotatorCaseClass, 1000)

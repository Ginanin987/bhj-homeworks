const sliderPrew = document.querySelector(".slider__arrow_prev")
const sliderNext = document.querySelector(".slider__arrow_next")
const sliders = document.querySelectorAll(".slider__item")

let sliderNumber = 0

sliderNext.onclick = function () {
  if (sliderNumber == sliders.length - 1) {
    sliderNumber = -1
    sliders.forEach((element) =>
      element.classList.remove("slider__item_active")
    )
  }
  sliders[sliderNumber + 1].classList.add("slider__item_active")
  sliderNumber++
}

sliderPrew.onclick = function () {
  if (sliderNumber == 0) {
    sliderNumber = sliders.length - 1
    sliders[sliderNumber].classList.add("slider__item_active")
    sliders.forEach((element) => {
      element.classList.remove("slider__item_active")
    })
    sliders[0].classList.remove("slider__item_active")
  } else {
    sliders[sliderNumber + 1].classList.remove("slider__item_active")
  }
  sliders[sliderNumber].classList.add("slider__item_active")
  sliderNumber--
}

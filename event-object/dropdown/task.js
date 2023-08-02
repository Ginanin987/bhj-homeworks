const dropdownList = document.querySelectorAll(".dropdown__list")
const dropdownValue = document.querySelectorAll(".dropdown__value")
const dropdownLink = document.querySelectorAll(".dropdown__link")

dropdownValue.forEach((element) =>
  element.addEventListener("click", dropdownValueOnclick)
)

function dropdownValueOnclick() {
  dropdownList.forEach((element) => {
    if (element.classList.contains("dropdown__list_active")) {
      dropdownList.forEach((element) =>
        element.classList.remove("dropdown__list_active")
      )
    } else {
      dropdownList.forEach((element) =>
        element.classList.add("dropdown__list_active")
      )
    }
  })
}

dropdownLink.forEach((element) => {
  element.onclick = function () {
    let closest_value = element.closest("div")
    closest_value.querySelector("div").textContent = element.textContent
    dropdownList.forEach((element) =>
      element.classList.remove("dropdown__list_active")
    )
    return false
  }
})

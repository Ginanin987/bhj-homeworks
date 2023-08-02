const tab = Array.from(document.querySelectorAll(".tab"))
const tabContent = Array.from(document.querySelectorAll(".tab__content"))

console.log(tab)

tab.forEach((element) => {
  element.onclick = function () {
    let IndexOfElement = tab.indexOf(element)
    checkIfActive()
    if (element.classList.contains("tab_active")) {
      element.classList.remove("tab_active")
      tabContent[IndexOfElement].classList.remove("tab__content_active")
    } else {
      element.classList.add("tab_active")
      tabContent[IndexOfElement].classList.add("tab__content_active")
    }
  }
})

function checkIfActive() {
  let activeIndex = null
  tab.forEach((element) => {
    if (element.classList.contains("tab_active")) {
      activeIndex = tab.indexOf(element)
    }
  })
  if (!isNaN(activeIndex)) {
    tab[activeIndex].classList.remove("tab_active")
    tabContent[activeIndex].classList.remove("tab__content_active")
  }
}

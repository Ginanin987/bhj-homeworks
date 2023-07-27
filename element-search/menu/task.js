const menuLinks = document.querySelectorAll(".menu__link")

console.log(menuLinks)

menuLinks.forEach(
  (element) =>
    (element.onclick = function () {
      let list = element.closest("li")
      if (list.querySelector("ul")) {
        list.querySelector("ul").classList.add("menu_active")
        return false
      }
    })
)

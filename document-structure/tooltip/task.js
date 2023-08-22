{
  /* <div class="tooltip">
      Проверка!
    </div> */
}

const tooltip = document.querySelectorAll(".has-tooltip")

tooltip.forEach(
  (element) =>
    (element.onclick = function () {
      element.insertAdjacentHTML(
        "beforeend",
        `<div class="tooltip">
        ${element.title}
        </div>
          `
      )
      if (
        element.querySelector(".tooltip").classList.contains("tooltip_active")
      ) {
        element.querySelector(".tooltip").classList.remove("tooltip_active")
      } else {
        element.querySelector(".tooltip").classList.add("tooltip_active")
      }

      return false
    })
)

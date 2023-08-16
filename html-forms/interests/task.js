const checkbox = Array.from(document.querySelectorAll(".interest__check"))

// element.checked = false

checkbox.forEach(
  (element) =>
    (element.onchange = function () {
      let list = Array.from(
        element.closest("li").querySelectorAll(".interest__check")
      )
      if (element.checked) {
        list.forEach((element) => {
          element.checked = true
        })
      } else {
        list.forEach((element) => {
          element.checked = false
        })
      }
    })
)

const textarea = document.querySelector("#editor")
const text = localStorage.getItem("text", textarea.value)

if (text) {
  textarea.value = text
}

document.addEventListener("keyup", () => {
  localStorage.setItem("text", textarea.value)
})

document.querySelector("#delete").onclick = function () {
  localStorage.removeItem("text")
  textarea.value = ""
}

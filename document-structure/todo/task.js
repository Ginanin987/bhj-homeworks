const input = document.querySelector("#task__input")
const button = document.querySelector("#tasks__add")
const tasks = document.querySelector("#tasks__list")

function addTask() {
  if (input.value.trim()) {
    tasks.innerHTML += `
  <div class="task">
    <div class="task__title">
    ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>
  `
    input.value = ""
  }
}

button.onclick = function () {
  addTask()
  return false
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask()
  }
})

tasks.onclick = function (event) {
  let link = event.target
  if (link.tagName != "A") return
  tasks.removeChild(link.closest(".task"))
}

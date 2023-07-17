const timer = function () {
  const counter = document.getElementById("timer")
  counter.textContent--
  if (counter.textContent == 0) {
    alert("Вы победили в конкурсе")
    clearInterval(interval)
  }
}

const interval = setInterval(timer, 1000)

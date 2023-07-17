for (let index = 1; index < 10; index++) {
  hole = (index) => document.getElementById(`hole${index}`)
  hole(index).onclick = function () {
    if (hole(index).classList.contains("hole_has-mole")) {
      document.getElementById("dead").textContent++
    } else {
      document.getElementById("lost").textContent++
    }

    if (document.getElementById("dead").textContent == 10) {
      alert("Победа!")
      document.getElementById("dead").textContent = 0
      document.getElementById("lost").textContent = 0
    }

    if (document.getElementById("lost").textContent == 5) {
      alert("Вы проиграли!")
      document.getElementById("dead").textContent = 0
      document.getElementById("lost").textContent = 0
    }
  }
}

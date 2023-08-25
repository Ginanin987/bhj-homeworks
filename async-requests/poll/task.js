const xhr = new XMLHttpRequest()

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    let poll = xhr.response

    document.querySelector("#poll__title").textContent = poll.data.title

    poll.data.answers.forEach((element) => {
      document.querySelector("#poll__answers").innerHTML += `
            <button class="poll__answer">
                ${element}
            </button>
        `
      document.querySelectorAll(".poll__answer").forEach(
        (element) =>
          (element.onclick = function () {
            alert("Спасибо, ваш голос засчитан!")
          })
      )
    })
  }
})

xhr.open("GET", " https://students.netoservices.ru/nestjs-backend/poll")

xhr.responseType = "json"

xhr.send()

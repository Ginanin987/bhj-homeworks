const form = document.querySelector("#form")
const progress = document.querySelector("#progress")

form.addEventListener("submit", function (event) {
  event.preventDefault()
  const formSent = new FormData(form)
  const xhr = new XMLHttpRequest()

  xhr.upload.onprogress = function (event) {
    const progress = document.getElementById("progress")
    progress.value = event.loaded / event.total
  }

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")
  let response = xhr.response
  xhr.responseType = "json"
  xhr.send(formSent)
})

const form = document.querySelector("#form")
const progress = document.querySelector("#progress")

form.addEventListener("submit", function () {
  const formSent = new FormData(form)
  const xhr = new XMLHttpRequest()

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")
  let response = xhr.response
  xhr.responseType = "json"
  xhr.send(formSent)
})

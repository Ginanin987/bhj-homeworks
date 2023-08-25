const form = document.querySelector("#signin__form")
const signinBtn = document.querySelector("#signin__btn")
const xhr = new XMLHttpRequest()

form.addEventListener("submit", function (event) {
  event.preventDefault()
  const formSent = new FormData(form)
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth")
  xhr.responseType = "json"
  xhr.send(formSent)
})

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    let signin = xhr.response

    if (signin.success) {
      document.querySelector("#signin").classList.remove("signin_active")
      document.querySelector("#welcome").classList.add("welcome_active")
      document.querySelector("#user_id").textContent = signin.user_id
    } else {
      console.log(signin)
      alert("Неверный логин или пароль!")
    }
  }
})

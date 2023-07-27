document.getElementById("modal_main").classList.add("modal_active")

const modalClose = Array.from(document.getElementsByClassName("modal__close"))

modalClose.forEach(
  (element) =>
    (element.onclick = function () {
      document.getElementById("modal_main").classList.remove("modal_active")
      document.getElementById("modal_success").classList.remove("modal_active")
    })
)

const success = document.querySelector(".show-success")

success.onclick = function () {
  const modalSuccess = document.getElementById("modal_success")
  modalSuccess.classList.add("modal_active")
}

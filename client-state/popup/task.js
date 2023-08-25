let closePopup = document.cookie.match(/closePopup=(.+?)(;|$)/)

if (!closePopup || closePopup[1] == false) {
  document.querySelector("#subscribe-modal").classList.add("modal_active")
  document.querySelector(".modal__close").onclick = function () {
    document.querySelector("#subscribe-modal").classList.remove("modal_active")
    document.cookie = "closePopup=true"
  }
}

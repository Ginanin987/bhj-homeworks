const chatWidget = document.querySelector(".chat-widget")
const messages = document.querySelector(".chat-widget__messages")
const input = document.querySelector("#chat-widget__input")
const botMessageCloud = [
  "Да?",
  "Думай о бесконечном вечном",
  "Ты кому звонишь?",
]

chatWidget.onclick = function () {
  chatWidget.classList.add("chat-widget_active")
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && input.value) {
    let date = new Date()
    let hours = date.getHours()
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    console.log(input.value)
    messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">
            ${input.value}    
        </div>
    </div>
    `
    input.value = ""
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">
            ${
              botMessageCloud[
                Math.floor(Math.random() * botMessageCloud.length)
              ]
            }  
        </div>
    </div>
    `
  }
})

const xhr = new XMLHttpRequest()

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    document.querySelector("#loader").classList.remove("loader_active")

    let items = xhr.response

    for (let key in items.response.Valute) {
      document.querySelector("#items").innerHTML += `
        <div class="item">
            <div class="item__code">
                ${items.response.Valute[key].CharCode}
            </div>
            <div class="item__value">
            ${items.response.Valute[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
      `
    }
  }
})

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
)

xhr.responseType = "json"

xhr.send()

const quantityInc = Array.from(
  document.querySelectorAll(".product__quantity-control_inc")
)
const quantityDec = Array.from(
  document.querySelectorAll(".product__quantity-control_dec")
)
const productAdd = Array.from(document.querySelectorAll(".product__add"))
const cartProducts = document.querySelector(".cart__products")

quantityInc.forEach(
  (element) =>
    (element.onclick = function () {
      element
        .closest(".product__quantity-controls")
        .querySelector(".product__quantity-value").textContent++
    })
)

quantityDec.forEach(
  (element) =>
    (element.onclick = function () {
      if (
        element
          .closest(".product__quantity-controls")
          .querySelector(".product__quantity-value").textContent == 1
      ) {
        element
          .closest(".product__quantity-controls")
          .querySelector(".product__quantity-value").textContent = 1
      } else {
        element
          .closest(".product__quantity-controls")
          .querySelector(".product__quantity-value").textContent--
      }
    })
)

productAdd.forEach(
  (element) =>
    (element.onclick = function () {
      //   console.log(element.closest(".product").dataset.id)
      let existedProducts = Array.from(
        cartProducts.querySelectorAll(".cart__product")
      )

      let existedProductIds = existedProducts.map((id) => {
        return id.dataset.id
      })

      if (existedProductIds.includes(element.closest(".product").dataset.id)) {
        let foundedProduct = existedProducts
          .find((product) => {
            return product.dataset.id == element.closest(".product").dataset.id
          })
          .querySelector(".cart__product-count")
        let sum =
          Number(
            element
              .closest(".product")
              .querySelector(".product__quantity-value").textContent
          ) + Number(foundedProduct.textContent)
        foundedProduct.textContent = sum
      } else {
        cartProducts.innerHTML += `
        <div class="cart__product" data-id="${
          element.closest(".product").dataset.id
        }">
        <img class="cart__product-image" src="${
          element.closest(".product").querySelector("img").src
        }">
        <div class="cart__product-count">${
          element.closest(".product").querySelector(".product__quantity-value")
            .textContent
        }</div>
    `
      }
    })
)

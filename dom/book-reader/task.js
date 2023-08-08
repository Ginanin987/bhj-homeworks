const fontSize = Array.from(document.querySelectorAll(".font-size"))
const book = document.querySelector(".book")

function changeActiveSize(size) {
  fontSize.forEach((element) => element.classList.remove("font-size_active"))
  size.classList.add("font-size_active")
  return false
}

fontSize[0].onclick = function () {
  book.classList.remove("book_fs-big")
  book.classList.add("book_fs-small")
  return changeActiveSize(fontSize[0])
}

fontSize[1].onclick = function () {
  book.classList.remove("book_fs-big")
  book.classList.remove("book_fs-small")
  return changeActiveSize(fontSize[1])
}

fontSize[2].onclick = function () {
  book.classList.remove("book_fs-small")
  book.classList.add("book_fs-big")
  return changeActiveSize(fontSize[2])
}

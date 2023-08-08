window.addEventListener("scroll", function () {
  const viewportHeight = window.innerHeight
  const elementTop = document
    .querySelector(".reveal")
    .getBoundingClientRect().top
  const elementBottom = document
    .querySelector(".reveal")
    .getBoundingClientRect().bottom

  if (elementTop < viewportHeight) {
    document.querySelector(".reveal").classList.add("reveal_active")
  }

  if (elementBottom < 0 || elementTop > viewportHeight) {
    document.querySelector(".reveal").classList.remove("reveal_active")
  }
})

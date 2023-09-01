const reveal = document.querySelector(".reveal");

function isVisible() {
  const { bottom } = reveal.getBoundingClientRect();

  if (bottom > 0) {
    reveal.classList.add("reveal_active");
  }
}
window.addEventListener("scroll", isVisible);

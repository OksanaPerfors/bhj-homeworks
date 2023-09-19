const reveals = document.querySelectorAll(".reveal");

function isVisible() {
  reveals.forEach((reveal) => {
    const { top, bottom } = reveal.getBoundingClientRect();

    if (top < window.innerHeight && bottom > 0) {
      reveal.classList.add("reveal_active");
    }
  });
}

window.addEventListener("scroll", isVisible);

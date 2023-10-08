const modal = document.querySelector("#subscribe-modal");
const closePopupBtn = document.querySelector(".modal__close");

window.addEventListener("scroll", () => {
  if (document.cookie !== "closed") {
    modal.classList.add("modal_active");
  }
});

closePopupBtn.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "closed";
});

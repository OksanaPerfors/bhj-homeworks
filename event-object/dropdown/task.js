const items = document.querySelectorAll(".dropdown__item");
const values = document.querySelectorAll(".dropdown__value");

values.forEach((value) => value.addEventListener("click", open));

function open(event) {
  const list = event.currentTarget.nextElementSibling;
  list.classList.add("dropdown__list_active");
}

items.forEach((element) => {
  element.addEventListener("click", choose);
});

function choose(event) {
  const div = event.currentTarget.parentElement.parentElement;
  const value = div.querySelector(".dropdown__value");
  const list = event.currentTarget.parentElement;
  const text = event.currentTarget.textContent;
  event.preventDefault();

  list.classList.remove("dropdown__list_active");
  value.textContent = text;
}

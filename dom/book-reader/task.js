const buttons = document.querySelectorAll(".font-size");
const book = document.querySelector("#book");

function clearAllButtons() {
  buttons.forEach((button) => button.classList.remove("font-size_active"));
}

function onButtonClick(e, buttonType) {
  e.preventDefault(); // отменяем переход по ссылке
  clearAllButtons();
  e.target.classList.add("font-size_active");
  book.className = "book";

  if (buttonType === "маленькая") {
    book.classList.add("book_fs-small");
  } else if (buttonType === "большая") {
    book.classList.add("book_fs-big");
  }
}

// function onSmallClick(e) {
//     e.preventDefault(); // отменяем переход по ссылке
//     clearAllButtons();
//     e.target.classList.add("font-size_active");
//     book.className = "book";
//     book.classList.add("book_fs-small");
// }

// function onMiddleClick(e) {
//     e.preventDefault(); // отменяем переход по ссылке
//     clearAllButtons();
//     e.target.classList.add("font-size_active");
//     book.className = "book";
// }

// function onBigClick(e) {
//     e.preventDefault(); // отменяем переход по ссылке
//     clearAllButtons();
//     e.target.classList.add("font-size_active");
//     book.className = "book";
//     book.classList.add("book_fs-big");
// }

buttons.forEach((button) => {
  if (!button.attributes["data-size"]) {
    button.addEventListener("click", (e) => onButtonClick(e, "средняя"));
    return;
  }
  const isSmall = button.attributes["data-size"].value === "small";
  if (isSmall) {
    button.addEventListener("click", (e) => onButtonClick(e, "маленькая"));
    return;
  }
  button.addEventListener("click", (e) => onButtonClick(e, "большая"));
});

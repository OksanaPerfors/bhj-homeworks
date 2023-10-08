const textarea = document.querySelector("#editor");

const textFromLocalStorage = localStorage.getItem("text");

if (textFromLocalStorage) {
  textarea.value = textFromLocalStorage;
}

textarea.addEventListener("input", () => {
  const text = textarea.value;
  localStorage.setItem("text", text);
});

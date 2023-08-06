const element = document.getElementById("clicker__counter");
let start = Number(element.textContent);
const image = document.getElementById("cookie");

function changeSize() {
  start += 1;
  element.textContent = start;
  if (start % 2 === 0) {
    image.width = 200;
  } else {
    image.width = 150;
  }
}

image.onclick = changeSize;

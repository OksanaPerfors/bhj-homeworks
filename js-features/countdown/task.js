const element = document.getElementById("timer");
let seconds = Number(element.textContent);

const timerId = setInterval(() => {
  seconds -= 1;
  element.textContent = seconds;
  if (seconds === 0) {
    clearInterval(timerId);
    alert("Вы победили в конкурсе!");
  }
}, 1000);

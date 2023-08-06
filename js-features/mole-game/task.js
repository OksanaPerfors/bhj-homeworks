const dead = document.querySelector("#dead");
const lost = document.querySelector("#lost");
const holes = document.querySelectorAll(".hole");

let deadCount = Number(dead.textContent);
let lostCount = Number(lost.textContent);

function reset() {
  deadCount = 0;
  dead.textContent = 0;
  lostCount = 0;
  lost.textContent = 0;
}

holes.forEach((element) => {
  element.onclick = (event) => {
    if (event.target.classList.contains("hole_has-mole")) {
      deadCount += 1;
      dead.textContent = deadCount;
    } else {
      lostCount += 1;
      lost.textContent = lostCount;
    }

    if (deadCount === 10) {
      console.log("Вы победили!");
      reset();
    }

    if (lostCount === 5) {
      console.log("Вы проиграли!");
      reset();
    }
  };
});

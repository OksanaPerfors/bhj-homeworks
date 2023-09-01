const rotator = document.querySelector(".rotator");

const rotatorCases = document.querySelectorAll(".rotatorcase");

function clearAllCases() {
  rotatorCases.forEach((rotatorCase) =>
    rotatorCase.classList.remove("rotatorcase_active")
  );
}

setInterval(() => {
  clearAllCases();
  const rotatorCase = getCurrentCase();
  rotatorCase.classList.add("rotator__case_active");
}, 1000);

let currentIndex = 0;
const maxCaseIndex = rotatorCases.length;

function getCurrentCase() {
  if (currentIndex === maxCaseIndex) {
    currentIndex = 0;
  }
  const temp = rotatorCases[currentIndex];
  currentIndex += 1;
  return temp;
}

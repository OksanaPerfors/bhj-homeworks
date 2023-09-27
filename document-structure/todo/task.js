const input = document.querySelector(".tasks__input");
const tasksList = document.querySelector(".tasks__list");
const tasksAdd = document.querySelector(".tasks__add");
tasksAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;
  if (text !== "") {
    input.value = "";
    renderTask(text);
  }
});
function renderTask(taskText) {
  const task = createHtmlTask(taskText);
  tasksList.appendChild(task);
}
function createHtmlTask(taskText) {
  const a = document.createElement("a");
  a.href = "#";
  a.classList.add("task__remove");
  a.textContent = "X";
  a.addEventListener("click", () => {
    tasksList.removeChild(task);
  });
  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task__title");
  taskTitle.textContent = taskText;
  const task = document.createElement("div");
  task.classList.add("task");
  task.appendChild(taskTitle);
  task.appendChild(a);
  return task;
}

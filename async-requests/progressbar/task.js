const progress = document.getElementById("progress");
const send = document.getElementById("send");
const fileInput = document.getElementById("file");
const form = document.getElementById("form");

let xhr = new XMLHttpRequest();
xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

xhr.addEventListener("progress", (e) => {
  if (e.lengthComputable) {
    progress.value = e.loaded / e.total;
  }
});

xhr.addEventListener("load", () => {
  console.log("Загрузка завершена");
});

send.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  xhr.send(formData);
});

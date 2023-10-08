const form = document.querySelector("#signin__form");
const sendButton = document.querySelector("#signin__btn");
const modal = document.querySelector("#signin");
const welcome = document.querySelector("#welcome");
const userIdText = document.querySelector("#user_id");

const userId = localStorage.getItem("userId");

if (userId) {
  login(true, userId);
}

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://students.netoservices.ru/nestjs-backend/auth",
    true
  );

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.response);
    login(response.success, response.user_id);
  });

  const formData = new FormData(form);
  xhr.send(formData);
});

function login(success, userId) {
  if (success) {
    localStorage.setItem("userId", userId);
    modal.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
    userIdText.textContent = userId;
  } else {
    alert("Неверный логин / пароль");
  }
}

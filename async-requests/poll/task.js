const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.onloadend = onFinal;
xhr.send();

function onFinal() {
  const poll = document.querySelector(".poll");
  const element = createElement(JSON.parse(xhr.response));
  poll.innerHTML = element;
}

function createElement(response) {
  return `
        <div class="poll" onclick="alert('Спасибо, ваш голос засчитан!')">
            <div class="poll__title" id="poll__title">
                ${response.data.title}
            </div>
            <div class="poll__answers poll__answers_active" id="poll__answers">
            ${response.data.answers.map(
              (answer) => `
                    <button class="poll__answer">
                        ${answer}
                    </button>
                `
            )}
            </div>
        </div>
    `;
}

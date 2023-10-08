const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.onloadend = () => {
  const loader = document.querySelector("#loader");
  loader.classList.remove("loader_active");
  const list = createElement(JSON.parse(xhr.response));
  const items = document.querySelector("#items");
  items.innerHTML = list;
};

function createElement(response) {
  const obj = response.response.Valute;
  const objects = Object.keys(obj).map((key) => {
    const result = {
      CharCode: obj[key].CharCode,
      Value: obj[key].Value,
    };
    return result;
  });
  return objects
    .map((e) => {
      return `<div class="item">
      <div class="item__code">
    ${e.CharCode}
</div>
<div class="item__value">
    ${e.Value}
</div>
<div class="item__currency">
    руб.
</div>
</div>`;
    })
    .join("");
}

xhr.send();

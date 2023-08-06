const element = document.getElementById("timer"); //получаем нужный нам HTML объект
let seconds = Number(number.textContent); // преобразовываем его к тексту, а потом к числу

const timerId = setInterval(() => {
  //сохраняем функцию интервала в константу
  seconds -= 1; // уменьшаем наше число на 1 и перепримваеваем значение
  number.textContent = seconds; // присваиваем HTML новое полученное значение
  if (seconds === 0) {
    // проверка вывод и остановка таймера
    clearInterval(timerId);
    alert("Вы победили в конкурсе!");
  }
}, 1000);

// В какой момент происходит вызов функции таймера, если мы просто сокранили её в константу, но не вызывали?

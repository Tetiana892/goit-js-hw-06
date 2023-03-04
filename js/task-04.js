// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const wrap_button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value")
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById("value").textContent = counterValue;
};
wrap_button.sub.addEventListener("click", increment);
wrap_button.add.addEventListener("click", decrement);

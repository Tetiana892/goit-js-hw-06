// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`);

let fontSizeEl = 0;
const onInputElchange = (event) => {
  fontSizeEl = Number(event.currentTarget.value);
  //   console.log(fontSizeEl);
  spanEl.style.fontSize = `${fontSizeEl}px`;
};
inputEl.addEventListener(`input`, onInputElchange);

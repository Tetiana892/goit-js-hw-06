// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

const textInput = document.querySelector(`#name-input`);

const nameLabel = document.querySelector(`#name-output`);

textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameLabel.textContent = event.currentTarget.value;
  if (event.currentTarget.value === " ") {
    nameLabel.textContent = "Anonymous";
  }
}

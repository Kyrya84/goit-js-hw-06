function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const reference = {
  body: document.body,  
  bgColor: document.querySelector('span.color'),
  button: document.querySelector('button.change-color'),
}

// console.log(reference);

reference.button.addEventListener('click', onClickButton)

function onClickButton() {
  const color = getRandomHexColor();
 reference.body.style.backgroundColor = color;
 reference.bgColor.textContent = color;
}

// console.log(onClickButton);

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
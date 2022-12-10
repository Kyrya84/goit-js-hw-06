const button = {
  decrease: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"), 
  addition: document.querySelector("[data-action='increment']"),
};

// console.log(button);

let counterValue = 0;

const additionValue = () => {
  counterValue += 1;

 button.span.textContent = counterValue;
};

// console.log(additionValue);

const decreaseValue = () => {
  counterValue -= 1;

  button.span.textContent = counterValue;
};

// console.log(decreaseValue);

button.addition.addEventListener("click", additionValue);
button.decrease.addEventListener("click", decreaseValue);

// console.log(button.addition.addEventListener("click", additionValue));
// console.log(button.decrease.addEventListener("click", decreaseValue));

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
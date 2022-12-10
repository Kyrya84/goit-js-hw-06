let inputValue = document.querySelector('#validation-input');

// console.log(inputValue);

let inputLength = inputValue.dataset.length;

// console.log(inputLength);

const input = document.querySelector('input');

// console.log(input);

inputValue.addEventListener('change', element => {

  const text = element.target.value;
    
    if (text.length === +inputLength) {
      
    inputValue.classList.add('valid');
    inputValue.classList.remove('invalid');
      
    } else {
        
    inputValue.classList.remove('valid');
    inputValue.classList.add('invalid');
  }
});

// console.log(inputValue.addEventListener);

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

// - Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// - Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


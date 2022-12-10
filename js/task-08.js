const registrationForm = document.querySelector('form.login-form');

registrationForm.addEventListener('submit', loginFormConfirms)

function loginFormConfirms(event) {
  event.preventDefault();

  const {email, password} = event.currentTarget.elements;

  if (email.value === '' && password.value === '') {

    return alert('All fields must be filled in!');
  }

  const formData = {
    email: email.value,
    password: password.value,
  }
// console.log(formData);
    
event.currentTarget.reset();

}
// console.log(handleSubmitForm);

// Напиши скрипт управління формою логіна.

// 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
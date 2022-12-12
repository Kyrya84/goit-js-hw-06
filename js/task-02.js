
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.getElementById(`ingredients`);

const getItemMarkup = (ingredient) => `<li class="item">${ingredient}</li>`
const getListMarkup = (ingredientsArray) => ingredientsArray.map(ingredient => getItemMarkup(ingredient)).join('')

// console.log(getItemMarkup);
// console.log(getListMarkup);

ingredientsList.insertAdjacentHTML('afterbegin', getListMarkup(ingredients));

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
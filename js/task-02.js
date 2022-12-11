
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById(`ingredients`);

const ingredientsElement = ingredients.forEach(ingredient => {

  const newItem = document.createElement(`li`);

  newItem.innerHTML = ingredient;
  newItem.classList.add(`item`);
  
  ingredientsList.append(newItem);

});

// console.log(ingredientsElement);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
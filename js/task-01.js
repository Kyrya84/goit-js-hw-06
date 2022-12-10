const totalNumberOfCategories = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${totalNumberOfCategories.length};`);

const categoriesList = [...totalNumberOfCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent};
Elements: ${categories.children[1].children.length};`
  )
    .join(`\n`);
  
console.log(categoriesList);
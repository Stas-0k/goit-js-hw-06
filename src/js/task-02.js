
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const total = document.querySelector('ul#ingredients');

 
// for (let i = 0; i < ingredients.length; i++) { 
//   const list = document.createElement('li')
//   list.textContent = ingredients[i]
//   list.classList.add("item") 
//  //   total.prepend(list);
// }

total.innerHTML = ingredients.reduce((total, ingredient) => {
  return total+=`<li class="item">${ingredient}</li>`
}, '')







  
  

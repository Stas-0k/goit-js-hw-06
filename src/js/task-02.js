
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const total = document.querySelector('ul#ingredients');

 
const htmlInsert = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add("item"); 
  return list;
})
 
total.append(...htmlInsert);




  
  

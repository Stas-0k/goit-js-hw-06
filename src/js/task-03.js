const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const total = document.querySelector('ul.gallery');


// for (let i = 0; i < images.length; i++) { 
//   const list = document.createElement('li')
//   total.prepend(list);
//   const image = document.createElement('img') 
//   list.insertAdjacentElement("afterbegin", image);
//   image.setAttribute("src", images[i].url)
//   image.setAttribute("alt", images[i].alt)  
//   console.log(image)
// }

const itemImage = images.reduce((total, image) => { 
  return total+=`<li><img src="${image.url}" alt="${image.alt}"></li>`
}, '')

total.insertAdjacentHTML("beforeend",itemImage)

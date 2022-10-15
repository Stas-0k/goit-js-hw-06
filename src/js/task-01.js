const categorNum = document.querySelectorAll('li.item')
console.log(`Number of categories: ${categorNum.length}`)


categorNum.forEach((category) => { 
  
    const categoryName = category.firstElementChild
    console.log(`Category: ${categoryName.textContent}`)
    const elements = categoryName.nextElementSibling
    const element = elements.children
    console.log(`Elements: ${element.length}`)
})




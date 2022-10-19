let rangeControl = document.querySelector('#font-size-control')
let font = document.querySelector('#text')

font.style.fontSize = `${rangeControl.value}px`;

 const controler = () => { 
     font.style.fontSize = `${rangeControl.value}px`;
 }
    
    
rangeControl.addEventListener("input", controler)







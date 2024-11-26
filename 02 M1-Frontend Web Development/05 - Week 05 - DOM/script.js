let but1= document.querySelectorAll('button')[0]
let a = document.querySelectorAll('spell')
let b = document.querySelectorAll('ingredientsList')
but1.addEventListener('click',()=>{
    let rando1 = Math.floor(Math.random() * 3);
    a.innerText = b[rando1]
})
alert(b.innerText);

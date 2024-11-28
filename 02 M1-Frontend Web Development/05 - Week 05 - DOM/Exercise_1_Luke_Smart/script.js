//making variables for my elements on the html so that they can be manipulated
let but1 = document.querySelectorAll('button')[0];
let but2 = document.querySelectorAll('button')[1];
let a = document.querySelector('#spell');
let b = document.querySelectorAll('#ingredientsList li');
let c = document.querySelector('#spellArea');
let checker=false;
//random number for rgb generation, returns a number between 0,255 an rounds down to closes whole number using floor operator.
function rgb(){
    let x = Math.floor(Math.random() *255 );
    return x
}

function countme(){
    if (checker) return;
    checker = true
     //Timer for 1 second intervals
     for (let i = 3; i >= 1; i--) {
        setTimeout(()=>{//using the rgb function to generate 3 rgb numbers
        let x = rgb();
        let y= rgb();
        let z = rgb();
        //changing the background colour to a random color and text to a number
        c.style.background = `rgb(${x}, ${y}, ${z})`;
        //making sure that the innerText is readable by making it either white or black based on the shading generated by x
        if(x<100){
            c.style.color = 'white'
        }else {
            c.style.color = 'black'
        }
        
        a.innerText=i
        if(i==1){
            setTimeout(()=>{
                //generate a random number based on the length of the ingredients list
                let rando1 = Math.floor(Math.random() * b.              length);
                //creating a result and assigning the spell                 given by the current random number
                let result = b[rando1].innerText;
                //changing the blank text of the spell element              to the result(the chosen spell)
                a.innerText = result
                //resetting the bool
                checker=false
            },1000)
        }
        },(3-i)*1000)
    }
}
//first button for generating spells
but1.addEventListener('click',countme)
//second button that resets the spell to an empty string
but2.addEventListener('click',()=>{
    if (checker)return
    a.innerText= ''
    checker = false
})


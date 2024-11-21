// TODO: Create a multiline string using template literals
let mult = `This is a multi-line string\nSecond line`
console.log(mult);

// TODO: Create a function that uses template literals for HTML generation
//Createds a paragraph in html
function htmlP(a){
    return `<p>${a}<p>`
}
//creates an H1 heading in html
function htmlH1(a){
    return `<h1>${a}<h1>`
}
console.log(htmlP('Test'));
console.log(htmlH1('TEST 2'));



// TODO: Convert regular functions to arrow functions
//function examples
function oneplus(){
    return 1+1
}
function times(a,b){
    return a*b
}
//arrow functions
let newOneplus = ()=>(1+1)
let newTimes = (a,b)=>(a*b)
//printing out the results
console.log(oneplus());
console.log(newOneplus());
console.log(times(2,3));
console.log(newTimes(2,3));

// TODO: Use arrow functions with array methods
let numbers = Array.from({length:10},(_,i)=>(i));
console.log(numbers);

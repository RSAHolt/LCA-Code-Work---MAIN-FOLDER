/*// TODO: Create a function called sum. The function will take in a parameter and
calculate all the numbers from 0 -> the parameter. You must check if the parameter is
an integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowed to
use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure
to test your code effectively.*/
function sum(x){
    let result=0
    /*Checking if x is a number and positive */
    if(typeof x =='number'&& x>0 ){
        /* then looping from 0 to x */
        for(let i=0;i<x+1;i++ ){
            result+=i

        }
        return result
    /* else if x is negative, reverse sign */
    }else if(typeof x =='number' && x<0){
        x=x*(-1)
        /* Then looping as before */
        for (let i=0;i<x+1;i++){
            result-=i
        } 
    /* A message for any other entry i.e strings or bools ... */   
    }else{
        return "The value passed is not a number"
    }
    return result
}
/* output of sum() */
console.log(sum(-4));

/*// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->
4*3*2*1 //output 24 */
function factorial(x){
    /* Starting factorial is usually 1 */
    let result=1
    /* looping from 1 or the second number until x, this is done because starting with i=0 will result in 0 for the rest of the code since zero multiplied by any number is 0 */
    for(let i=1;i<x+1;i++ ){
        result*=i                
    }
    /* Return the result */
    return result
}
/* Output of factorial */
console.log(factorial(4));

/* // TODO: Create a function called funkyMath . If this function is called with 2
arguments the function will subtract the first from the second. If the function is called
with 3 arguments it will add all 3 numbers together. If the function is called with 4
arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide
them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25 */
function funkyMath(...a){
    result=0
    /* comparing the length of the rest parameter and applying the rules for their appropriate conditions. I used indexing to access the items within the array/rest parameter */
    if (a.length == 2){
        return a[1]-a[0]
    }if (a.length == 3){
        for (i of a){
        return a[0]+a[1]+a[2]
        }
    }else if (a.length ==4){
        let x = a[0]+a[1]
        let y = a[2]+a[3]
        result = x/y
        /* lastly return the result */
        return result
    }
}
/* Output of funkyMath() */
console.log(funkyMath(5,10,1));


/* // TODO: Create a loop that will remove all the odd numbers from the array and add
them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.() */
let currentArray = [1, 2 , 33, 45, 6,44]
/* Creating an empty array so that I can later push items to it */
let set=[]
/* looping through items of currentArray */
for (i of currentArray){
    /* checking to see if the current iterable is odd */
    if(i%2!=0){
        /* if odd, push i to empty array */
        set.push(i)
    }
}
// Sort the Array
set.sort(function(a, b){return a-b});
/* Output of the set */
console.log(set);

/* // TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car */
let me ={
    firstname:'Matthew',
    lastname:'Brown',
    age:25,
    favourite_colour:'Purple',
    dream_car:'BMW'
}
/* // TODO: Create and add a new property and value of ‘favourite food’ to the object. */
me.favourite_food = 'Pizza'
/* // TODO: . Now delete the age property from the object */
delete me.age
/* Output of 'me' object */
console.log(me);

// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply
// all 3 numbers together. Note: The argument passed must NOT be the same number.
function multiply(...arg){
    let result=1
    for(i of arg){
        result=result*i;
        
    }
    return result
}
console.log(multiply(2,4,10));//The function multiply can take as many arguements as is needed using rest parameters


 // TODO: Create a function expression called ‘convertToSeconds’ that takes in a
// number of minutes as an argument and returns the amount in seconds. ***Do not
// use a console.log() inside of the function***
function convertToSeconds(x){
    return x*60
}
console.log(convertToSeconds(10)+' seconds in '+10+' minutes');


// TODO: Create a function called fahrenheitToCelsius that takes the temperature as
// an parameter and returns the equivalent temperature in Celsius. ***Do not use a
// console.log() inside of the function***
function fahrenheitToCelsius(f){
    
    return ((f-32)/(9/5))
}
console.log('100°F is '+fahrenheitToCelsius(100)+'°C');

// TODO: Create a function that takes a string as a parameter and returns the reverse
// of the string. ***Do not use a console.log() inside of the function ***
function reverse(a){
    let re=a.split('')
    let x=re.reverse()
    return x.join('')
}
console.log(reverse("Hobby"));

// TODO: Create a function that takes in a string and returns the number of Vowels in
// the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a
// console.log() inside of the function***
function countVowels(a){
    let vowl= "aeiou"
    let string=[]
    for(i of a){
       if(vowl.includes(i)){
            string.push(i)
       }

    }
    return string.length
}
console.log(countVowels('aparagus'));

// TODO: Create a “isPrime” function that takes a number as a parameter and returns
// true if the number is prime, and false otherwise. Make sure to test your code with 4
// numbers
function isPrime(x){
     
    // "(_,i)=>i" can be mapped to "(_.i)=>i+2".
    //This means we go from (0 to x-1,), since i starts at 0,
    //to (2 to x+1).
    //Before, we started at 0 and ended at x-1 with length:x
    //The list cannot contain the current number "x" being checked according to the logic because x can divide itself.
    //so we end up cutting numbers by 4 values( 0, 1,x and x+1)
    //we do this by shortening the length by 2.
    //and increasing the starting index by 2
    //Hence {length:x-2} and "(_.i)=>i+2"
    //This means our last 2 values '(x+1) and x' is also removed.
    //this is how the variable 'numbers' would look without a filter
    // let numbers = Array.from({length:x-2},(_,i)=>i+2);
    
    //I opted for a filter since it excludes negative numbers as well
    // which would remove the need for an extra if statement
    //and not require minipulation of the code
    //We go from 0 to x-1 and cut anything less than 1.
    //now our range is always 2 to x-1, which is what we have above
    let numbers = Array.from({length:x},(_,i)=>(i)).filter(num=>num>1);    
    let twitch=0
    for(number of numbers)
        if(x%number==0){
            twitch +=1
        }
    if(x<2){
        return "Number is either 1 or negative! Which are not considered prime."
        //this is redundant but I left it incase I want to use the other version of numbers
        //or if 1 or a negative is used then the message is returned.
    }else if (twitch==0){//checks if twitch has changed
        return `Number ${x} is prime` //true
    }else {//if twitch changed then number is divisible by a previous number and hence not prime.
        return `Number ${x} is not prime` //false
    }   
} 
y = 100
console.log(isPrime(y));


//Extra code practice with printing all numbers before y and stating if prime or not as well as
//practice with a tenary operator
// let nommer = Array.from({length:y-2},(_,i)=>i+2)
// console.log(nommer);
// nommer.forEach(i=>console.log(isPrime(i)))
// nommer.forEach(i=>console.log(isPrime(i)?`Number ${i} is prime`:`Number ${i} is not prime`))
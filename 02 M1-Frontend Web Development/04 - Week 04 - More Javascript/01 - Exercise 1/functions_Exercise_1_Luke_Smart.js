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
    twitch=true
    if (x===1) {
        twitch =false
    }else if (x%2==0){
        twitch=false
    }else if (x%3==0){
        twitch=false
    }
    return twitch
}


console.log(isPrime(9));

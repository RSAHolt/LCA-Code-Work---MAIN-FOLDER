// TODO: Create a function that validates user input
//Times takes two arguments and multiplies them.
function times(a,b){
    if (a =='' || b ==''){
        //Error if empty string is entered
        throw new Error("Argument cannot be empty")
     
        //errors if either a or b are not numbers
    }else if (typeof a != 'number'){
        throw new Error("First argument is not a number");
    }else if (typeof b != 'number'){
        throw new Error("Second argument is not a number")
    }
    return a*b
}
    
try {
        //calling the function and output success if no error is detected
        console.log(times('a',''));
        console.log('Success');
        
        
    } catch (e) {
        //if an error is detected the function will throw the error and ask to try again        
        console.log('Try again');
            
    }
// TODO: Create a function that demonstrates multiple error types
function types(a){
    //condition for undefined input
    if (a == undefined){
        //output a reference error
        throw new ReferenceError('Reference Error, a is undefined')
    //condition for a datatype error
    }else if (typeof a != 'string'){
        //output for said datatype
        throw new TypeError('Type error, a is not a string')
        //condition for a syntax error, special characters came to mind
    }else if ('!@##$%^&*()'.includes(a) ){
        //output for the syntax error
        throw new SyntaxError('Syntax Error, a cannot be special characters')
    }
    return a;
}

try {
    //calling the types function and displaying a success message
    console.log(types('ok'));
    console.log('Success');
    
    
    
} catch (e) {
   //conditions for before mentioned errors, using instanceof and returning error name.
    if(e instanceof ReferenceError){
       console.log(e.name);
      throw new Error("Reference my guy");
   }else if(e instanceof TypeError){
    console.log(e.name);
   throw new Error("Datatype my guy");
}if(e instanceof SyntaxError){
    console.log(e.name);
   throw new Error("Syntax my guy");
}
   
}
// TODO: Create a collection of helper functions for string manipulation
function uppercut(a){
    //empty array for result
    let result = []
   //two sets of the alphabet both upper and lowercase
    let low = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    //main for in loop to iterate through the argument
    for(let i in a){
        //checkindex returns the index in array 'low' that matches with the current character being iterated in 'a' which is the string argument
        let checkindex=low.indexOf(a[i]);
        //if the index is not -1 then push the index of the 'upper' array to results array
        if(checkindex>-1){
            result.push(upper[checkindex])
        //else when the index is -1 which is when it is not a character or already uppercase then just return that character
        }else if(checkindex == -1) {
            result.push(a[i]);
        }}
    //finally convert the results array into a string 
    return result.join('')
}
console.log(uppercut('TryMeBro'));
//demosntrating previous helper function
function excite(x){
    let onlythese = 'FUNKYWORDfunkyword'
    let result = []
    for (let i of x){
        if (onlythese.includes(i)){
            result.push(uppercut(i))
        }else{
        result.push(i)
    }}
    return result.join('')
}
console.log(excite('Fankywerd'));


// TODO: Create helper functions for array operations
//convert a sting into an array with each element split
function convert_to_array(a){
    result=[]
    //iterate string and return current item in string to the result array
    for(i of a){
        result.push(i)
    }
    return result
}
console.log(convert_to_array('testicles'));

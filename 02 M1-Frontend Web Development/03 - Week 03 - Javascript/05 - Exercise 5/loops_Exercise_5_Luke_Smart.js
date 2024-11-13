// TODO: Create an array called numbers with values 1 through 5
let numbers = Array.from({length:5},(_,i)=>i+1)
// TODO: Write a for loop that prints each number in the array
for(i of numbers){
    console.log(i);
    
}
// TODO: Write a while loop that counts down from 5 to 1
let count =5
while(count>0){
    console.log(count);
count--
}
// TODO: Create a loop that prints only even numbers from the numbers array
numbers.forEach(i =>{
    if(i%2==0){
        console.log(i);        
    }
})
// TODO: Create a loop that calculates the sum of all numbers in the array
let total=0

numbers.forEach(i => total+=i)
console.log(total);

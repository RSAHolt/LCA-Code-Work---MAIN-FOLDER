// TODO: Create an empty array called colors
color =[]
// TODO: Add three colors to the array using push()
color.push("red")
color.push("yellow")
color.push("blue")

// TODO: Create another array called numbers with five numbers
let numbers = Array.from({length:5},(_,i)=>i+1)
// TODO: Remove the last color from the colors array
color.pop()
// TODO: Add a new color to the beginning of the colors array
color.splice(0,0,"green")
// TODO: Print the length of both arrays
console.log(color.length);
console.log(numbers.length);


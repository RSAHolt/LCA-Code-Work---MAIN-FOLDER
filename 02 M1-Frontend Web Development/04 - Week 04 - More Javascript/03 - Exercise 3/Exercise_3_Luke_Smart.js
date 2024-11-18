// TODO: Create a global variable called globalCount
var globalCount

// TODO: Create a function that demonstrates local scope
function spaza(){
    /*By using let, this creates a locally scoped varible */
    let a 
}

// TODO: Create a function that tries to modify both variables
function change(){
    globalCount = 1
    let a = 1
}
// calling function and logging output to console
change()
// console.log(globalCount,a);

// TODO: Create a Student constructor function
function Student(name,age,classNumber){
    this.name = name;
    this.age = age;
    this.classNumber = classNumber;

}

// TODO: Create several student instances
let stud1 = new Student('Stud1','1','1')
let stud2 = new Student('Stud1','2','2')
let stud3 = new Student('Stud1','3','2')


// TODO: Create an object literal with nested properties
let nested = {
    Class_1:[stud1],
    Class_2:[stud2,stud3],
    globalCount: 1,
    randomobject:{
        odobo:'Food',
        group:'Entity',
        life:'living'
    }
}

// calling the nexted list
console.log(nested);

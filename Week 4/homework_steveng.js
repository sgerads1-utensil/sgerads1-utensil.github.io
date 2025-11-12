// write a variable that is a string and output to console (hint: it's console.log(variable name))
let myString = "Hello, World!";
console.log(myString);

// write a variable that is a number and output to console (hint: it's console.log(variable name))
let myNumber = 32110;
console.log(myNumber);

// write a variable that takes any two numbers and adds them 
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log(sum);

// write a variable that takes any two numbers and subtracts them and output to console
let num3 = 100;
let num4 = 25;
let difference = num3 - num4;
console.log(difference);

// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 
let num5 = 17;
let num6 = 4;
let remainder = num5 % num6;
console.log(remainder);

// write a variable that takes any two numbers and perform an exponential value and output to console 
let base = 5;
let exponent = 2;
let exponentResult = base ** exponent;
console.log(exponentResult);

// write a statement that is false using a conditional statement and output to console 
if (num2 > num1) {
    console.log(true);
} else {
    console.log(false);
}

// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.breed); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

let buddy = {
    breed : "dog", 
    baby: "good boy", 
    fluffy: "scruffy", 
    output: function() {
        return `Buddy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`
    }
}

// console.log the values of that object one by one. 
console.log(buddy.breed);
console.log(buddy.baby);
console.log(buddy.fluffy);
console.log(buddy.output());

// create an array 
let myArray = ["Steven", "Is", "Thankful", "That", "You are", "Proud"];

// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]
console.log(someArray[2]);

// call all values in the array using a loop 
for(let i = 0; i < someArray.length; i++) {
    console.log(someArray[i]);
}
console.log("--- End of loop ---");

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}
console.log(ifStatement);

// answer: false
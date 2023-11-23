/*Assign boolean to a variable. Here, we declare the variable isTrue. 
But, it has no value yet. Assign a boolean value to it and run the code.*/
let isTrue;
isTrue = true;
console.log(isTrue);
/*Actually, every single value in JavaScript can be transformed to a boolean value.
To do so, we can make use of the Boolean() function. Let's try it:,Here, we forced the value 100 to be converted to a Boolean, 
and the result is true.But, why does 100 become true? That's where the concepts of truthy and falsy come in.
*/
console.log(Boolean(100));

/*Every single value in JavaScript is considered either truthy or falsy. Truthy values result in 
the value true when coerced into a Boolean value. Falsy values result in the value false.All of the following values are falsy:
false,null,undefined,0,-0,NaN,An empty string ('').It is important to know that all JavaScript values that are not 
in this list are truthy.Here's a list of numbers. What do you think? Which of them become true and which become false?*/
console.log(Boolean(100));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-5));
//Right, all numbers except 0 are truthy.What will be the output?
const price = 10;
console.log(Boolean(price));
//What will be the output?
let prices;
console.log(Boolean(prices));
/*Here, we declare the variable num and assign it the value 5. We also declare the variable bool which we assign the boolean 
representation of num.Extend the code such that the console.log() statement logs false.*/

let num = 5;
num =0;
const bool = Boolean(num);
console.log(bool);


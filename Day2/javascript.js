/*As you can see, console.log() simply displays information in your JavaScript console — in this case the value 1.
We will use console.log() as a tool to test our code.
Great! Now, we can talk about JavaScript variables*/

console.log(1);
/*The console prints undefined. This is because we have not initialized our variable. 
Initializing a variable is the process of assigning a value to it.
let test;
console.log(test);*/

//We can assign a value to a variable with the assignment operator =
let test;
test = 1;
console.log(test);

//other way You can also assign a value to a variable directly when you create it.
let tes = 1;
console.log(tes);
//Exercise:What will be the output?
let num = 0;
console.log(num);
num = 2;
console.log(num);

//Reassign a value to a variable
let num1 = 1;
let num2 = 2;
console.log(num2);
console.log(num1);
/*In this simple exercise we declare a variable called num and assign it a value of 5. Then we try to log the value of the variable using the console.log() method.
But, the console.log() method contains a small mistake. If you try to run the code, you will see an error message.
Fix the mistake and run the code again.*/
const num3 = 5;
console.log(num3);
/*In this exercise we practice how to declare a new variable and how to assign it a number. The console.log() statement below attempts to log a variable named num.
Declare a variable with this name and assign it a number of your choice. Run the code to see if the number is being logged.*/

const num4 = 5 ;
console.log('The value of num is: ' + num);

/*To store this kind of information we can use JavaScript Booleans, like so const isOnSale = true; The value true 
indicates that the product is on sale.,If the product is not on sale, we assign false: const isOnSale = false;,
The same way we can reassign variables with numbers, we can also reassign variables with Booleans.*/
let isOnSale = true;
console.log(isOnSale);
isOnSale = false;
console.log(isOnSale);
//What will be the output?
let isOnSales = false;
console.log(isOnSales);
isOnSale = true;
console.log(isOnSales);
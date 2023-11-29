//A brief word about functions
console.log("let's  begin:");  //  ->  let's  begin:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World
console.log("and  again:");  //  ->  and  again:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World
console.log("and  once  more:");  //  ->  and  once  more:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World
//function
var  globalGreeting  =  "Good  ";
function  testFunction(){
var  localGreeting  =  "Morning  ";    
console.log("function:");
console.log(globalGreeting);
console.log(localGreeting);}
testFunction();   
console.log("main  program:");
console.log(globalGreeting);

/*Variable shadowing,JavaScript allows for variable shadowing. What does that mean? It means that we can declare a 
global variable and a local variable of the same name.*/
let  counter  =  100;
console.log(counter);  //  ->  100
{
counter  =  200;
console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  200
/*The counter variable, declared at the beginning of the program, is a global variable. Throughout the program, 
also inside the block, we operate on this very variable. A small change in the code is enough for the program to behave 
completely differently. */
let counters = 100;
console.log(counters); // -> 100
{
let counter = 200;
console.log(counter); // -> 200
}
console.log(counters); // -> 100
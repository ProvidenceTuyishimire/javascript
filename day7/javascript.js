/*The typeof operator just mentioned is unary (it takes only one argument) and informs us of the type of data indicated as a given 
argument. The argument can be either a literal or a variable – in the latter case we will be told about the type of data stored in it. 
The typeof operator returns a string with one of the fixed values assigned to each of the types. */
let  year  =  1990;
console.log(typeof  year);  //  ->  number
console.log(typeof  1991);  //  ->  number 
let  name  =  "Alice";
console.log(typeof  name);  //  ->  string
console.log(typeof  "Bob");  //  ->  string  
let  typeOfYear  =  typeof  year;
console.log(typeOfYear);  //  ->  number
console.log(typeof  typeOfYear);  //  ->  string
/*Primitive data types.In JavaScript, there are six primitive (or simple) data types: Boolean, Number, BigInt, String, Symbol, and 
undefined. Additionally, the primitive null value is also treated as a separate type. The primitive, as we have already said, is a type 
of data whose values are atomic. This means that the value is one, indivisible element. */

/*Example of Boolean in Primitive data types The Boolean is a logical data type. It can only take one of two values: true or false. 
It’s mainly used as a conditional expression needed for deciding what part of the code should be executed, or how long something 
should be repeated (this is called a control flow statement, and we’ll take a closer look at it in JavaScript Module 4).Booleans are 
also used as what is commonly referred to as a flag, a variable that signals something that can be either present or absent, enabled or 
disabled, etc. Like any other variable, booleans should have clear and informative names. It’s not mandatory, but we can often see that 
boolean flag names are prefixed with "is", to show the intent of checking this for true/ false values. */
let  isDataValid  =  true;
let  isStringTooLong  =  false;
let  isGameOver  =  false;
continueLoop  =  true;
console.log(false);  //  ->  false
console.log(typeof  false);  //  ->  boolean
console.log(isDataValid);  //  ->  true
console.log(typeof  isDataValid);  //  ->  boolean
/*Example of Number in Primitive data types,This is the main numeric type in JavaScript that represents both real numbers (e.g. fractions) 
and integers. The format in which the data of this type is stored in the memory means that the values of this type are sometimes
 approximate (especially, but not only, very large values or some fractions). It is assumed, among other things, that in order to 
 ensure the correctness of calculations, the integer values should be limited in JavaScript to the range from -(253 – 1) to (253 – 1). */
 const  years  =  1991;
let  delayInSeconds  =  0.00016;
let  area  =  (16  *  3.14);
let  halfArea  =  area  /  2;   
console.log(years);  //  ->  1991;
console.log(typeof  years);  //  ->  number;
/*Numbers in JavaScript are usually presented in decimal form, which we are used to in everyday life. However, if a literal describing a
number is preceded by an appropriate prefix, we can present it in hexadecimal (0x…), octal (0o...) or binary (0b...) form. We can also
write numbers in exponential form, so for example, instead of 9000, we can write 9e3, and instead of 0.00123, we can write 123e-5. 
You are probably already familiar with the terms we used just now, such as decimal, hexadecimal, or exponential representation. */
let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2   
let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123
/*In addition to regular numbers in JavaScript, we use three additional special values, which are: Infinity, -Infinity and NaN 
(not a number). The first two do not require any additional explanations – they are exactly what we know from mathematics. The last one,
 NaN, is not so much a numerical value as a notification that some arithmetic action (or mathematical function) could not be performed 
 because the argument is either not a number, or cannot be converted to a number. */
let  v  =  1  /  0;
let  w  =  -Infinity;  
console.log(v);  //  ->  Infinity
console.log(w);  //  ->  -Infinity
console.log(typeof  v);  //  ->  number
console.log(typeof  w);  //  ->  number  
let  s  =  "it's  definitely  not  a  number";
let  n  =  s  *  10;
console.log(n);  //  ->  NaN
console.log(typeof  n);  //  ->  number

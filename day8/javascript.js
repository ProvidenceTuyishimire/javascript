/*The BigInt type is not used too often. It allows us to write integers of virtually any length. For almost any normal numerical 
operations, the Number type is enough, but from time to time we need a type that can handle much bigger integers.We can use mathematical
operations on BigInts in the same way as on Numbers, but there is a difference when dividing. As the BigInt is an integer type, 
the division result will always be rounded down to the nearest whole number.*/
let  big  =  1234567890000000000000n;
let  big2  =  1n;
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n
/*The String type represents a sequence of characters forming a piece of text. Common operations on texts include concatenation, 
extraction of the substring, and checking the length of the string. Strings are extensively used in programming and even more so in web 
development, as both HTML and a big part of Internet content is text.Strings, like other primitives, are immutable, so when we want to 
change even one letter in a string, in reality, we create a new string.*/
let  country  =  "Malawi";
let  continent  =  'Africa';  
console.log(country);  //  ->  Malawi
console.log(typeof  country);  //  ->  string
console.log(continent);  //  ->  Africa
console.log(typeof  continent);  //  ->  string
/*If you want to put a single or double quote inside the string, you can also use the escape character – backslash. A quote mark 
preceded by the \ (backslash) character will be interpreted as ordinary characters that are part of our string, not parts of a literal 
construction. The backslash itself, if it is to be treated as an ordinary character (not a control character), must also be preceded by 
an escape character (i.e. a backslash).*/
let  message1  =  'The  vessel  \'Mars\'  called  at  the  port.';
let  message2  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
let  path  =  "C:\\Windows";
console.log(path);  //  ->  C:\Windows
/*So if the character strings consists of digits, the automatic conversion will be successful and we will get the result of the 
arithmetic action as a Number type value. If the character string cannot be interpreted as a number (and converted) we will get the NaN 
result.  */
let  paths  =  "C:\\Windows"  -  "Windows";
console.log(paths);  //  ->  NaN
let  test  =  "100"  -  "10";
console.log(test);  //  ->  90
console.log(typeof  test);  //  ->  number
/*The exception is the addition operation, which will not be treated as an arithmetic one, but as an attempt to create a new string by 
combining two input strings. */
let  pathes  =  "C:\\"  +  "Windows";
console.log(pathes);  //  ->  C:\Windows
let  tests  =  "100"  +  "10";
console.log(tests);  //  ->  10010
console.log(typeof  tests);  //  ->  string
/*A very convenient mechanism that was introduced to JavaScript in 2015 is string interpolation. It allows you to treat a character 
string as a template, in which you can place values in selected places, such as those taken from variables. Such a literal is created 
using backticks (or grave accents) instead of quotation marks. The places where values are inserted are marked with curly brackets 
preceded by a $ sign. */
let  countrys  =  "Malawi";
let  continents  =  "Africa";
let  sentence  =  `  ${countrys}  is  located  in  ${continents}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.
/*A method is a special kind of function that belongs to an object. Objects are complex data types, which can consist of many values 
(stored in properties) and methods. If you want to call the method of an object, you write the name of the method after a dot. Does this
 remind you of something? This is exactly the notation you use when calling console.log. The console object has many other methods 
 besides the log method, such as time and timeEnd (which can be used to measure time). */
console.time();
console.log("test  console");  //  ->  test  console
console.timeEnd();  //  ->  default:  0.108154296875  ms
/*The undefined type has only one value: undefined. It’s the default value that all variables have after a declaration if no value is 
assigned to them. You can also assign the value undefined to any variable, but in general, this should be avoided, because if we need to
 mark a variable as not holding any meaningful value, we should use null. */
let declaredVar;
console.log(typeof  declaredVar);  //  ->  undefined
declaredVar  =  5;
console.log(typeof  declaredVar);  //  ->  number
declaredVar  =  undefined;
console.log(typeof  declaredVar);  //  ->  undefined
//The  undefined  value  can  also  be  returned  by  the  typeof  operator  when  a  non-existent  variable  is  used  as  an  argument.
Console.log(typeof  notDeclaredVar);  //  ->  undefined
console.log(notDeclaredVar);  //  ->  Uncaught  ReferenceError:  notDeclared  is  not  defined
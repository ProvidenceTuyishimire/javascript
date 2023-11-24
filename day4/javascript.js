/*Changing variable valuesVariables, as their name suggests, can store data that will vary. Changes are made 
by assigning a new value to the variable, which overwrites the previous one.*/

let  steps  =  100;
console.log(steps);  //  ->  100
steps  =  120;  //  ->  120
console.log(steps);
steps  =  steps  +  200;
console.log(steps);  //  ->  320
/*The first operator we explore is the Equal to (==) operator. It checks if two values are equal. For example:
2 == 2,Can you guess what the output will be?,Comparison operators always return a boolean value. In this case 
we got false because priceOne and priceTwo are not equal.*/
const priceOne = 5;
const priceTwo = 10;
console.log(priceOne == priceTwo);
//Now, priceOne and priceTwo have the same value. Let's see what the output will be:
const priceOnes = 10;
const priceTwos = 10;
console.log(priceOnes == priceTwos);
/*The second operator we explore is the Not Equal to (!=) operator. It checks if two values are not equal. For example:2 != 2
Now, we got true because priceOne and priceTwo are indeed not equal.*/
const priceOnee = 5;
const priceTwoo = 10;
console.log(priceOnee != priceTwoo);
/*The Greater than (>) operator checks if the left value is greater than the right value. For example:
2 > 1 // checks if 2 is greater than 1,Can you guess what the output will be?*/
const priceOnees = 5;
const priceTwoos = 10;
console.log(priceOnees > priceTwoos);
console.log(priceTwoos > priceOnees);
/*The Less than (<) operator checks if the left value is less than the right value. For example:
2 < 1 // checks if 2 is less than 1,Let's use the Less than operator in the example for above:*/
const priceOns = 5;
const priceTws = 10;
console.log(priceOns < priceTws);
console.log(priceTws < priceOns);
/*Similar to the operators above, there are also the Less than or equal (<=) and Greater than or equal (>=) operators. For example:
2 <= 1 // checks if 2 is less than or equal 1,2 >= 1 // checks if 2 is greater than or equal 1.Here's an example of how to use them:*/
const priceOned = 10;
const priceTwod = 15;
const priceThree = 10;
 
console.log(priceOned >= priceTwod);
console.log(priceOned >= priceThree);
 
console.log(priceOned <= priceTwod);
console.log(priceOned <= priceThree);


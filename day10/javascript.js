/*Each field has its own name (or key) and value assigned to it. In the case of JavaScript objects, these fields are usually called 
properties. Records, or in our case objects, allow you to store multiple values of different types in one place. In JavaScript, there 
are a few ways to create objects, but the easiest and fastest is to use the curly bracket literal. */
let testObj = {};
console.log(typeof testObj); // -> object
/*The object we create and store in the variable testObj is not particularly useful, because it’s … empty. We have not defined any 
fields in it, i.e. any key–value pairs. Let's try it again, this time by defining an object containing two fields with keys 
nr and str. */
let testObjet = {
nr: 600,
str: "text"
};
console.log(testObjet.nr); // -> 600
console.log(testObjet.str); // -> text
/*What do we need objects for? The simplest reason for using them may be the desire to store several values in one place, which are 
linked to each other for some reason.Let's assume that we collect information about the users of our system. Information about a single 
user will consist of their first name, last name, age, and email address. Let's try to write an appropriate piece of code for two users,
 without using objects for now. */
let name1 = "Calvin";
let surname1 = "Hart";
let age1 = 66;
let email1 = "CalvinMHart@teleworm.us";
let name2 = "Mateus";
let surname2 = "Pinto";
let age2 = 21;
let email2 = "MateusPinto@dayrep.com";
console.log(name1.name); // -> Calvin
console.log(surname1.name); // -> Hart
console.log(age1.age); // -> 66
console.log(email1.email); // -> CalvinMHart@teleworm.us
console.log(name2.name); // -> Mateus
console.log(surname2.name); // -> Pinto
console.log(age2.age); // -> 21
console.log(email2.email); // -> MateusPinto@dayrep.com
/*e will also be able to improve this, not with objects, but with arrays (more about which in a moment).So let's improve our piece of 
code with objects: */
let user1 = {
name: "Calvin",
surname: "Hart",
age: 66,
email: "CalvinMHart@teleworm.us"
};
let user2 = {
name: "Mateus",
surname: "Pinto",
age: 21,
email: "MateusPinto@dayrep.com"
};
console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Mateus
console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67
console.log(user2.phone); // -> undefined
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557

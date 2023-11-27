 /*Program blocks,We can separate the code of a program into blocks. In the blocks that we create using curly brackets, 
there is a set of instructions, which for some reason should be treated independently. The blocks are usually associated 
with conditional instructions, loops, or functions, We can also separate a block of a program unrelated to anything special
, simply by choosing a certain range of instructions*/
let  counter;
console.log(counter);  
{
counter  =  1;
console.log(counter);  
}
counter  =  counter  +  1;
console.log(counter);  
/*The first rule is simple. If we declare any variable or constant using let or const, respectively, outside the code blocks, 
they will be global. By this we mean that their names will be visible throughout the program, outside blocks, inside blocks, 
in functions,We will be able to refer to them anywhere by their names, and of course have access to their values.
What happens if we declare something using let or const inside a block? This will create a local variable or constant.
 It will be visible only inside the block in which it was declared and in blocks that can optionally be nested in it.*/
 let  height  =  180;
{
let  weight  =  70;
console.log(height);  
console.log(weight);     
}
console.log(height);  
console.log(weight); 
/*The height variable, declared outside the block, is global. The weight variable is local – its scope is limited by the block in
 which it was declared. This is clearly visible when trying to display the values of both variables inside and outside the block.
We can also test the case with nested blocks.the info variable declared in the most internal block is visible only inside it. 
The weight variable is visible both inside the block in which it was declared and inside the block nested in it. And the global 
variable height is visible everywhere.*/
let  heights  =  200;
{
let  weight  =  100;
{
let  info  =  "tall";
console.log(heights);  
console.log(weight);  
console.log(info);  
}
console.log(heights);  
console.log(weight);  
console.log(info);  
}
/*In the case of variable declarations using the keyword var, the situation is slightly different. The variable declared using it 
outside the blocks will, as in the case of let, be global, in other words, it will be visible everywhere. If you declare it inside
 a block, then... well, it will usually turn out to be global again. */
 var  heightt  =  180;
{
var  weight  =  70;
console.log(heightt);  
console.log(weight);  
}
console.log(heightt);  
console.log(weight);  
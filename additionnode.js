NAME: VINOODHINI D | REG NO: 19IT118
QUESTION:
 Create a custom module namely "Arithmetic" with the following functions:
o Addition of two numbers
o Subtraction of two numbers
o Square of a number
Arithmetic.js:
exports.add=function(a,b){
 return a+b;
};
exports.sub=function(a,b)
{
 return a-b;
};
exports.square=function(a)
{
 return a**2;
};
//exports.div = function (a, b) {
 //return a / b;
//};
Calculator.js:
var calculator=require('./arthimetic');
//var prompt = require('prompt-sync')();
//var num1 = prompt('Enter 1st number: ');
//var num2 = prompt('Enter 2nd number: ');
var a=108,b=118;
console.log("Additionof "+a+" and "+b+" is: "+calculator.add(a,b));
console.log("Subtraction of "+a+" and "+b+" is: "+calculator.sub(a,b));
console.log("Square of "+a+" is : "+calculator.square(a));
//console.log("Division:"+calculator.div(a,b));
OUTPUT:
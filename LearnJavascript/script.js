// programming language:
//  the language used for communicating with computer
// 1. program
// set of instructions in programming language give to the computer to do some tasks
// Binary Language (0,1)
// a>10102
// b>10103
// Compiler
// pluse two numbers > compiler> 010010 10001 101001
// syntax rule same like grammer rule

//reserve words/ keywords (in english has, have, is , are ,am , many , there, here, wherer)
// (in pl for, name, if, swtic, case,var,let,const)

//  benefits of lerning javascript
// web development --> frontend,backend (nodejs)
//  app development --> react native
//  destop application--> electron js

// console.log("hello wordl!");

// variable**************************
//  variable is a container that save data in ram

// var age = 12;
// var myName = "Ali";
// console.log(myName,age);
// console.log("my name is", myName, "my age is ", age);
// variable naming rule
// 1. a-z, A-Z, 0-9,_ (correct)
// example: myName, age,gender,user_name (correct)
// example : %age, #gender (wrong)

// 2. first word should be (a-z,A-Z), _
// example myName1, _age2,gender,user_name (corrent)
//  example 1age,3gender ( incorrent)

// 3. variable should not be a keyword word
//  name, for,if (wrong)

// 12+23

//  problem no 1.
// write a program to store your name, father name, your age, your gender and show them in output in form of paragragh;

// user name -> varaible
//  1. snake case: user_name;
// 2. camel case : userName;
// 3. pascal case: UserName
// var myName = "abdul hanan";
// var age = -24; // non zero
// age = 0; // zero
// age = "24";
// var fatherName = "Muhammad Tahir";
// var gender = "Male";
// myName = "Ali";
// var player = true;
// console.log(typeof player);
// console.log(
//   "My name is ",
//   myName,
//   "my father name is ",
//   fatherName,
//   "my age is",
//   age,
//   "my gender is",
//   gender
// );

// null and undefinred

// var number; // null
// console.log(number);

// Operators
// 1. assignment operator (=)
// 2. arithmetic operator (- , + ,/, %, *)
// increment, decreemnt;
// 3. relation operator (> , < , <=, >=, ==, !=)
// 4. logical operator (&&, ||, !)
// 5. conditional or ternary operator

// 1. assigment operator:
// var x = 12;
// var y = 19;

// // x = y;
// y = x;
// console.log("x", x, "y", y);

// 2. arithmetic operator:
//  +
// % modulus operator
// var x = 2;
// var y = 8;
// var z = 9;
// var sumResult = x + y + z;
// console.log("x + y+ z", sumResult);
// var result = y / x;
// var reminder = y % x;
// console.log("result", result, reminder);

// var result =(1 - 2) + 4 / 2 * 2;
// 1-2 + 2 *2;
// 1-2+4;
// -1+4
// 3;

// console.log("result", result);
// console.log("x", x);
// x = x + 100;
// console.log("x", x);

// increment/ decrement (postfix)
// console.log("x", x);
// x--;
// console.log("x", x);
// x--;
// console.log("x", x);

//prefix
// --x;
// ++x
// console.log("x", x);

// console.log("x++", x++);
// console.log("++x", ++x);
// console.log("x", x);

// increment / decrement
// prefix-> --x, ++x;
// post --> x--,--x
// var x = 1;
// ++x;
// var y = x++;// y=1 , 1+1=2
// console.log("y=", y);
// console.log("x=", x);
// var x = 1;
// var result = x++ + --x - --x + x--;
// console.log("result=", result);
// console.log("x", x);

// relation operators (>,<,>=,<=, !=,== , ===)
// true, false,
var a = 21;
var b = 30;
var result = (b = a); // reulst=a, b=a

console.log("a", a, "==", "b", b, result);
console.log("type of a", typeof a, "type of b", typeof b);
var myName = "abdul hanan";
// console.log(true > false);
// console.log("h")

// // 1. solve this in register
// var y = 2;
// var result = y++ - --y + y-- + ++y - ++y;
// var x = 1;
// var result = x++ - --x + ++y - x-- + ++y + x++;

// 2. write a program to store your age and check that your age is greater then or equal to 19 or note;
//3 . write a program to add any two numbers and check that there result is greater than 90 or not;
// 4. write a program and take any two random numbers and check that they are equals?

// logical operators
// var x = 12;
// var y = 14;
// var result = y > x;

// var result=x>15 x<20;

//  AND -> &&
// OR -> ||
// NOt --> !

// AND
// var x = 15;
// var result = x >= 15 && x < 20;
// console.log("result", result);

// OR
// var y = 14;
// var resultOr = y >= 15 || y < 20;
// console.log("resultOr=", resultOr);

// NOT
// var z = 12;
// var resultNot = !z >= 12;
// console.log("resultNot!", resultNot);

// var text = "hy1";

// var textResult = !(text == "hello" || text == "hy");
// console.log("textResult", textResult);

// var x = 13;
// var y = 14;
// var result =  !(y > 14) && x < 15 || y > 19 && x < 19;
// console.log("result",result)

// write a program to check that a number is equal to 19 or equal to 13 or equal to 15

// var x = 19;
// var result = x == 19 || x == 13 || x == 15;
// console.log("result", result);

// advance assignment operator

// var x = 19;
// var y = 14;
// // x=x+15;
// x += y + 1; /// x=x*15  // x=x+y+1;
// console.log("x", x);
var age = 8;
var result = age >= 18 && age <= 25 ? "you are adult" : "you are underage";
console.log("result", result);

// var answer = result == "you are adult" ? true : false;
// console.log("answer",answer)

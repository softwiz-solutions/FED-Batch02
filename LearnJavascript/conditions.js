// conditions

// var age = parseInt(prompt("Please enter your age"));
// console.log("type of age befrome parseint", typeof age);
// // var age = parseInt(userAge);
// // console.log("type of age after parse int", typeof age);

// // console.log("value of age", age);
// // console.log("type of age", typeof age);
// //  false, 0, "",null
// if (age === 18) {
//   //   console.log("you aFre adult");
//   alert("You are adult");
// }
// console.log("after if");

// var age = parseInt(prompt("Enter your age"));
// if (age >= 18) {
//   console.log("you are adult");
// } else {
//   console.log("your are not adult");
// }

// write a program to show the day name according to day number
// mon =1,Tue =2,Wed =3, thursday =4,friday =5,saturday =6,sunday =7

// var dayNumber = parseInt(prompt("Please enter a day number"));

// if (dayNumber == 1) {
//   console.log("Monday");
// } else if (dayNumber == 2) {
//   console.log("Tuesday");
// } else if (dayNumber == 3) {
//   console.log("Wednesday");
// } else if (dayNumber == 4) {
//   console.log("Thursday");
// } else if (dayNumber == 5) {
//   console.log("Friday");
// } else if (dayNumber == 6) {
//   console.log("Saturday");
// } else if (dayNumber == 7) {
//   console.log("Sunday");
// } else {
//   console.log("You enter wrong day number please enter b/w 1 to 7 numberF");
// }

// percentage calculator,
// write a program to show the grade according to the percentage of the marks,

// percentage>=90, A
// percentage>=80, B
// percentage>=70, C
// percentage>=60, D

// switch case:

//  2+2=4, 3+1=4, 5-1=4, 4+0=4;

var dayNumber = parseInt(prompt("Please enter a day number"));
switch (dayNumber) {
  case 1: // case dayNumber==1
    console.log("Monday");
    break;
  case 2:
    console.log("Tues");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
  default:
    console.log("please enter number b/w 1 to 7");
}

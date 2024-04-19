// 31
// Getting the current date and time

// var currentDate = new Date();
// // console.log();
// var currentDay = currentDate.getDay();
// const days = ["sun", "Mon", "tues", "wed", "thurds", "fri", "sat"];
// console.log("days", days[currentDay]);

// 2
// Extracting parts of the date and time

// // get month
// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// console.log("object", currentMonth);

// // get date
// var currentDate = new Date();
// var currentDin = currentDate.getDate();
// console.log("object", currentDin);

// // get getFullYear
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// console.log("object", currentYear);

// // // get hours
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// console.log("object", currentHour);

// // // // get minutes
// var currentDate = new Date();
// var currentMinutes = currentDate.getMinutes();
// console.log("object", currentMinutes);

// // // // // get sec
// var currentDate = new Date();
// var currentSec = currentDate.getSeconds();
// console.log("object", currentSec);

// // // // get sec
// var currentDate = new Date();
// var currentMiliSec = currentDate.getMilliseconds();
// console.log("object", currentSec);

// // // // get time
// var currentDate = new Date();
// var currentMiliSec = currentDate.getTime();
// console.log("object", currentMiliSec);

// chapter 33
// Specifying a date and time

// var futureDate = new Date("January 02, 1970");
// console.log("fturue date", futureDate.getTime());

// var currentDate = new Date();
// console.log("current date", currentDate.getTime());

//  how to calculate dob

// user dob
// prompt("October 17,2000");
// var userDob = new Date("17-10-2000");
// // current date
// var currentDate = new Date();
// // get milisecons of both dates
// var userDobMilliseconds = userDob.getTime();
// var currentDateMilliseconds = currentDate.getTime();

// var diff = currentDateMilliseconds - userDobMilliseconds;
// // console.log("diff", diff);
// // var age = diff / 31536000000;
// var age = diff / (1 * 365 * 24 * 60 * 60 * 1000);
// console.log("age", Math.ceil(age));

// var currentDate = new Date();
// console.log("curent", currentDate.setDate(23));
// var d = new Date();

// console.log("curent", d.setFullYear(2001)/31536000000);

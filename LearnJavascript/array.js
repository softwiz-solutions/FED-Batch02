// write a program to save the name of 5 students;

// var student0 = "ali";
// var student1 = "ahmad";
// var student2 = "usasma";
// var students3 = "amir";
// var student4 = "rehman";
// console.log("first student ", student0);
// array
// array is used to store the same type of data

// var students = ["ali", "ahmad", "usama", "amir", "rehman"];

// // console.log("student data", students);
// // console.log("student data", students[4],students[3]);
// console.log("students", students);
// students[5] = "muawiya";
// students[1] = "zeeshan";
// var students=[];
// students[1]="hello"
// console.log("student data", students);
// var students = [];
// students[0] = prompt("please first  enter user name");
// students[1] = prompt("please second enter user name");
// students[2] = prompt("please third enter user name");
// students[3] = prompt("please fourth enter user name");
// console.log("students", students);
// var fruits = ["mango", "melon", "banana", "apple", "dates", "cheery"];
// console.log("fruits",fruits[0])
// console.log("fruits",fruits[1])
// console.log("fruits",fruits[2])
// console.log("lenght of fuirst", fruits.length);
// for (var i = 0; i < fruits.length; i++) {
//   console.log("fruits", fruits[i]);
// }

// write a program to get 5 books name from user,show the output,do this using array and loop;

// var studentsName = ["ali", "ahmad", "usama", "muawiya"];
// console.log("students name", studentsName[0]);
// console.log("students name", studentsName[1]);
// console.log("students name", studentsName[2]);
// console.log("students name", studentsName[3]);
// for (var i = 0; i < studentsName.length; i++) {
//   if (i % 2 == 0) {
//     console.log("students name", studentsName[i]);
//   }
// }

// user input
// var studentsName = [];
// studentsName[0] = prompt("Please enter name");
// studentsName[1] = prompt("Please enter name");
// studentsName[2] = prompt("Please enter name");
// for (var i = 0; i < 4; i++) {
//   studentsName[i] = prompt("Please enter name");
// }

// for (var i = 0; i < studentsName.length; i++) {
//   console.log("students name", studentsName[i]);
// }

// methods on array
// var studentsName = ["ali", "ahmad", "usama", "muawiya"];
//  add or remove last element of array
// TODO: for removing last element of array
// var lastElement = studentsName.pop();
// console.log("lastElemnt", lastElement);
// console.log("studentsName", studentsName);
// TODO: for add in last element of array
// studentsName.push("zainab");
// studentsName.push("fajar");
// studentsName.pop();
// console.log("studentsName", studentsName);

// TODO: for removing first element of array
// studentsName.shift();
// TODO: for add first element of array

// studentsName.unshift("abdul hanan");

// console.log("studentsName", studentsName);

// var studentsName = ["ali", "ahmad", "usama", "muawiya"];

// TODO: for add  element anywerhere in array
// var deltedElement = studentsName.splice(0, 1,"muawiya");
// console.log("studentsName", studentsName);
// console.log("deltedElement", deltedElement);

// TODO: for remove  element anywerhere in array

// studentsName.slice(0, 2);
// console.log("students", studentsName);

// var getElements=studentsName.slice(0,4)
// console.log("getelement",getElements)
// console.log("studentsName",studentsName)[1, 2, 3].push(4); // [1, 2, 3, 4]
// [1, 2, 3].pop(); // [1, 2]
// [1, 2, 3].shift(); // [2, 3]
// [1, 2, 3].unshift(0); // [0, 1, 2, 3]
// ['a', 'b'].concat('c'); // ['a', 'b', 'c']
// ['a', 'b', 'c'].join('-'); // a-b-c
// ['a', 'b', 'c'].slice(1); // ['b', 'c']
// ['a', 'b', 'c'].indexOf('b'); // 1
// ['a', 'b', 'c'].includes('c'); // true
// [3, 5, 6, 8].find((n) => n % 2 === 0); // 6
// [2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
// [3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
// [1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
// [2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
// [2, 3, 4, 5].every((x) => x < 6); // true
// [3, 5, 6, 8].some((n) => n > 6); // true
// [1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
// [3, 5, 7, 8].at(-2); // 7

// concat
// var studentName = ["ali", "ahmad", "usama"];
// var fruitsName = ["apple", "orange", "mango"];
// var teacherName = ["bilal", "ahmad", "naveed"];
// ["ali", "ahmad", "usama", "apple", "orange", "mango"];

// var newArray = studentName.concat(fruitsName, teacherName);
// var newArray = [...studentName, ...fruitsName, ...teacherName];
// console.log("newArray", newArray);

// flat
// var newArray = [studentName, fruitsName, teacherName];
// console.log("newArray", newArray.flat());
// console.log("new array", newArray[0][1]);

// join

// var newArray = [///studentName, fruitsName, teacherName];
// var fruitsName = ["apple", "orange", "mango"];
// var joinedArray = fruitsName.join("");
// console.log("new array joint", joinedArray);
// console.log("new array", fruitsName);

// map
// var number = [2, 5, 6];
// for (var i = 0; i < number.length; i++) {
//   number[i] = number[i] * 3;
// }
// console.log("values", number);
// var numbers = [2, 5, 6];
// var newArray = numbers.map((item, index) => {
//   return item * 3;
// });

// console.log("number", numbers);
// console.log("newArray", newArray);

// filter
// var numbers = [2, 5, 6];
// var filtedArray = numbers.filter((item) => {
//   return item > 3;
// });
// console.log("filtered array", filtedArray);

// var studentNames = ["ali", "ahmad", "mujtb"];
// var filtedArray = studentNames.filter((item) => {
//   return item.length == 2;
// });
// console.log("filted", filtedArray);

// changing case

// var studentName = "Ahmad";
// console.log("uppwercase", studentName.toLowerCase());

// var studentNames = ["ali", "ahmad", "mujtb", "abdul hanan"];
// var lowerCaseStudentsName = studentNames.map((item, index) => {
//   //   return item.toUpperCase();
//   if (index % 2 !== 0) {
//     return item.toLowerCase();
//   }
//   return item.toUpperCase();
// });
// console.log("studentNames", studentNames);
// console.log("lowerCaseStudentsName", lowerCaseStudentsName);

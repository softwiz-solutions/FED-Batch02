var plan1Name = "Basic";
var plan1Price = 3.99;
var plan1Space = 100;
var plan1Data = 1000;
var plan1Pages = 10;
// var plan2Name = "Professional";
// var plan2Price = 5.99;
// var plan2Space = 500;
// var plan2Data = 5000;
//  var plan2Pages = 50;
//  var plan3Name = "Ultimate";
//  var plan3Price = 9.99;
//  var plan3Space = 2000;
//  var plan3Data = 20000;

// object
// syntax
// var objectName={
// property
// key:value
// }
// var plan = {
//   name: "Basic",
//   price: 34,
//   space: 500,
//   data: 5000,
// };

// console.log("plan", plan.name,plan.price);

var student1 = {
  name: "ali",
  age: 23,
  gender: "male",
  books: ["math", "english"],
};
var student2 = {
  name: "ahmad",
  age: 24,
  gender: "femail",
  books: ["comp", "english"],
};
// var student2 = {
//   name: "ahmad",
//   age: 23,
//   gender: "male",
//   books: ["math", "english"],
//   firstName: this.name,
//   calculateResult: function () {
//     return this.name;
//   },
// };
// student1.name = "ahmad";
// delete student1.age;
// student1.books.pop();
// console.log("student first name", student2.firstName);
// console.log("student2", student2.calculateResult());

// objects + arrays
// var student = [student1, student2];
var student = [
  {
    name: "ali",
    age: 23,
    gender: "male",
    books: ["math", "english"],
    teacher: {
      name: "abdul hanan",
    },
  },
  {
    name: "ahmad",
    age: 24,
    gender: "femail",
    books: ["comp", "english"],
    teacher: {
      name: "abdul hanan",
    },
  },
  {
    name: "zainab",
    age: 29,
    gender: "femail",
    books: ["comp", "english"],
    teacher: {
      name: "abdul hanan",
    },
  },
];
// console.log("student", student[0].teacher.name);
student.forEach(function (item, index) {
  console.log("item", item.teacher.name, "index", index);
});

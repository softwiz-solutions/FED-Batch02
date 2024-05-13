function dom() {
  let mainDiv = document.getElementById("mainDiv");
  console.log("🚀 ~ dom ~ mainDiv:", mainDiv.childNodes[1].childNodes[1]);
  let para = mainDiv.childNodes[1].childNodes[1];
  para.innerHTML = "hello world dom";
  para.nextSibling.innerHTML = "hello world next siblint";
}

function showGreaterNumber() {
  // const number1 = document.getElementById("number1").value;
  // console.log("number 1", number1);
  // const number2 = document.getElementById("number2").value;
  // console.log("number 2", number2);
  // if (number1 == "" && number2 == "") {
  //   alert("Please enter both number");
  //   return;
  // }
  // var result = parseInt(number1) + parseInt(number2);
  // console.log("result", result);
  // const para = document.getElementById("ans");
  // para.setAttribute("class", "para");
  // document.getElementById("number1").setAttribute("type", "password");
  // para.innerHTML = result;
  // var input = document.getElementById("number1").attributes;
  // console.log("input", input);
}

function sendMessage() {
  var parentDiv = document.getElementById("parentDiv");
  var childNode = document.createElement("p");

  childNode.innerHTML = "hello";
  childNode.setAttribute("class", "para");
  parentDiv.appendChild(childNode);
  console.log("note to add", nodeToAdd);
  // var newTxt = document.createTextNode("Hello!");
  // nodeToAdd.appendChild(newTxt);
}

// function submitForm() {
//   let userName = document.getElementById("userName");
//   let fatherName = document.getElementById("fatherName");
//   if (userName.value.length == 0 || fatherName.value.length == 0) {
//     alert("Please enter fill the complete form");
//     // userName.focus();
//     return;
//   }

//   document.getElementById("inputFatherName").innerHTML = fatherName.value;
//   document.getElementById("inputUserName").innerHTML = userName.value;
//   fatherName.value = "";
//   userName.value = "";
// }

function submitForm() {
  // let stateName = document.getElementById("states");
  // if (stateName.selectedIndex == 0) {
  //   alert("Pleaes select the country");
  // }
  // console.log("statenem", stateName.value);
  // for gender
  // let gender = document.getElementsByName("gender");
  // let userGender;
  // for (let i = 0; i < gender.length; i++) {
  //   if (gender[i].checked) {
  //     userGender = gender[i].value;
  //   }
  // }
  // console.log("gender", userGender);

  // for books
  let books = document.getElementsByName("books");
  let userBooks = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].checked) {
      userBooks.push(books[i].value);
    }
  }
  console.log("userBooks", userBooks);
}

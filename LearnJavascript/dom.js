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

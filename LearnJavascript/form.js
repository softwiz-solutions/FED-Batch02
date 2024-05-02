function getInputValue(id) {
  var input = document.getElementById(id).value;
  console.log("value", input);
  if (input == "") {
    alert("please enter your email");
  } else if (input.includes("@")) {
    alert("you enterd a valid email");
  } else {
    alert("please enter a valid email");
  }
}

function fillCity() {
  var zipNumber = document.getElementById("zip").value;
  console.log("zip", zipNumber);
  let cityName = "";
  if (zipNumber == 100) {
    cityName = "faisalabad";
  } else if (zipNumber == 101) {
    cityName = "lahore";
  } else {
    cityName = "isalamabad";
  }
  console.log("city name", cityName);
  document.getElementById("city").value = cityName;
}

function readMore() {
  let para = document.getElementById("para");
  para.innerHTML =
    "To make your document look professionally produced, Word provides header,footer, cover page, and text box designs that complement each other. Forexample, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the differentgalleries.Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the videothat best fits your document.";
}
function addList() {
  let list = "<ol><li>Math</li><li>Eng</li><li>Comp</li></ol>";
  document.getElementById("myFavBooks").innerHTML = list;
}

function selectPara() {
  let p = document.getElementsByTagName("p");
  console.log("p", p);
  for (let i = 0; i < p.length; i++) {
    p[i].className += "para-dark";
  }
}

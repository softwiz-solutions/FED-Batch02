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

function dom() {
  let mainDiv = document.getElementById("mainDiv");
  console.log("🚀 ~ dom ~ mainDiv:", mainDiv.childNodes[1].childNodes[1]);
  let para = mainDiv.childNodes[1].childNodes[1];
  para.innerHTML = "hello world dom";
  para.nextSibling.innerHTML = "hello world next siblint";
}

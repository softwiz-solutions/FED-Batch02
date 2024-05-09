function getWindowDetails() {
  let location = window.location.href;
  let pathName = window.location.pathname;
  console.log("🚀 ~ getWindowDetails ~ location:", location);
  console.log("🚀 ~ getWindowDetails ~ pathName:", pathName);
  console.log("🚀 ~ getWindowDetails ~ window:", window);
}

getWindowDetails();
function goToHome(location, id) {
  //   window.location.href = `http://127.0.0.1:5500${location}`;
  window.location.reload();
  let pathName = window.location.pathname;
  if (pathName == "/") {
    document.getElementById(id).innerHTML = "Home page";
  } else if (pathName == "/about.html") {
    document.getElementById(id).innerHTML = "about page";
  }
  //   console.log(`my location ${location}`);
}
function goBack() {
  history.back();
}
function goFarword() {
  history.forward();
}

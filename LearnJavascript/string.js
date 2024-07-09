// var userName = "ZaiNab";
// var lowercaseUserName=userName.toLowerCase()
// console.log("name=", userName.toUpperCase());
// if(userName.toLowerCase()=="zainab"){
//     console.log("name is matched")
// }
// console.log("username length",userName.slice(0,3))

// chapter 23 skip for now ****************

// chapter 24
// var userName = "Z!ain!a!b";
// // console.log("username", userName.charAt(userName.length - 3));
// var found = false;
// var counter = 0;
// for (var i = 0; i < userName.length; i++) {
//   if (userName.charAt(i) == "!") {
//     // console.log("! found");
//     found = true;
//     counter--;

//     // break;
//   }
// }
// if (found) {
//   console.log("matched", counter);
// } else {
//   console.log("not found", counter);
// }
// console.log("show");

// chapter 25 (half)

// var userName = "ali ahmad";
// // console.log("index",userName.indexOf(" ahmad"))
// var newUserName = userName.replace("a", "hassan");
// console.log("new user name", newUserName);

// let catches = {};
// n = [2, 3];
// catches[n] = 3;
// n = [5, 3];
// catches[n] = 54;
// n = [5, 3];
// catches[n] = 465;
// console.log("catch", catches[n]);
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(() => {
    console.log("working");

    return fn(...args);
  }, t);
  //   console.log("timeoutId", timeoutId);
  // Return a function that cancels the timeout
  return () => clearTimeout(timeoutId);
};

const result = [];
const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);
cancel();
// const maxT = Math.max(t, cancelTimeMs);

// setTimeout(cancel, cancelTimeMs);

// setTimeout(() => {
//   console.log(result); // [{"time":20,"returned":10}]
// }, maxT + 15);

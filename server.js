// These are the different ways to write a function

// function add(a, b) {
//   return a + b;
// }

// var add = function (a, b) {
//   return a + b;
// };

// var add = (a, b) => {
//   return a + b;
// };

// var add = (a, b) => a + b;
// var result = add(3, 7);
// console.log(result);

// IIFIE(imidiatelt invoked function)

// (function () {
//   console.log("Sachin");
// })();

// callBack function : calling a function within a function is known as callback function.
// function callback() {
//   console.log("Now adding is sucessfully conpleted");
// }

// const add = function (a, b, callback) {
//   var result = a + b;
//   console.log("result is:" + result);
//   callback();
// };

// add(3, 5, callback);

// another way of using callback function

// const add = function (a, b, sachin) {
//   var result = a + b;
//   console.log("result is:" + result);
//   sachin();
// };

// add(5, 6, function(){
//     console.log("Now adding is sucessfully completed");
// });

// or

// add(6, 8, () => console.log("Now adding is sucessfully completed"));

// FS module and OS:
/* var fs = require("fs");
var os = require("os");

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile("greeting.txt", "hey" + user.username + "!\n", () => {
  console.log("Done with the task");
});
*/

// Importing files:
/* const notes = require("./notes");
var age = notes.age;
var result = notes.addNumber(age,18);
console.log(age);
console.log(result);
*/

// importing lodash:

// const _ = require("lodash");
//  const data = ["person", "person", 1, 2, 1, 2, "name", "age", '2'];
//  var filter = _.uniq(data);
//  console.log(filter);

//  console.log(_.isString("false"));

// Json objects:
// #  Json String to Json Object:
// const jsonString = '{"name": "John", "age": 20, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString);    //This will convert Json String  into an object
// console.log(jsonObject.name);

// # json Object to Json String:

// const objectToConvert = {
//   name: "John",
//   age: 20,
// };
// const json = JSON.stringify(objectToConvert); // This will convert json object to string.
// console.log(json);
// json is string:
// console.log(typeof json);  // the output os "string"

// Creating a server using Express JS :
const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body




app.get("/", (req, res) => {
  res.send(
    "Welcome to my Hotel... How can i help you!, We have a list of Menus"
  );
});


// Importing the Router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

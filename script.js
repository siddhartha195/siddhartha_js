 //objects
//  const mysym = Symbol("key1")

const { rejects } = require("assert");
const { log, info } = require("console");
const { get } = require("http");
const { resolve } = require("path");

//         const JsUser = {
//             name : "siddhartha",
//             age : "20",
//             email : "siddhartha@google.com",
//             mobile : "4512369870",
//             [mysym] : "mykey1",
//         }

       // console.log(JsUser.email)
       // console.log(JsUser.name)
        //console.log(JsUser.age)
       // console.log(JsUser.mobile)
       // console.log(JsUser[mysym])


//array
// const Arr = [1, 2, 3, 4, 5, 6]
// const Heros = ["ironman", "superman"]

// const arr2 = new Array(1,2,3,4)
//console.log(Arr[0]);

//array method
// Arr.push(7)
// Arr.push(8)
// Arr.pop()
//console.log(Arr);

// Arr.unshift(9)
// Arr.shift()
//console.log(Arr);

//console.log(Arr.includes(9))
//console.log(Arr.indexOf(5))

//const newArr = Arr.join()
//console.log(newArr);

//slice, splice

//console.log("A", Arr);

//const myn1 = Arr.slice(1,3)

//console.log(myn1);
//console.log( "B",Arr);

//const myn2 = Arr.splice(1, 3)
//console.log("c", Arr);
//console.log(myn2);


//string

// const name = "siddhartha"
// const repoCount = 10

//console.log(name + repoCount + "value")

//console.log(`Hello  my name is ${name} and my repocount is ${repoCount}`);

//const gameName = new String('dcgaming')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(5));
//console.log(gameName.indexOf('g'));

//const newString = gameName.substring(0,5)
//console.log(newString);

//const anotherString = gameName.slice(-7, 4)
//console.log(anotherString);

//const newStringOne = "    dcgaming     "
//console.log(newStringOne.trim()); //trim use to cut the xtra space

//const url = "https://dcgaming.com/siddhatha%20onlinegaming"
//console.log(url.replace('%20', '-'));

//console.log(url.includes('siddhatha'));

//number method

//const a = true
//const b = false
//const c = 100
//const d = "100"
//const e = "Hello"
//const f = new Date()

//console.log("true:" + Number(a) );
//console.log("false:" + Number(b) );
//console.log("100:" + Number(c) );
//console.log(' "100:" ' + Number(d) );
//console.log(' "Hello:" ' + Number(e));
//console.log("Date:" + Number(f) );

//map filter reduce

//const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) =>{
    //return num > 4
//} )
//console.log(newNums);

//const myNumers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumers.map(  (num) => num + 10 )

//const newNums = myNumers
      //           .map( (num) => num * 10)
    //             .map( (num) => num + 1 )
  //               .filter( (num) => num >= 40 )  //( this is the channing method where we can use multiple method at the same time )
//console.log(newNums);

//const myNums = [1,2,3,4]

//const myTotal = myNums.reduce(function (acc, currval) {
    ///return acc + currval
//}, 0)

//console.log(myTotal);


//this function

//const user = {
  //name: 'siddhatha',
  //age: 25,

  //welcomeMessage: function() {
    //console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  //}
//}

//user.welcomeMessage()
//user.name = "sam"
//user.welcomeMessage()
//console.log(this);


//promise method

//const ride = new Promise((resolve, reject) => {
 // if (arrived) {
  //  resolve("You have arrived");
  //} else {
    //reject("You have not arrived");
    
  //}

//});

//console.log(ride);

//scope method global and local scope

//let a = 300  //(global scope)
//if (true) {
  //let a = 10
  //const b = 20
 // console.log( "INNER ", a, b);

//}

//console.log(a); 

//arrow function
//const chai = () => {
  //console.log("chai is a testing framework");

//}
//console.log(chai());

//const addtwo = (num1, num2) => {
  //return num1 + num2
//}

//console.log(addtwo(45,75))



//Declaration and expressions

//function sum(a, b) {
  //return a + b;
//}

//console.log(sum(12, 20))  //(there is sum is a declearation)


//expressions

//let sum = function (a, b) {
  //return a + b;
//}

//console.log(sum(2, 5));

//coercion type

// let num = 10;
// let str = "20";
// let result = num + str;

//console.log(result);       //(the two operands are of different dta types js will convert one of t the operand to match other )


//const let var


// const accountId = 451278
// let accountEmil = "dnew@google.com"
// var accountPassword = "120350"
// accountCity = "jaipur"


// accountEmil = "ewe@cc.com"
// accountPassword = "121212"
// accountCity = "benguluru"

// console.log(accountId);
// console.log(accountEmil);
// console.log(accountPassword);
// console.log(accountCity);

//or we can as use table 

// console.table([accountId, accountEmil, accountPassword, accountCity]) 



//Desstructuring 

// const userData = {
//   name : "siddhartha",
//   age : 20,
//   deg : "bca"

// }

// console.log(userData.name, userData.age, userData.deg);

// const userData = {
//   name : "siddhartha",
//   age : 20,
//   deg : "bca"

// }
// //using destructur method
// let { name, age, deg} = userData;
// console.log(`my name is ${name}, my age is  ${age}, my degree is ${deg }`)


//error handling

// setTimeout(() => {
//   console.log("sending massege..... please wait...");
// })

// try{
//   console.log("user offline");
// }
// catch(error){
//   console.log("user not availible error");
// }

// setTimeout(() =>{
//   console.log("message sent to the user");
// })

// setTimeout(() => {
//   console.log("message delivered to the user");
// })

// setTimeout(() => {
//   console.log("message read by the user");
// })


//parse

// let data = `{
//   "name": "siddhartha",
//   "age": 20,
//   "deg": "bca",
//   "passport_no": "451785242",
//   "address": {
//     "street": "abc",
//      "city": "barabanki",
//      "state": "up"
//   }   
// }`;

// let dobject = JSON.parse(data);
// console.log(dobject['name']);


//stringify

// let student = {
//   name: "siddhartha",
//   age: 20,
//   deg: "bca",
//   city: "delhi"

// }

// let jdata = JSON.stringify(student);

// console.log(jdata)


//currying

// function sendAutoEmail(to){
//   return function(subject){
//     return function (body){
//       console.log(`sent email to ${to} with the ${subject} to body ${body}`)
//     }
//   }
// }

// let step1 = sendAutoEmail("siddhartha@google.com")
// let step2 = step1("new order confirmation")
// let step3 = step2("your order is confirmed")

//2ndway by using arrow function

// const sendAutoEmail = (to) => (subject) => (body) => `sent email to ${to} with the ${subject} to body ${body}`
// let step1 = sendAutoEmail("siddhartha@google.com")
// let step2 = step1("new order confirmation")
// let step3 = step2("your order is confirmed")
// console.log(step3)


// function add (a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c
//     }
//   }
// } 
// console.log(add(2) (5) (8));

//or we can use arrow function 

// const add = (a) => (b) => (c) => a+b+c;
// console.log(add(2)(5)(8));




//SYNCHRONOUS

//console.log("hello siddhartha")
//console.log("world siddhartha")
//console.log("hello siddhartha") //this will be printed after world siddhar


//ASYNCHRONOUS

// console.log("please wait your order is in progress");
// setTimeout(() => {
//   console.log("your order is confirmed");
// }, 1000);
// console.log("your order is in progress"); //this will be printed before your order is confirmed



//promises
// let a = 10;
// let b = 20;

// let result = a + b;

// const ride = new Promise((resolve, reject) => {
//   if ("arrived") {
//     resolve("You have arrived");
//   } else {
//     reject("You have not arrived");
    
//   }

// });

// async function main() {
//   console.log(result);
//   try {
//     const rideResult = await ride;
//     console.log(rideResult);
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();

// console.log(result);
// console.log(ride); //this will be printed before result



//closure example

// function init(multiplier){
//   return function multiply(number){
//     return number * multiplier;
//     }
// }
// const double = init(2);
// const triple = init(3);
// console.log(double(5)); //10



//garbage collection
// let a = 10;
// let b = 20;
// let c = a;
// a = 30;
// console.log(c); //10
// c = null;
// console.log(c); //null
// console.log(a); //30
// console.log(b); //20


//event loop //the event loop is the machanishm in js that handles asynchronus operations it decide which code will executed and when.

// console.log("start..")

// setTimeout(() => {
//   console.log("settimeout callback");
// });
// Promise.resolve().then(() =>{
//   console.log("promise resolve");
// })
// console.log("end..")



//macrotask queue
 //represent border often I/O related operations
//like settimeout, setinterval, setimmediate
//executed one by one by macro task queue

//  console.log("start..")
//  setTimeout(() =>
//    {
//    console.log("settimeout callback");
//  }, 0);
// console.log("end..")

//microtask queue

//represent smaller more immediate operations
//like promise callback, queueMicrotask, process.nextTick(in node js)
//extended immediately after the current macro task before the next macro task

//  console.log("start..")
//  Promise.resolve().then(() =>
//      {
//    console.log("promise resolve");
//  });
//    console.log("end..")


//stack memory(primitive type)(number, boolean)

//stack memory is used for function call stack
//it is a LIFO(last in first out) data structure
//it is used to store the function call stack
// let myName = "siddharthaSrivastava"

// let anothername = "siddharthaSrivastava"
// anothername = "princesrivastava"

// console.log(myName);
// console.log(anothername);


//Example2

// let userOne = {
//   name: "siddharthaSrivastava",
//   age: 25,
// }

// let userTwo = userOne
// userTwo.name = "princesrivastava"
// console.log(userOne.name);
// console.log(userTwo.name);


//heap memory(non primitive)
//heap memory is used for storing objects, arrays, functions etc.
//it is a dynamic memory allocation
//it is used to store the objects and arrays etc.
//heap memory is used for storing objects, arrays, functions etc.
//it is a dynamic memory allocation



//hoisting
//we can use any variable before its decleartion

// console.log(a);
// var a = 10;

// console.log(a);

// Sum (10,20)
// function Sum(a,b){
//   console.log(a+b);
//   }
  
//object in depth
// const person = {
//   name: "siddhartha",
//   age: 30,
//   isStudent: false
// };
// console.log([person.name],[person.age],[person.isStudent]);


// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "blue"
// };
// console.log(car.make,car.model,car.year,car.color);




// const user = {
//   id: 101,
//   profile: {
//     name: "siddhartha srivastava",
//     email: "siddhartha@google.com"
//   }
// };
// console.log(user.id,user.profile.name,user.profile.email);



// const calculator = {
//   add: function(a, b) {
//     return a + b;
//   }
// };
// console.log(calculator.add(10, 20));



// const book = new Object();
// book.title = "1984";
// book.author = "George Orwell";
// console.log(book.title,book.author);



// function greet(name) {
//   return `Hello, ${name}!`;
// }
// greet.language = "English"; // functions are also objects
// console.log(greet.language);



// const key = "score";
// const game = {
//   [key]: 95
// };
// console.log(game.score);


// const id = Symbol("id");
// const user = {
//   name: "Emma",
//   [id]: 1234
// };
// console.log(user.id); 



//aaray all method

//push method
// const fruits = ["apple", "banana"];
// fruits.push("cherry");
// console.log(fruits); 
// console.log(fruits.length); 



//pop method

// const fruits = ["apple", "banana", "cherry"];
// fruits.pop();
// console.log(fruits); 
// console.log(fruits.length); 



//shift method

// const numbers = [10, 20, 30];
// numbers.shift();
// console.log(numbers); 


//unshift method
// const numbers = [20, 30];
// numbers.unshift(10);
// console.log(numbers); 


//map method

// const nums = [1, 2, 3];
// const squared = nums.map(n => n * n);
// console.log(squared); 
// console.log(nums); 


//filter method


// const nums = [1, 2, 3, 4];
// const even = nums.filter(n => n % 2 === 0);
// console.log(even); 
// console.log(nums); 



//reduce method

// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); 
// console.log(nums);


//find method

// const users = [{ id: 1 }, { id: 2 }];
// const found = users.find(user => user.id === 2);
// console.log(found); 
// console.log(users); 



//include method

// const colors = ["red", "blue", "green"];
// console.log(colors.includes("white")); 
// console.log(colors.includes("red"));  



//sort method

// const nums = [3, 1, 4, 2];
// nums.sort();
// console.log(nums); // [1, 2, 3, 4]


// nums.sort((a, b) =>
//   a - b
// );
// console.log(nums); 


//string

//String with Template Literals (Backticks)
// const name = "Bob";
// const message = `Hello, ${name}!`;
// console.log(name); 
// console.log(message); 

// // Multiline String using Template Literals
// const poem = `Roses are red,
// Violets are blue,
// JavaScript is awesome,
// And so are you!`;
// console.log(poem);


// //String with Escape Characters
// const str = "Hello, \n world!";
// console.log(str); 


// //Concatenated String

// const first = "Hello";
// const second = "World";
// const combined = first + " " + second;
// console.log(combined);


// //String from a Number
// const age = String(25); // "25"
// console.log(age);


// //String as a Character Array

// const word = "code";
// console.log(word[0]); 
// console.log(word[1]); 


// //Empty String

// const empty = "";
// console.log(empty);


// //String with Unicode Characters

// const emoji = "I love JavaScript ❤️";
// console.log(emoji);



//promise method in js
//fake api cll
// function fakeFetch() {
//   return new Promise((resolve, reject) => {
//     let success = true;
//     setTimeout(() => {
//       success ? resolve("Data") : reject("Error");
//     }, 2000);
//   });
// }

// fakeFetch().then(console.log).catch(console.error);
// console.log(fakeFetch()); 


// //delay with example (settimeout)
// let delay = new Promise((resolve) => {
//   setTimeout(() => resolve("3 sec delay"), 3000);
// });

// delay.then(msg => console.log(msg));
// console.log(delay);  

//File Read
// function readFile(file) {
//   return new Promise((resolve, reject) => {
//     if (file === "data.txt") {
//       resolve("file read");
//     } else {
//       reject("file not found");
//     }
//   });
// }

// readFile("data.txt").then(console.log).catch(console.error);
// console.log(readFile("data.txt"));

//User Login Simulation
// function login(username, password) {
//   return new Promise((resolve, reject) => {
//     if (username === "admin" && password === "1234") {
//       resolve("Login successful");
//     } else {
//       reject("Login failed");
//     }
//   });
// }

// login("admin", "1234").then(console.log).catch(console.error);
// console.log(login("admin", "1234"));


//image load

// function loadImage(url) {
//   return new Promise((resolve, reject) => {
//     let img = new Image();
//     img.src = url;
//     img.onload = () => resolve("Image Loaded");
//     img.onerror = () => reject("Image Error");
//   });
// }

// loadImage("https://random-image-pepebigotes.vercel.app/api/random-image").then(console.log).catch(console.error);


// multiple promise with using promish all

// let p1 = Promise.resolve("Data1");
// let p2 = Promise.resolve("Data2");

// Promise.all([p1, p2]).then(results => console.log(results));


//  chaning promise

// new Promise((resolve) => resolve(10))
//   .then(num => num * 2)
//   .then(result => console.log("Result:", result));


 // handling error with catch

//   new Promise((_, reject) => reject("something went wrong"))
//   .then(result => console.log(result))
//   .catch(error => console.error("Error:", error));


//   // finally 

//   new Promise((resolve) => resolve("work complete"))
//   .then(result => console.log(result))
//   .finally(() => console.log("always running"));


//   // conditional resolve/ reject

//   function checkAge(age) {
//   return new Promise((resolve, reject) => {
//     age >= 18 ? resolve("Adult") : reject("Minor");
//   });
// }

// checkAge(20).then(console.log).catch(console.error);
// checkAge(15).then(console.log).catch(console.error);


// destructuring //
// destructuring is a feature of a js which helps to find out the values from array/objects to direct assign in the variables.
// it is a shorthand way to assign values from array/objects to variables.
// it is a way to unpack values from arrays or objects into distinct variables.
// it is a way to assign values from arrays or objects to variables in a more readable way.



// Array Destructuring

// let [x, y] = [5, 10];
// console.log(x); // 5
// console.log(y); // 10


// Skipping Items

// let [a, , c] = [1, 2, 3];
// console.log(a); 
// console.log(c); 


// Swap Values

// let p = 1, q = 2;
// [p, q] = [q, p];
// console.log(p, q); 


// Default Values

// let [m = 5, n = 10] = [7];
// console.log(m); 
// console.log(n); 


//Nested Array Destructuring

// let [a, [b, c]] = [1, [2, 3]];
// console.log(a); 
// console.log(b); 
// console.log(c); 


//  Object Destructuring

// let person = { name: "Ravi", city: "Delhi" };
// let { name, city } = person;
// console.log(name);
// console.log(city); 


// Rename Variables

// let { name: userName } = { name: "Sunil" };
// console.log(userName); 
// console.log(name);


// Default Values in Objects

// let { age = 18 } = {};
// console.log(age); 


// Nested Object Destructuring

// let user = {
//   id: 1,
//   profile: {
//     firstName: "Anil",
//     lastName: "Kumar"
//   }
// };

// let { profile: { firstName, lastName } } = user;
// console.log(firstName); 
// console.log(lastName);
//or

// let student = {
//   id: 101,
//   info: {
//     name: "Ravi",
//     address: {
//       city: "Delhi",
//       zip: 110001
//     }
//   }
// };

// let {
//   info: {
//     name,
//     address: { city, zip }
//   }
// } = student;

// console.log(name); 
// console.log(city); 
// console.log(zip);  

//  Function Parameter Destructuring

// function show({ title, year }) {
//   console.log(`${title} was released in ${year}`);
// }

// let movie = { title: "3 Idiots", year: 2009 };
// show(movie); 


//loops

 //for loop
// let i = 0;

// for (i = 1; i <= 5; i++) {
//   console.log("i =", i)
// }
// console.log ("i++ =",i++);



 //while loop

// let a = 10;
// while(a <= 10){
//   console.log("a =", a);
//   a++;
// }
// console.log("a++ =", a)


//do while loop

// let x = 2;
// do{
//   console.log("x =", x);
//   x++;
// } while (x <= 5)


//for of loop

// let m = [1,2,3,4,5,6,7,8,9];
// for (let num of m) {
//   console.log(num);
//   }


//for in loop

// let student = {
//   name: "siddhartha",
//   age: 20,
//   grade: 90
// };
// for (let key in student) {
//   console.log(key, student[key]);
// }

// for loop is used for repeeting work with count.
//while loop is used to check the condition first anf if the condition is true then run .
//do while loop is used to run the code first and then check the condition.
//for of loop is used to iterate over the array.
//for in loop is used to iterate over the object.



//js statement 
// in js statement is a instructions which is read one by one by the browser and then execute .
//js statement can be a variable declaration, function declaration, expression, control flow statement, etc.
//js statement can be used to declare a variable, assign a value to a variable, perform an operation, make a decision, loop through a set of values, etc.


//1. Variable Declaration Statement
// let name = "Rahul";
// console.log(name);
// // here's the name is a variable 


// Assignment Statement
// let age;
// age = 10;
// console.log ("age =", age);


//Conditional Statement (if)

// if (age >= 18) {
//   console.log("you are eligible to vote");
// }
// here's the if statement is used to check the condition and if the condition is true then print


// if-else Statement

// if (age >= 18 ) {
//   console.log("you are eligible to vote");
// } else {
//   console.log("you are not eligible to vote");
// }
// here's the if-else statement is used to check the condition and if the condition is tru


//Loop Statement (for loop)

// for (let i = 1; i <=5; i++ ){
//   console.log(i);
// }
// here's the for loop is used to iterate over the array and print the value of i from


// Function Declaration Statement

// function greet() {
//   console.log("hello sir");
// }
// greet();



//Switch Statement

// let day = 0;
// switch (day) {
//   case 1: console.log("monday"); break;
//   case 2: console.log("tuesday"); break;
//   default: console.log("error");
// }


//Return Statement (inside function)
// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 6));  


//Break Statement

// for(let x = 1; x <= 10; x++ ) {
//   if (x == 5)break;
//   console.log(x);

// }


// Statement Type	               work
// Declaration	           Variable/function banana 
// Assignment	                Value dena
// Conditional	             decision lena (if/else)
// Loop	                   baar baar koi kaam krna
// Function Call	         any function ko chalana
// Break/Continue	          Loop ko control karna



//Object Methods //

//structure of object method
// let person = {
//   name: "Ravi",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };
// person.greet(); 
//here's the greet is a method which inside the object

//simple method inside object
// let car = {
//   brand: "Tata",
//   modal: "safari",
//   start: function() {
//     console.log("Car started");
//   }
// }
// car.start();


//Method using this keyword

// let user = {
//   name: "ravi",
//   sayHello: function() {
//     console.log("hello, "+ this.name);
//   }
// };
// user.sayHello();


//the defrence between arrow function and this function

// let student = {
//   name: "Riya",
//   show: () => {
//     console.log("name is " + this.name);
//   }
// };
// student.show(); // undefined
// here's the this keyword is not working as expected because of arrow function and the result is undifined


//Object के अंदर calculation करने वाला method

// let calculator = {
//   add: function(a, b){
//     return a + b;
//   }
// };
// console.log(calculator.add(15, 95));


//calling one method to inside a method

// let person = {
//   name: "Rohan",
//   greet: function () {
//     console.log("Hello!");
//   },
//   intro: function () {
//     this.greet();
//     console.log("I am " + this.name);
//   }
// };

// person.intro();


//define shorthand to function inside the object

// let laptop = {
//   brand: "HP",
//   show() {
//     console.log("Laptop brand: " + this.brand);
//   }
// };

// laptop.show(); 


//changing the value of object by method

// let light = {
//   status: "off",
//   toggle: function () {
//     this.status = this.status === "off" ? "on" : "off";
//   }
// };

// light.toggle();
// console.log(light.status); 


//object mai method se input lena

// let user = {
//   setName: function (newName) {
//     this.name = newName;
//   }
// };

// user.setName("Neha");
// console.log(user.name); 


//nested object method in object

// let employee = {
//   info: {
//     name: "Vikram",
//     showName: function () {
//       console.log("Employee: " + this.name);
//     }
//   }
// };

// employee.info.showName(); 


//assign object method by diffrent function

// function speak() {
//   console.log("I can speak");
// }

// let robot = {
//   talk: speak
// };

// robot.talk(); 
  
// type of method                   work
// Simple Method	             perform the action
// this                     access the object data
// Arrow Method              (avoid) this is not work in the arrow
// Calculation Method         	plus minus divied 
// Update Method	            changing the object value



// Garbage Collection //

// Unused Variable Automatically Removed

// let a = {
//   name: "Rahul"
// };

// a = null;



// Function Scope Example

// function greet() {
//   let msg = "Hello"; // function scope
// }

// greet(); 
// console.log(msg); 
// ReferenceError: msg is not defined


// Object loses reference

// let user = {
//   name: "Amit"
// };

// user = { age: 30 }; 


// Multiple variables referencing same object

// let obj1 = { value: 100 };
// let obj2 = obj1;

// obj1 = null; 
// console.log(obj1); // undefined


// Manual reference remove

// let data = {
//   name: "Test"
// };

// data = undefined; 
// console.log(data); 


//Circular Reference (Handled by modern JS)

// let a = {};
// let b = {};

// a.ref = b;
// b.ref = a;

// a = null;
// b = null;

// console.log(a); // undefined
// console.log(b); // undefined


//Global Object Never Collected

// let name = "JavaScript"; // global scope
// globalThis.console.log(name); 


// // Array becomes unused

// let arr = [1, 2, 3, 4];
// arr = null;
// console.log(arr);


// Object property reference removed


// let person = {
//   details: {
//     name: "Ravi"
//   }
// };

// person.details = null;
// console.log(person.details);


// Function returns object, but we ignore

// function makeUser() {
//   return {
//     name: "Sam"
//   };
// }

// makeUser(); 
// console.log(makeUser());



// example                                    what happend
// Variable null                          memory free
// Function delete                        inside variable also delete 
// Circular references                   modern js automatically manage
// Referencing object delete             convert into garbage
// Global variable	                    will remain there as long as the page is open



// memory heap //

// In JavaScript, whenever you create a variable, object, array or function, memory is allocated for it.
// JavaScript divides this memory into two parts:

// Call Stack – where function calls are managed

// Memory Heap – where the memory of variables, objects, arrays etc. is stored


// The Memory Heap is where JavaScript stores the data for your objects, arrays, closures, and functions in memory.

// It is an unstructured memory pool, meaning the memory is not in any structure, but JavaScript manages it.



// Simple Object Heap in Store

// let user = { name: "Ravi" };
// user object is stored in memory heap


// Array is stored in Heap

// let numbers = [1, 2, 3, 4];
// numbers array is stored in memory heap


// Creating an object inside a function

// function createUser() {
//   let obj = { id: 1 };
//   return obj;
// }

// let user = createUser();
// console.log(createUser(obj1));


// Function is stored in Closure Heap

// function outer() {
//   let message = "Hello";
//   return function inner() {
//     console.log(message);
//   };
// }

// let greet = outer();
// greet();


// Multiple variables pointing to same heap memory

// let x = { lang: "JS" };
// let b = x;
// console.log(b);



// freeing heap memory from null

// let obj = { key: "value" };
// obj = null;
// console.log(obj);


// Nested objects are in the heap

// let employee = {
//   name: "Amit",
//   address: {
//     city: "Delhi"
//   }
// };
// console.log( employee.name, employee.address);


// object inside array

// let items = [{ id: 1 }, { id: 2 }];
// console.log(items[0].id, items[1].id);


// function as object in heap

// let fun = function () {
//   console.log("Hi");
// };
// console.log(fun.toString());


// Memory Leak Example (Do not move from heap)

// let cache = {};
// function storeData(data) {
//   cache[data.id] = data;
// }
// storeData({ id: 1, name: "Amit" });
// storeData({ id: 2, name: "Rahul" });
// If we don't clear the cache, it will cause a memory leak
// because the objects are still referenced in the cache.




// JSON.stringify //


// JSON.stringify() is a method that converts a JavaScript object into a JSON string.
// JSON.stringify() is a JavaScript method that converts a JavaScript object or array to JSON (string format).

// Convert the object or array to a string that you can send over the network (such as in an API call)
// save to local storage or write to a file


//  Syntax:
// 'JSON.stringify(value, replacer, space);'
// value: The object or array to be stringified.

// replacer (optional): The property to keep or remove.

// space (optional): For formatting (indentation).


// convert basic object onto string

// let user = { name: "Amit", age: 25 };
// let jsonString = JSON.stringify(user);
// console.log(jsonString);  // {"name":"Amit","age":25}


// stringifying an array

// let fruits = ["apple", "banana", "mango"];
// console.log(JSON.stringify(fruits));


// Stringify Nested Object

// let person = {
//   name: "Ravi",
//   address: {
//     city: "Delhi",
//     pin: 110001
//   }
// };
// console.log(JSON.stringify(person));


// Stringify with indentation (pretty print)

// let data = { name: "Riya", age: 22 };
// console.log(JSON.stringify(data, null, 2));


// Stringify with replacer (only some properties)

// let user = { name: "Aman", age: 26, city: "Mumbai" };
// console.log(JSON.stringify(user, ["name", "city"]));


// Function property is not stringified


// let obj = {
//   name: "Ravi",
//   greet: function () { return "Hello"; }
// };

// console.log(JSON.stringify(obj));


// undefined value is not stringified

// let obj = {
//   name: "Riya",
//   age: undefined
// };
// console.log(JSON.stringify(obj));
//undifined property is not valid in JSON stringify


// stringify date object

// let obj = {
//   today: new Date()
// };
// console.log(JSON.stringify(obj));


// Boolean, Number, String can also be stringified

// console.log(JSON.stringify(true));
// console.log(JSON.stringify(123));
// console.log(JSON.stringify("Hello"));


// Stringify and store in localStorage

// let user = { name: "Nina", role: "admin" };
// localStorage.setItem("user", JSON.stringify(user));
// console.log(JSON.stringify(user));


//send data to the server
//convert object into string
//convert data to readable string



// scope //

//Scope means – from where a variable or function can be accessed.In JavaScript, scope decides which variable can be seen or changed from where.

//type of scope- global scope 
//local scope
//block scope
//function scope
//lexical scope
//let and const scope
//var scope


//  Global Scope

// let name = "Amit";

// function greet() {
//   console.log(name);  // "Amit"
// }
// greet();
// Global scope variables can be accessed from anywhere in the code.


// Function Scope

// function sayHello() {
//   let message = "Hello!";
//   console.log(message);
// }

// sayHello();
// Function scope variables can be accessed only within the function where they are declared.


// Block Scope (let and const)

// {
//   let age = 25;
//   console.log(age); 
// }
// Block scope variables can be accessed only within the block where they are declared.


// Var is function-scoped, not block-scoped

// {
//   var city = "Delhi";
// }
// console.log(city);
// Var is function-scoped, not block-scoped. It can be accessed outside the block wher


//  Nested Scope (Function inside Function)

// function outer() {
//   let outerVar = "I am outer";

//   function inner() {
//     console.log(outerVar); 
//   }

//   inner();
// }
// outer();
// Nested scope variables can be accessed only within the inner function where they are declared.


// Lexical Scope

// function outer (){
//   let x = 10;

//   return function inner() {
//     console.log(x); 
//   };
// }

// let myFunc = outer();
// myFunc();
// Lexical scope variables can be accessed only within the inner function where they are declared.


//  Function vs Block Scope

// function test() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//   }
//   console.log(a); 
// }
// test();
// var works even outside the block, let and const do not.


// Re-declaration in same scope (let vs var)
// var a = 5;
// var a = 10;  

// let b = 5;
// let b = 10;  // Error: Identifier 'b' has already been declared
// console.log(a);
// var can be re-declared, let cannot.
// var allows duplicate; let and const do not in same scope.


// Scope in loops

// for ( let i = 0; i < 5; i++){
//   console.log(i);
// }




//currying //

// Currying is a technique in which a function is written in such a way that it takes only one argument at a time and returns a new function each time, which takes the next argument.This is a technique of Functional Programming.


// Normal Function vs Currying Function

// normal function
// function sum (a,b,c) {
//   return a + b + c;
// }
// console.log(sum(4, 5, 8));


// currying function

// function sum (a){
//   return function(b){
//     return function(c){
//       return a + b + c;
//     }
//   }
// }

// console.log(sum(4)(5)(8)); 


// Simple Addition

// function add (a) {
//   return function(b) {
//     return a + b ;
//   }
// }
// console.log(add(5)(48));


// Multiplication

// function multiply (a){
//   return function (b){
//     return function(c){
//       return a * b * c ;
//     }
//   }
// }
// console.log(multiply(5)(8)(9));


// Greeting Message

// function greet (greeting) {
//   return function(name) {
//     return greeting + ' ,' + name;
// }
// }

// console.log (greet("namaste")("rahul"));


// String Join

// function join (separator) {
//   return function(strings1) {
//     return function(strings2) {
//       return strings1 + separator + strings2; 
//     }
//   }
// }
// console.log(join("-")("hello")("world"));


// Area of Rectangle

// function area(length) {
//   return function(width) {
//     return length * width;
//   };
// }
// console.log(area(10)(5));


// Power Function

// function power(base) {
//   return function(exp) {
//     return Math.pow(base, exp);
//   };
// }
// console.log(power(2)(3));


// Logging Currying

// function login (level) {
//   return function(message) {
//     console.log(`[${level.toUpperCase()}] ${message}`);
//   };
// }
// const info = login("info");
// info("Server started");


// Tax Calculator

// function tax(rate) {
//   return function(amount) {
//     return amount + (amount * rate);
//   };
// }
// console.log(tax(0.18)(1000));


// Personalized Message

// function message(firstName) {
//   return function(lastName) {
//     return function(age) {
//       return `Hello ${firstName} ${lastName}, age is ${age}`;
//     };
//   };
// }
// console.log(message("Sita")("Devi")(25));


// Currying with Arrow Functions

// const sum = a => b => c => a + b + c;
// console.log(sum(1)(2)(3));




// Error Handling in JavaScript

// When there is an error in our code, JavaScript allows us to catch and handle that error so that the program does not crash and the user gets the correct message.

// Methods of Error Handling in JavaScript:

// try – In which we write code that can throw an error.

// catch – To catch an error if it occurs.

//finally – Will always run, whether an error occurs or not.

// throw – To throw an error yourself.



//  Basic try-catch

// try {
//   let a = b + 10;  
// } catch (error) {
//   console.log("Error aaya: " + error.message);
// }


// Arithmetic Error

// try {
//   let result = 10 / 0;
//   console.log(result);
// } catch (err) {
//   console.log("Error: " + err.message);
// }


// Type Error

// try {
//   null.f();
// } catch (e) {
//   console.log(" find error" + e.message);
// }


// Custom Error using throw

// try {
//   let age = 15;
//   if (age < 18) {
//     throw "you are a minor";
//   }
// } catch (e) {
//   console.log("Custom Error: " + e);
// }


// use of Error Object

// try {
//   throw new Error("something is wrong")
// }catch (e) {
//   console.log (e.name);
//   console.log(e.message);
// }


// finally block

// try {
//   console.log("run try block");
// }catch (e) {
//   console.log("error find");
// } finally {
//   console.log("always run finaaly block");
// }


// Error handling in function

// function divide (a,b) {
//   try {
//     if (b == 0) throw "cannot be divided by 0"
//     return a/b;
//   }catch (e) {
//     return e;
//   }
// }
// console.log(divide(10, 0))


//  JSON Parse Error

// try {
//   let user = JSON.parse('{"name": "Amit"'); // गलत JSON
// } catch (e) {
//   console.log("JSON Parse Error: " + e.message);
// }



// DOM Access Error

// try {
//   document.getElementById("myBtn").click();
// }catch (e) {
//   console.log("DOM ACCESS ERROR" + e.message);
// }



// Multiple Custom Conditions

// function checkPassword(password) {
//   try {
//     if (password.length < 6) throw "Password is too short";
//     if (!/[A-Z]/.test(password)) throw "minimum one Capital Letter";
//     return "Right password";
//   } catch (e) {
//     return "Error: " + e;
//   }
// }
// console.log(checkPassword("abc"));


// Keyword                           usage
// try                         to safely execute code that has potential errors
// catch                       to catch and deal with errors
// throw                       to manually throw a custom error
// finally                     finally is always executed – whether an error occurs or not





// Asynchrouns javascript //
// When there is some work that takes time to complete (eg: fetching data from the server, reading a file, or a timer), it is done asynchronously so that the rest of the code does not stop.

// There are 3 ways to do asynchronous work in JavaScript:

// Callbacks

// Promises

// Async / Await


// SetTimeout

// console.log ("1 - start");
// setTimeout(() => {
//   console.log("2 - second later");
// }, 2000);
// console.log ("3 - end");


// callback function

// function greet(greeting) {
//   return function(name) {
//     return greeting + " " + name;
//   };
// }

// console.log( greet("Namaste")("Rahul") );  


//  Callback Hell (Nested Callbacks)

// setTimeout(() => {
//   console.log("step1");
//   setTimeout(() =>{
//     console.log("step2");
//     setTimeout(() => {
//       console.log("step3");
//     }, 1000);
//   }, 1000);
// }, 1000);


//  Promise – Asynchronous

// let mypromise = new Promise((resolve, reject) => {
//   let success = true;
//   if(success) resolve ("work finish");
//   else reject ("work failed");
// });
// mypromise.then(result => console.log(result)).catch(err => console.log(err));


// Fetch API (Fetching Data from Server - Asynchronous)
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(Response => Response.json())
// .then(data => console.log(data));


// Async / Await – making Promises easier

// async function getData() {
//   let responce = await fetch ('https://jsonplaceholder.typicode.com/posts/55');
//   let data = await responce.json();
//   console.log(data);
// }
// getData();



// Error Handling in Async Function

// async function fetchData() {
//   try {
//     let response = await fetch('https://example.com/data'); 
//     if (!response.ok) {
//       throw new Error("HTTP error! Status: " + response.status);
//     }

//     const contentType = response.headers.get("content-type");
//     if (!contentType || !contentType.includes("application/json")) {
//       throw new Error("Invalid content type: " + contentType);
//     }

//     let data = await response.json();
//     console.log(" JSON data :", data);
//   } catch (error) {
//     console.error(" Error :", error.message);
//   }
// }
// fetchData();


// Promise.all – running multiple Promises simultaneously

// let p1 = Promise.resolve(10);
// let p2 = Promise.resolve(20);

// Promise.all([p1, p2]).then(values => console.log(values));



// Chaining Promises

// let promise = new Promise((resolve) => {
//   setTimeout(() => resolve(5), 1000);
// });

// promise
//   .then((num) => {
//     console.log("first number:", num);
//     return num * 2;
//   })
//   .then((result) => {
//     console.log("doubal:", result);
//   });



// Closure //

// Closure is a function that remembers the variables of its outer scope, even if that scope is over.

// "Closure = Function + its surrounding lexical environment"
// When an inner function accesses the variables of its outer function, it is called closure.
// Closure is a function that has access to its outer function's scope, even when the outer function

// Basic Closure
// function outer() {
//   let name = "Siddhartha1";
//   function inner() {
//     console.log(name); // Accessing outer variable
//   }
//   return inner;
// }

// let greet = outer();
// greet();


// Counter Function

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   }
// }

// let inc = counter();
// inc(); 
// inc();



//  Private Variables with Closures

// function secretBox() {
//   let secret = "hidden value";
//   return {
//     getSecret: function() {
//       return secret;
//     },
//     setSecret: function(newVal) {
//       secret = newVal;
//     }
//   }
// }

// let box = secretBox();
// console.log(box.getSecret());
// box.setSecret("new secret");
// console.log(box.getSecret()); 


// Function Factory

// function multiplyBy(x) {
//   return function(y) {
//     return x * y;
//   };
// }

// let double = multiplyBy(2);
// console.log(double(5));


// Loop with Closure Problem (var)

// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i); 
//   }, 1000);
// }


//  Loop with Closure Fix (let )

// for (let i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i); 
//   }, 1000);
// }


// Closure inside IIFE (Immediately Invoked Function Expression)

// let result = (function () {
//   let score = 100;
//   return function () {
//     return score;
//   };
// })();

// console.log(result()); 


// Nested Closures 

// function a() {
//   let valA = "A";
//   function b() {
//     let valB = "B";
//     function c() {
//       console.log(valA + valB);
//     }
//     return c;
//   }
//   return b();
// }

// let final = a();
// final(); 


// Function with State

// function likeButton() {
//   let likes = 0;
//   return function () {
//     likes++;
//     console.log("❤️ Likes: " + likes);
//   };
// }

// let like = likeButton();
// like(); 
// like(); 


// Real Life Example - Timer

// function createTimer() {
//   let time = 0;
//   return function () {
//     time += 1;
//     return time + " second";
//   }
// }

// let timer = createTimer();
// console.log(timer()); 
// console.log(timer());


// Benefits of closure:
// Data encapsulation (private variables)
// Memory efficient functions
// Easy to create factory functions
// Real-world use cases: timers, event handlers, React hooks, etc.

// Closures are created when:
// There is a function inside a function/
// The inner function is using the outer variable
// It is returned or passed outside the inner function



// Micro task and macrotask queue 

// Queue	                                Example	                                                  Priority
// Microtask Queue	       Promise.then, MutationObserver, queueMicrotask     	                 higher priority
// Macrotask Queue	       setTimeout, setInterval, setImmediate, DOM Events	                   low priority

// The Event Loop executes Microtasks first, then Macrotasks.


//  setTimeout (Macrotask)

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");


// Promise.then (Microtask)

// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
// });

// console.log("C");


// Microtask and Macrotask together

// setTimeout(() => console.log("Macrotask"), 0);

// Promise.resolve().then(() => console.log("Microtask"));


// Multiple Microtasks

// Promise.resolve().then(() => console.log("Microtask 1"));
// Promise.resolve().then(() => console.log("Microtask 2"));


// Nested Promise (Microtask inside Microtask)

// Promise.resolve().then(() => {
//   console.log("First");
//   return Promise.resolve();
// }).then(() => {
//   console.log("Second");
// });


// setTimeout + Promise Inside (Microtask inside Macrotask)

// setTimeout(() => {
//   console.log("Timer");
//   Promise.resolve().then(() => console.log("Promise inside setTimeout"));
// }, 0);


//async/await = Microtask

// async function test() {
//   console.log("1");
//   await null;
//   console.log("2");
// }

// test();
// console.log("3");


// queueMicrotask (Manual Microtask)

// queueMicrotask(() => console.log("Microtask via queueMicrotask"));
// console.log("Main thread");


// Multiple Macrotasks with Delays

// setTimeout(() => console.log("1s delay"), 1000);
// setTimeout(() => console.log("0s delay"), 0);


//  Mixing all together

// console.log("Start");

// setTimeout(() => console.log("setTimeout"), 0);

// Promise.resolve().then(() => console.log("Promise 1"));

// queueMicrotask(() => console.log("Microtask 1"));

// Promise.resolve().then(() => console.log("Promise 2"));

// console.log("End");



// Conclusion
// Microtasks are always executed first, even if the macrotask is scheduled first.



//Execution context //
// Whenever a code runs in JavaScript, an Execution Context is created for it.Execution Context is the environment in which JavaScript code runs.
// It is created in three phases:
// Creation Phase
// Execution Phase
// Code Execution / Run Phase

// Types of Execution Context:
// Global Execution Context (GEC) – When the code is first loaded.
// Function Execution Context (FEC) – When a function is called.
// Eval Execution Context – For eval() function (rarely used).


// Simple Global Execution Context

// let a = 10;
// console.log(a);


// Function Execution Context

// function greet() {
//   console.log("Hello");
// }
// greet();
// greet() is called inside the GEC, which will create the FEC.



// Nested Function Execution Context

function outer() {
  console.log("Outer");
  function inner() {
    console.log("Inner");
  }
  inner();
}
outer();
// First GEC, then FEC for outer(), and then a new FEC for inner().First GEC, then FEC for outer(), and then a new FEC for inner().


// Execution with Lexical Scope

let x = 5;
function show() {
  console.log(x);
}
show();
// The reference to x is taken from the Lexical Environment, which is in the Execution Context.


// Multiple Function Calls

function one() {
  console.log("one");
}
function two() {
  one();
  console.log("two");
}
two();
// GEC → FEC of two() → FEC of one() → then return (pop).


// Variable Hoisting in Creation Phase

// console.log(a);
// var a = 10;
// In the Creation Phase, a is initialized to undefined.


// Function Hoisting

sayHello();
function sayHello() {
  console.log("hyy");
}
// In creation phase the whole function is loaded into memory so it is possible to call it first.


// Execution Stack

// function a() {
//   b();
// }
// function b() {
//   console.log("Inside B");
// }
// a();


// Anonymous Function Expression

// let sum = function(x, y) {
//   return x + y;
// }
// console.log(sum(2, 3));
// A new Function Execution Context will be created upon call of sum() .


//Arrow Function Execution Context

const greet = () => {
  console.log("arrow function");
}
greet();
// Arrow function भी एक FEC बनाता है, लेकिन इसका this लेक्सिकली bind होता है।


// The Execution Context in JavaScript is where the code runs.

// A new Execution Context is created on every function call.

// The Execution Context acts like a stack — called the Call Stack.



// Type Coercion //

// JavaScript is a loosely typed or dynamically typed language. This means that a single variable can take multiple data types.

// Type Coercion is the process in which JavaScript automatically converts one data type to another.

// Type Coercion is of two types:

// Implicit Coercion – JS converts the type automatically.

// Explicit Coercion – We manually convert the type (from String(), Number() etc.).


//  Implicit Type Coercion

// String + Number

// let result = "5" + 2;
// console.log(result);
// "5" is a string, and the + operator prefers strings. 2 is also made a string.

// String - Number

// let result = "8" - 5;
// console.log(result);
// The - operator only works on numbers, so "5" is converted to a number.


// Boolean + Number

// let result = true + 1;
// console.log(result);
// true is considered as 1 and false is considered as 0.


// null + number

// let result = null + 5;
// console.log(result);
// numm = 0

// undifined + number

// let result = undefined + 5;
// console.log(result);
// numm = NaN (Not a Number)

//  '5' * '2'

// let result = '5' * '2';
// console.log(result);


// divide
// let result = '5' / '2';
// console.log(result); 


// Explicit Type Coercion //

// String to Number
// let str = "123";
// let num = Number(str);
// console.log(num); 
// Convert "123" to a number using Number().


//  Number to String

// let num = 456;
// let str = String(num);
// console.log(str);
// Convert 456 to a string using String().

// Boolean to Number

// console.log(number(true));
// console.log(number(false));
//true and false are forcibly converted to numbers


// Expression	              Description	                      Result	               Type
// "5" + 1	              String + Number	                     "51"	                String
// "5" - 1	              String - Number	                       4	                 Number
// true + 1	              Boolean + Number	                      2	                 Number
// false + "hi"	          Boolean + String	                 "falsehi"	             String
// null + 1	              null is coerced to 0	                  1 	               Number
// undefined + 1	        undefined becomes NaN	                 NaN	               Number
// "10" * "2"	          Both strings are coerced to numbers	      20	               Number
// Number("123")	          Explicit coercion	                    123	               Number
// String(456)	           Explicit coercion	                   "456"	             String
// Boolean(0)	              0 is falsy	                         false	             Boolean


           // Expression
  //               |
  //         -----------------
  //        |                 |
  //    Operator '+'       Other Operators (-, *, /)
  //        |                   |
  //  One Operand is String?    Try to convert both operands to Number
  //        |                          |
  //     Yes                         Coerce to Number
  //        |
  //  Coerce other to String
  //        |
  //    Concatenate


// In + operator, if any value is string then it converts the rest to string.
// In arithmetic operations like -, *, /, all values ​​are converted to number.
// Boolean values: true → 1, false → 0
// null → 0, undefined → NaN  



//  JSON.parse() //

// JSON.parse() is a JavaScript method used to convert a JSON string into a JavaScript object.
// Meaning: We can parse the data in JSON format (as text) and convert it into a usable JavaScript object.
// JSON.parse() is the opposite of JSON.stringify() which converts a JavaScript object into a JSON string


//  Simple JSON to Object

let jsonString = '{"name": "aman" , "age": 25}';
let obj = JSON.parse(jsonString);
console.log(obj.name);
console.log(obj.age);


//  JSON Array Parsing

let jsonstr = '[ "red", "green", "blue"]';
let colors = JSON.parse(jsonstr);
console.log(colors[2]);


// Nested Object

// let jsonstr = '{"user":{"name": "ravi", "role": "admin"}}';
// let data = JSON.parse(jsonstr);
// console.log(data.user.role);


// Parsing Number

let jsonStr = '123';
let num = JSON.parse(jsonStr);
console.log(num + 10);  


// Parsing Boolean

// let jsonStr = 'true';
// let bool = JSON.parse(jsonStr);
// console.log(bool); 


// Parsing null

// let jsonStr = 'null';
// let val = JSON.parse(jsonStr);
// console.log(val);  


// Using reviver function

// let jsonStr = '{"name": "Neha", "age": 30}';
// let obj = JSON.parse(jsonStr, (key, value) => {
//   if (key === "age") return value + 5;
//   return value;
// });
// console.log(obj.age);
// console.log(obj.name);


// Invalid JSON (Single Quotes)

// let jsonStr = "{'name': 'Amit'}"; 
// let obj = JSON.parse(jsonStr);   //wrong format 
// only double quotes are valid for JSON


// Parsing the Date String

// let jsonStr = '{"date": "2025-06-16T12:00:00Z"}';
// let obj = JSON.parse(jsonStr);
// console.log(new Date(obj.date)); 


// From localStorage (Browser Example)
localStorage.setItem("user", '{"name": "Sonu", "city": "Delhi"}');
let userStr = localStorage.getItem("user");
let user = JSON.parse(userStr);
console.log(user.city);  


// Both key and string values ​​must be within double quotes ("").

// undefined, function, or symbol are not allowed.

// Conclusion:
// The function                                       works
// JSON.parse()                        converts the JSON string to a JavaScript object
// JSON.stringify()                   converts the JS object to a JSON string



// map() method - for location determination

// It applies a function to each item in the array and returns a new array

// syntax
// array.map(function(currentvalue, index, array)) {
  // /return value
// }

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(function(num) {
//   return num % 2 === 0;
// });

// console.log(evenNumbers);  



// reduce() – to summarize or combine

// Syntax:
array.reduce(function(accumulator, currentValue, index, array) {
  return updatedAccumulator;
}, initialValue);



// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = numbers.reduce(function(accumulater, currentValue) {
//   return accumulater + currentValue;
// }, 0);

// console.log(sum);



// filter() – for sorting

// array.filter(function(currentValue, index, array) {
//   return condition;
// });


let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); 


// Method                            Work                                   Output
// map()                     Converts every item to a                      new array
// filter()                     Sorts some items to a                      new array
// reduce()               Converts all items to a single value       A value (number, string, object etc.)



const students = [
{name: "ravi", marks: 15},
{name: "priya", marks: 14},
{ name: "Amit", marks: 60 },
{ name: "Neha", marks: 25 },
{ name: "Sonal", marks: 90 }
];

const passedstudents = students.filter(s => s.marks >= 20);
const passednames = passedstudents.map(s => s.name);
const totalMarks = passedstudents.reduce((sum, s) => sum + s.marks, 0);

console.log("passedstudents:", passednames);
console.log("totalMarks:", totalMarks);




//Declaration

// "Declaration" in JavaScript means defining or declaring a variable, function or constant, so that we can use it later.
// It is a way to tell the JavaScript interpreter that a variable, function or constant is going to

// Variable Declaration (var, let, const)

// var – old method(function scope)
var naam = "Rahul";
console.log(naam);  

// let – new method (block scope)
let age = 25;
console.log(age);


// const - constant variable (cannot change)

const country = "India";
console.log(country);


// function declaration
function greet() {
  console.log("hello how are you");
}
greet();


// Arrow function

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 3)); 


//  Object Declaration

// let person = {
//   name: "Amit",
//   age: 30
// };
// console.log(person.name);


// Array Declaration

// let colors = ["red", "green", "blue"];
// console.log(colors[1]);


// Function Expression Declaration

let square = function(n) {
  return n*n;
};
console.log(square(5));


// Class Declaration (ES6)

class Car {
  constructor(name) {
    this.name = name;
  }
  drive() {
    console.log(this.name + " is driving.");
  }
}

let myCar = new Car("BMW");
myCar.drive();


// Destructuring Declaration

// const students = {name: "riya", age: 20};
// const {name, age} = students;
// console.log(name);
// console.log(age);



// Method                            Name                               Scope / Attribute
// var                        Variable declaration                Function scope, redeclare possible
// let                        Block-scoped variable               Modern, no redeclare
// const                      Constant variable                   No reassignment allowed
// function                   Function declaration                     Hoisted
// =>                           Arrow function                       Shorter syntax
// object                      Object declaration                 { key: value } structure
// array                         Array declaration                    List of values
// function expression        Function as variable                Anonymous function
// class                         Class declaration                 Blueprint for objects
// destructuring               Extract values                      ​​Short syntax for access




// the detailed difference between var, let, and const in JavaScript in Hindi. All three are ways to declare variables, but there is a lot of difference in their behavior.
//  Scope 
// Keyword	         Scope 
// var	            Function Scope
// let             	Block Scope
// const	          Block Scope


function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a); 
  console.log(b);  
  console.log(c);  
}
test();


// Hoisting

// Keyword	    Hoisted	          Value Initialized?
// var	          Yes	                Undefined
// let	          Yes	             No (temporal dead zone)
// const	        Yes	             No (temporal dead zone)


// console.log(a); 
// var a = 5;

// console.log(b); 
// let b = 10;

// console.log(c); 
// const c = 15;


// Re-declaration

// Keyword           Re-declare in same scope
// var	                  Allowed
// let	                  Not Allowed
// const	                Not Allowed


// var a = 10;
// var a = 20;  //  Allowed

// let b = 30;
// // let b = 40;  // Error

// const c = 50;
// const c = 60; //error


// Reassignment(give new value)

// var x = 1;
// x = 2; 

// let y = 5;
// y = 6; 

// const z = 10;
// // z = 11; // 
// console.log(x);
// console.log(y);
// console.log(z);

// But if const is an object or array, the data inside it can be changed:

// const person = {name: "aman"};
// person.name= "aman kumar";
// console.log(person);


// Feature	              var	                    let	                 const
// Scope	            Function scope	         Block scope	           Block scope
// Hoisting	          Yes (undefined)	         Yes (TDZ Error)    	  Yes (TDZ Error)
// Re-declaration	        Allowed	               Not allowed	           Not allowed
// Reassignment	          Allowed	               Allowed	               Not allowed
// Use Case	              old code	            General use	        Constants, config


// Conclusion

// It is always better to use let and const.
// Use const when you don't need to change the value of the variable.
// Use let when you need to change the value.
// var is now less used in modern JS.




// expression

// Expression in JavaScript means any code that computes some value.
// Whenever something returns a value, it is called an Expression.

// Expression is the code that produces a value in JavaScript.
// It can be a combination of variable, value, operator, function call etc.


//  Value Expression

42 //This is a simple expression that gives the value of the number 42.


//String Expression
"Hello, World!" //This is a string expression that gives the value of the string "Hello


// Arithmetic Expression

5 + 3 * 2 //This will return 11. This is a mathematical expression.


//  Logical Expression

10 > 5 && 5 < 8 //This expression will return true.


//  Assignment Expression 

let a = 10 //This assigns the expression 10 to the variable a.


// Function Call Expression

Math.sqrt(25) //This expression will find the square root of 25 and return 5.


// Ternary Expression (Condition check)

let result = (5 > 3) ? "Yes" : "No"; //this statement returns true because the condition is true.



// Array Expression

[1, 2, 3][0] //This expression returns the first element 1 of the array.



// Object Property Expression

let person = { name: "Ravi" };
person.name //This expression returns "Ravi".


// Function Expression

let greet = function(name) {
  return "Hello " + name;
};

greet("Amit"); 
// This is a function expression that returns a value.


// Type                        	    Examples
// Literal Expression	            10, "hello", true
// Arithmetic Expression	        2 + 3 * 5
// Logical Expression	            a > b, true && false
// Function Call	                    sum(5, 10)
// Assignment                    	let x = 5 + 2

// An "Expression" is any code that returns a value.This is the most basic and important concept of JavaScript.




// practice questions

//ques1// What is the difference between == and ===?
 
// double == is use to compare the value , and use to type conversion 
// triple === is use to comapare value and type (strict compare)

// Example of == vs ===
console.log(5 == "5");   // true, because == does type coercion
console.log(6 === "6");  // false, because === checks both value and type

// ques2 what is hoisting in js

// Hoisting means that variable and function declarations are moved up before execution.
// console.log(x);
// var x = 5; //undifined

// // ques3 Give the syntax of an Arrow function?

// // syntax of arrow function is (arg) =>
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 3)); 

// // ques4 - how to make object in js?
// const person = {
//   name: "siddhartha",
//   age: 25,
//   occupation: "software developer"
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.occupation);


// // ques5 Tell and explain 3 common methods of array?

// // map() → Applies the function to each element.
// // filter() → Creates a new array with all elements that pass the test implemented by the provided function
// // reduce() → Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(x =>
//   x * 2
//   );
//   console.log(doubleNumbers); 
 
// const evenNumbers = numbers.filter(x =>
//    x % 2 === 0
//   );
//   console.log(evenNumbers); 

// const sum = numbers.reduce((accumulator, current) =>
//   accumulator + current
// );
// console.log(sum); 


// // ques6 What are closures in JavaScript?

// // A closure is a function that has access to its outer scope, even when the outer function has
// // returned. This is useful for creating private variables and functions that can be accessed 
// // only by the outer function.

// function outer () {
//   let count = 5;
//   return function inner() {
//     count++;
//     console.log(count);
//   }
// }
// const inner = outer();
// inner(); // 6

// // ques7 What is the difference between null and undefined?

// // undefined -> The variable is declared but not given a value.
// // null -> Has an assigned value that is intentionally displayed as "empty".


// //ques8 Give an example of a simple Promise.

// let mypromise = new Promise ((resolve, rejects) => {
//   let success = true;
//   if (success) {
//     resolve("success");
//   } else {
//     rejects("failed");
//   }
// });
// mypromise.then(msg => console.log(msg));


// // ques9 What does the map() method do?

// // map() applies a function to each array element and returns a new array
// let nums = [1, 2, 3, 4, 5, 6];
// let result = nums.map(n => n*2);
// console.log(result);


// // ques10 Does map() modify the original array?

// // no map does not change original array its creats a new array
// let names = ["amit", "aman", "ankit", "anshuman"];
// let upper = names.map(name => name.toUpperCase());
// console.log(upper);


// //ques11  Create a new array by adding 5 to each element

// let arr = [10, 20, 30];
// let newArr = arr.map(n => n + 5);
// console.log(newArr); 


// // ques12 When do you use the filter() method?

// // When we need only some selected items from an array that fulfill a condition.
// let nums = [1, 2, 3, 4, 5];
// let result = nums.filter(n => n % 2 === 0);
// console.log(result);

// // ques13 Filter students with more than 50 marks:
// let students = [
//   {name: "amit", marks: 40},
//   {name: "sumit", marks: 45},
//   {name: "suresh", marks: 55},
//   {name: "sachin", marks: 65},
// ];
// let passed = students.filter(s => s.marks > 50);
// console.log(passed);


// //ques14  What does the filter() method return?

// // A new array containing only those elements that satisfy the given condition.
// // Remove names starting with 'a' from the list of names:
// let names = ["Ankit", "Raj", "Aman", "Neha"];
// let filtered = names.filter(name => name.startsWith("A"));
// console.log(filtered); 


// // ques15 When do you use reduce() ?

// // When we have to convert the array into a single value – like total, average, product, etc.
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, current) =>acc + current, 0);
// console.log(sum);


// // ques16 Extract the largest number from reduce 

// let nums = [12, 25, 3, 40, 10];
// let max = nums.reduce((acc, curr) => acc > curr ? acc : curr);
// console.log(max);  


// // ques17 What are the two parameters of reduce() ?

// // Accumulator – result of the previous values ​​accumulated
// // Current Value – the item that is currently being processed
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, current) =>
//   acc + current, 0);
// console.log(sum);


// // ques18 Add up the prices of all products

// let products = [
//   { name: "Pen", price: 10 },
//   { name: "Book", price: 50 },
//   { name: "Bag", price: 90 }
// ];
// let total = products.reduce((acc, item) => acc + item.price, 0);
// console.log(total);


// // ques19 Is this currying?

// function greet(name, message) {
//   return message + ', ' + name;
// } // no this is a normal function


// // ques20 Currying version

// // function greet(name) {
// //   return function(message) {
// //     return message + ', ' + name;
// //   };
// // }
// // console.log(greet("Rahul")("Good Morning"));


// // ques21  Simple Addition using Currying

// // const add = a => b => a + b;
// // console.log(add(3)(4));


// // ques22 Partial use:
// const add2 = add(5);
// console.log(add2(10));


// // ques23 Can we create a dynamic addition function using currying?

// const add = a => b => c => a + b + c;
// console.log(add(1)(2)(3)); 

// // ques24 Multiplication

// // const multiply = a => b => a * b;
// // console.log(multiply(4)(5));

// // Partial use:
// const multiply = multiply(5);
// console.log(multiply(6));  // 30


// // ques25 Multiply 3 numbers:

// const multi3 = a => b => c => a * b * c;
// console.log(multi3(2)(3)(4));


// // ques26  Greeting Message

// const greet = name => message => `${message}, ${name}`;
// console.log(greet("Amit")("Hello"));


// // ques27 In the below code, what scope is x in?

// let x = 10;

// function show() {
//   console.log(x);
// }
// show();


// // ques28 What will be the output of the below code?

// function test() {
//   let x = 5;
// }
// console.log(x); //here we got error becouse x is in function scope we can not access outside of the function


// // ques29 What is Block Scope? Give an example.

// {
//   let x = 10;
//   console.log(x); 
// }
// console.log(x);


// // ques30 Which Block Scope follows in var, let, and const?

// // let and const --> block scoped
// // var --> function scoped


// // ques31 Can we declare a variable of the same name twice inside a function?

// // function demo() {
// //   let x = 10;
// //   let x = 20;
// // }  //here we got syntax error because let and const does not use again.


// // ques32 Will the code below work correctly?

// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer(); //yes because inner function usees outer function variable (closuer)


// // ques33 Can we overwrite variables of global scope inside a function?

// let x = 5;
// function change() {
//   x = 10;
// }
// change();
// console.log(x);  //yes because we can update global variable inside function


// // ques34 What is the Imperial Dead Zone (TDZ)?

// // When a variable is declared with let or const, and it is accessed before declaration - a ReferenceError occurs. This is TDZ.
// console.log(a); 
// let a = 10;


// //ques35 Can variables declared inside a function be accessed outside the function?

// function calc() {
//   let result = 42;
// }
// console.log(result);

// // no – result is in function scope, from outside you will get undefined/error.



// // javaScript Error Handling

// // Basic try-catch
// try {
//   let a = b + 10;  // b is not defined
// } catch (error) {
//   console.log("Error: " + error.message);
// }


// // Arithmetic Error
// try {
//   let result = 10 / 0;
//   console.log(result);
// } catch (err) {
//   console.log("Error: " + err.message);
// }


// // Type Error
// try {
//   null.f(); 
// } catch (e) {
//   console.log("Error : " + e.message);
// }


// // Custom Error using throw
// try {
//   let age = 15;
//   if (age < 18) {
//     throw "minor";
//   }
// } catch (e) {
//   console.log("Custom Error: " + e);
// }


// // use of  Error Object 
// try {
//   throw new Error("something is wrong");
// } catch (e) {
//   console.log(e.name);   
//   console.log(e.message); 
// }


// // finally block
// try {
//   console.log("Try block");
// } catch (e) {
//   console.log("Error ");
// } finally {
//   console.log("Finally block ");
// }


// error handling in function
// function divide(a, b) {
//   try {
//     if (b === 0) throw "cannot be divided by 0";
//     return a / b;
//   } catch (e) {
//     return e;
//   }
// }
// console.log(divide(10, 0));


// // JSON Parse Error
// try {
//   let user = JSON.parse('{"name": "Amit"'); 
// } catch (e) {
//   console.log("JSON Parse Error: " + e.message);
// }


// // DOM Access Error
// try {
//   document.getElementById("myBtn").click(); 
// } catch (e) {
//   console.log("DOM Error: " + e.message);
// }


// // Multiple Custom Conditions
// function checkPassword(password) {
//   try {
//     if (password.length < 6) throw "Password is too short";
//     if (!/[A-Z]/.test(password)) throw "minimum one capital letter";
//     return "correct password";
//   } catch (e) {
//     return "Error: " + e;
//   }
// }
// console.log(checkPassword("abc")); 

// Multiple Custom Conditions
function checkPassword(password) {
  try {
    if (password.length < 6) throw "Password is too short";
    if (!/[A-Z]/.test(password)) throw "minimum one capital letter";
    return "correct password";
  } catch (e) {
    return "Error: " + e;
  }
}
console.log(checkPassword("abc")); 



// Hoisting

// Keyword	    Hoisted	          Value Initialized?
// var	          Yes	                Undefined
// let	          Yes	             No (temporal dead zone)
// const	        Yes	             No (temporal dead zone)


// add two numbers
let p = 5, q = 6;
console.log(p+q);


//how to check even or odd numbers

let n = 14;
console.log(n % 2 ===0 ? "even":"odd");


//find maximum of two numbers

let x = 20, y = 18;
console.log(x > y ? x : y);


//factorial using loop

let num = 5, fact =1;
for (let i = 1; i <= num; i++ ){fact *= i;}
console.log (fact);


//Reverse a string

let str = "hello";
console.log(str.split("").reverse().join("")); 


//Palindrome check

let s = "madam";
console.log(s === s.split("").reverse().join(""));


//Sum of array

let arr = [1,2,3,4,5];
console.log(arr.reduce((a,b)=>a+b,0));

//Find largest in array

let arr = [10,25,3,99,45];
console.log(Math.max(...arr));


//Find smallest in array

let arr = [10,25,3,99,45];
console.log(Math.min(...arr));


//Fibonacci series

let n = 5, a=0,b=1;
for(let i=0;i<n;i++){ console.log(a); [a,b]=[b,a+b]; }


//Count vowels in string

let str = "javascript";
console.log(str.match(/[aeiou]/gi).length); 


//Object example

let user = {name:"Siddhartha", age:22};
console.log(user.age);


//Array map

let arr = [1,2,3];
console.log(arr.map(x=>x*2));


//Array filter

let arr = [1,2,3,4,5];
console.log(arr.filter(x=>x%2===0)); 


//Array reduce

let arr = [1,2,3,4];
console.log(arr.reduce((a,b)=>a*b,1)); 


//Destructuring

let [a,b] = [10,20];
console.log(a,b);


//Spread operator

let arr = [1,2,3];
let arr2 = [...arr,4,5];
console.log(arr2);



//Default parameter

function greet(name="Guest"){ return "Hello " + name; }
console.log(greet());


// Arrow function

let add = (x,y)=>x+y;
console.log(add(5,10));


// what is  Closure

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}
const counter = outer();
counter(); 
counter();


// give the output

function createCounter() {
  let num = 0;
  return () => ++num;
}
let c1 = createCounter();
console.log(c1(), c1());


// DOM (Document Object Model)

// 4. What is the DOM?

//  The DOM represents an HTML document as a tree structure where each node is an element.

// 5. How do you select elements in the DOM?
//  Using methods like getElementById(), querySelector(), and getElementsByClassName().

// What is hoisting in JavaScript?
// (Hoisting means variable and function declarations are moved to the top of their scope during the compile phase.)
console.log(x); 
var x = 5;


// Are let and const hoisted?
// (Yes, but they stay in the Temporal Dead Zone until declared.)

// What will this print?
greet();
function greet() {
  console.log("Hello!");
}


//What is the event loop?

// (It continuously checks the call stack and task queues to handle asynchronous code in JavaScript.)


// what is the output

console.log("A");
setTimeout(() => console.log("b"),0);
console.log("c")

// Difference between microtask & macrotask?
// (Microtasks (Promises) run before macrotasks (setTimeout))

// Destructuring
// what does this do?
const[a , b]=[10,20];
console.log(a,b);

// Object destructuring example:
const user = { name:"sam", age:22};
  const {name} = user;
  console.log(name);


//  What does fetch() return?
// (A Promise that resolves to a Response object.)

fetch("https://api.github.com/users/octocat")
  .then(res => res.json())
  .then(data => console.log(data.login));


  // Classes & Inheritance
//  How to create a class?  

class person {
  constructor(name) {
    this.name = name;
  }
}
const p = new person ("awadh");
console.log(p.name);


// How to extend a class?
class Animal {
  speak() { console.log("Sound"); }
}
class Dog extends Animal {
  bark() { console.log("Woof"); }
}
new Dog().speak();

// Spread & Rest Operators

// What does spread operator do?
let arr = [1,2,3];
let copy = [...arr];
console.log(copy);

// What does rest operator do?
function sum(...nums) {
  return nums.reduce((a,b)=>a+b);
}
console.log(sum(1,2,3));
// (Collects remaining arguments into an array.)


// Callback & Promise Difference
// What is a callback function?
setTimeout(() => console.log("Done!"), 1000);


// Difference between callback and promise?
// ans(Promises avoid callback hell and provide better async control using .then() and .catch().)


// this Keyword
// What is this in JavaScript?
// ans (Refers to the object that owns the current code execution.)
const obj = {
  name: "Max",
  show() { console.log(this.name); }
};
obj.show();


// Prototype & Inheritance
// What is the prototype chain?
// ans (A mechanism by which objects can inherit properties from other objects.)

let arr = [];
console.log(arr.__proto__ === Array.prototype); 


// How can you add a method using prototype?

function car(name) {this.name = name; }
car.prototype.drive = function() {
  console.log(this.name + "driving");
}
const c1 = new car ( "bmw" );
c1.drive();


// SON Parsing
//  What will this output?
let str = '{"name":"Alex","age":25}';
let obj = JSON.parse(str);
console.log(obj.name);
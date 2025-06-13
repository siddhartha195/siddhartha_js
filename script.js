 //objects
//  const mysym = Symbol("key1")

const { log, info } = require("console");

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



//Object Methods

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



// Garbage Collection 

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



// memory heap

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




// JSON.stringify


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



// scope

//Scope means – from where a variable or function can be accessed.In JavaScript, scope decides which variable can be seen or changed from where.

//type of scope- global scope 
//local scope
//block scope
//function scope
//lexical scope
//let and const scope
//var scope


//  Global Scope

let name = "Amit";

function greet() {
  console.log(name);  // "Amit"
}
greet();
// Global scope variables can be accessed from anywhere in the code.


// Function Scope

function sayHello() {
  let message = "Hello!";
  console.log(message);
}

sayHello();
// Function scope variables can be accessed only within the function where they are declared.


// Block Scope (let and const)

{
  let age = 25;
  console.log(age); 
}
// Block scope variables can be accessed only within the block where they are declared.


// Var is function-scoped, not block-scoped

{
  var city = "Delhi";
}
console.log(city);
// Var is function-scoped, not block-scoped. It can be accessed outside the block wher


//  Nested Scope (Function inside Function)

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); 
  }

  inner();
}
outer();
// Nested scope variables can be accessed only within the inner function where they are declared.


// Lexical Scope

function outer (){
  let x = 10;

  return function inner() {
    console.log(x); 
  };
}

let myFunc = outer();
myFunc();
// Lexical scope variables can be accessed only within the inner function where they are declared.


//  Function vs Block Scope

function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }
  console.log(a); 
}
test();
// var works even outside the block, let and const do not.


// Re-declaration in same scope (let vs var)
var a = 5;
var a = 10;  

let b = 5;
// let b = 10;  // Error: Identifier 'b' has already been declared
console.log(a);
// var can be re-declared, let cannot.
// var allows duplicate; let and const do not in same scope.


// Scope in loops

for ( let i = 0; i < 5; i++){
  console.log(i);
}




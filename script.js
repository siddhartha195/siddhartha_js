 //objects
//  const mysym = Symbol("key1")

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

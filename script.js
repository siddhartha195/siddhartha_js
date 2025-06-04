 //objects
 const mysym = Symbol("key1")

        const JsUser = {
            name : "siddhartha",
            age : "20",
            email : "siddhartha@google.com",
            mobile : "4512369870",
            [mysym] : "mykey1",
        }

       // console.log(JsUser.email)
       // console.log(JsUser.name)
        //console.log(JsUser.age)
       // console.log(JsUser.mobile)
       // console.log(JsUser[mysym])


//array
const Arr = [1, 2, 3, 4, 5, 6]
const Heros = ["ironman", "superman"]

const arr2 = new Array(1,2,3,4)
//console.log(Arr[0]);

//array method
Arr.push(7)
Arr.push(8)
Arr.pop()
//console.log(Arr);

Arr.unshift(9)
Arr.shift()
//console.log(Arr);

//console.log(Arr.includes(9))
//console.log(Arr.indexOf(5))

const newArr = Arr.join()
//console.log(newArr);

//slice, splice

//console.log("A", Arr);

const myn1 = Arr.slice(1,3)

//console.log(myn1);
//console.log( "B",Arr);

const myn2 = Arr.splice(1, 3)
//console.log("c", Arr);
//console.log(myn2);


//string

const name = "siddhartha"
const repoCount = 10

//console.log(name + repoCount + "value")

//console.log(`Hello  my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('dcgaming')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(5));
//console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,5)
//console.log(newString);

const anotherString = gameName.slice(-7, 4)
//console.log(anotherString);

const newStringOne = "    dcgaming     "
//console.log(newStringOne.trim()); //trim use to cut the xtra space

const url = "https://dcgaming.com/siddhatha%20onlinegaming"
//console.log(url.replace('%20', '-'));

//console.log(url.includes('siddhatha'));

//number method

const a = true
const b = false
const c = 100
const d = "100"
const e = "Hello"
const f = new Date()

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

const myNumers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumers.map(  (num) => num + 10 )

//const newNums = myNumers
      //           .map( (num) => num * 10)
    //             .map( (num) => num + 1 )
  //               .filter( (num) => num >= 40 )  //( this is the channing method where we can use multiple method at the same time )
//console.log(newNums);

const myNums = [1,2,3,4]

const myTotal = myNums.reduce(function (acc, currval) {
    return acc + currval
}, 0)

console.log(myTotal);

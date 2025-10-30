// // // // // console.log("hello world");
// // // // // console.log(`Hello world`);
// // // // // console.log('Hello world');
// // // // // console.log(100);
// // // // // console.log(25+100);

// // // // var store  = 100+100;
// // // // var a = 1550+50;

// // // // console.log(a+a+store);
// // // // // console.log(100 + 100 - 50 + 8 / 4 + 20 * 50);

// // // // var store = 100 + 100; // 200
// // // // var a = 100 + 300; // 400

// // // // var b = store; // 200

// // // // store = b + a; // 200 + 400
// // // // store = store; // 600

// // // // store = a - 400;
// // // // a = store;
// // // // b =  store + a;
// // // // console.log(store, a, b);

// // // // // variable declaration and initialization

// // // var a ; // variable declaration

// // // a = 190 // variable initialization

// // // var b = 100 // variable initialization

// // // var a = true; // boolean

// // // a = 1000;

// // // c =false;
// // //  console.log(a,b,c);

// // // // types of storages or variables

// // // // var a = 10; // can be reintialize,redeclared,reassigned hoisting=undefined (consider hoisting)

// // // // let b = 10; // cannot  be reintialize,cannot be redeclared,can be reassigned ,hoisting=initialize error (doesnt entertain hoisting)

// // // // const c = 10; // cannot be reintialize,cannot be redeclared,cannot be reassigned, most used, hoisting=initialize error(doesnt entertain hoisting)

// // // // console.log(a,b,c);// hoisting

// // // // var a = 10;

// // // // let b = 10;

// // // // datatypes

// // // // data types

// // // //  number, boolean, string, undefined, null

// // // // primitive datatypes

// // // // const a = undefined;
// // // // const b = false;
// // // // const c = 'string';
// // // // const d = 100;
// // // // const e = null

// // // // // non - primitive -> functions, object, arrays

// // // // function(){

// // // // }

// // // // const d = [];

// // // // const r = {};

// // // //Comparators,Logical operators and Strict Operators

// // // // const a = 11;

// // // // const b = 10

// // // // console.log(a > b)

// // // //Type coercion

// // // // const a = 'hello';

// // // // console.log(a+'world');

// // // // console.log(typeof 'true'); // type of dstatype

// // // // const example = "thunder";

// // // // console.log(example + 100000);
// // // // console.log(100000 + example);
// // // // console.log(typeof (example + 100000));

// // // // If else condition

// // // // if(100 !== "string") {
// // // // console.log("Payment received");
// // // // }else {
// // // // console.log("payment declined");
// // // // }

// // // // If else

// // // // var a = 25
// // // // var b = 25
// // // // var c = 25

// // // // if(25+25 === a+b+c) {
// // // // console.log(1);
// // // // }else if(25+25+25 === a+b) {
// // // // console.log(2);
// // // // } else if (25+25+25 === a+b+c) {
// // // // console.log(3);
// // // // }else if (25 === a) {
// // // // console.log(4);
// // // // } else {
// // // //     console.log(5);
// // // // }

// // // // let val1;
// // // // let val2 = "Good";
// // // // val1 = val2
// // // // if (val1 + "day" == typeof "string") { // "Goodday" == "string"

// // // //   console.log("Good Morning");
// // // //   if(true){
// // // //     console.log("did u have cfe")
// // // //   }
// // // // } else if (val1 + "day" == typeof "string") { //"goodday" =="string"
// // // //   console.log("Good afternoon");
// // // // } else if (val1 + "day" === typeof "string") { // "goodday" ==="string"
// // // //   console.log("Good evening");
// // // // } else if (typeof (val1 + "day") === typeof "string") { // "good day" === "string"
// // // //   console.log("Good Night");
// // // // } else {
// // // //     val2 = "bad"
// // // //     console.log("have a " + val2 + "day")
// // // // }
// // // // var a = 100;
// // // // var b = 0;

// // // // if (50 + 80 === a + 20) {
// // // //   console.log("it's true @1");

// // // //   if (typeof a !== "number") {
// // // //     console.log("yes it is a number");
// // // //   } else {
// // // //     console.log("no it is not a number");
// // // //   }
// // // // } else if (30 + 90 === a) {
// // // //   console.log("it's true @2");
// // // // } else if (30 + 70 === a + b) {
// // // //   console.log("it's true @3");

// // // //   if (typeof a !== "number") {
// // // //     console.log("yes it is a number");
// // // //   } else {
// // // //     console.log("no it is not a number 2");
// // // //   }
// // // // } else {
// // // //   console.log("it's false");
// // // // }

// // // //loops --> Loops are those which occur for multiple execution of the described code.
// // // //for ( initialization,condition,updater)

// // // for (i = 5; i < 500; i++) {
// // //   console.log(i);
// // // }

// // // for (i = 498; i > 4; i-= 5) {
// // //   console.log(i);

// // //   if(i==8){
// // //     console.log(5)
// // //   }
// // // }

// // // // for (i = 8; i > 4; i-= 3) {
// // // //   console.log(i);
// // // // }

// // // // loop starts from 2 -> (excluding)10 and reverse it
// // // // now start from 8 while reversing it?
// // // // skip 3 on each iteration?
// // // // print "the number I am iterating is: " + val on every iteration

// // // for(i=2;i<10;i++){
// // // console.log("the number I am iterating is"  + "=" , i);
// // // }
// // // for(j=8;j>=2;j-=3){
// // // console.log("the number I am iterating is"  + "=" , j);

// // // }

// // // function code1 (){
// // //     console.log("Hi Good Morning");
// // //     console.log( "lets have a cup of tea");
// // // }

// // // code1();

// // // function greeting (){
// // //     console.log(new Date().to());
// // // }

// // // greeting();

// // // function greeting (parameters) {  // declaration

// // // }

// // // greeting(arguments); // call

// // // function greetFunc(val1,val2,val3,val4,val5,val6){
// // //     console.log(val1);
// // //     console.log(val2);
// // //     console.log(val3);
// // //     console.log(val4);
// // //     console.log(val5);
// // //     console.log(val6);

// // // }

// // // greetFunc("Hi",0,"good morning","how are you","hope","you are doing well");

// // function greetings(time) {
// //   if (time == 6) {
// //     console.log("its " + time + "in the morning");
// //   } else if (time == 15) {
// //     console.log("its " + time + " in the afternoon");
// //   } else if (time == 18) {
// //     console.log("its " + time + " in the evening");
// //   } else if (time == 21) {
// //     console.log("its " + time + " in the night");
// //   } else {
// //     console.log("invalid time");
// //   }
// // }

// // // greetings(22);

// // // greet according to time (24h format)
// // // pass arguments, based on those greet accordingly
// // // ex 6 -> "good morning!"
// // // ex 15 -> "good afternoon!"
// // // ex 18 -> "good evening!"
// // // ex 21 -> "good night!"

// // // 1-12 as "good morning!"
// // // 13-16 as "good afternoon!"
// // // 16-19 as "good evening!"
// // // 19-23 as "good night!"

// // function greeting2(time) {
// //   if (time >= 0 && time < 12) {
// //     console.log("good morning");
// //   } else if (time >= 12 && time < 16) {
// //     console.log("good afternoon");
// //   } else if (time >= 16 && time < 19) {
// //     console.log("good evening");
// //   } else if (time >= 19 && time < 24) {
// //     console.log("good night");
// //   } else {
// //     console.log("invalid time");
// //   }
// // }

// // // greeting2(6);
// // // greetings(6);

// // // countdown timer
// // // create a function to count down from 100 - 0;

// // function timer() {
// //   for (i = 100; i > 0; i -= 2) {
// //     console.log(i);
// //   }
// // }
// // // timer()

// // // function even(){
// // //     for(i=100;i>0;i--){
// // //         if(i%2 === 0){
// // //             console.log(i, " is an even number");
// // //         }
// // //     }
// // // }
// // // even();

// // function greetings5() {
// //   console.log("wishing you a very happy bday");
// //   console.log("god bless you");
// // }

// // // greetings5()

// // function greet1(royal) {
// //   if (royal === 452) {
// //     console.log("royal enfield " + "=", " its an new himalayan");
// //   } else if (royal === 350) {
// //     console.log("royal enfield " + "=", "its an Meteor or classic");
// //   } else {
// //     console.log("Not an royal enfield");
// //   }
// // }

// // // greet1(350)

// // //arrays and objects

// // // let arr = [];

// // // arr = "1,2,3,4,5"

// // // let obj = {
// // // dob:"05/03/2000",
// // // name:"G Gokul",
// // // Male: true,
// // // arr
// // // }
// // // console.log(arr,obj)

// // // arr

// // // let arr1 = [1, '2', true, undefined, null,  [1, 2, 3, [1, 2, 3, 4]]];

// // // let obj = {
// // //   dob: "16/03/2000",
// // //   name: "hari",
// // //   male: true,
// // //   age: 25,
// // //   happy: () => {
// // //     console.log("yes")
// // //   },
// // //   arr1

// // // }

// // // console.log(obj)

// // // arr = [1, '2', true, undefined, null, obj, [1, 2, 3, [1, 2, 3, 4]]];

// // // console.log(arr);

// // // let obj = {
// // //   key: "value",
// // // }

// // // let str = "";

// // // str = "hello";

// // // console.log(str);

// // // let alpha = "hello world";

// // // alpha[1] = "v"
// // // console.log(alpha)

// // // const str = "hello";
// // // str[1] = "h"

// // // const arr = ["hello", "world", 1,2,3]

// // // arr[0] = "morning";

// // // console.log(arr)
// // // console.log(str)

// // // let a = "hello"; // #116ghha892
// // // let b = a; // #117ghha892

// // // b[0] = "j"

// // // console.log(a, b)

// // // let c = [100, 101]; // #116ghha893

// // // let d = c; // #116ghha893 [100, 101]

// // // let e = d;

// // // e[0] = "201"
// // // console.log(c, d)

// // // function objMutation(str) {
// // //   return str
// // // }

// // // const obj = {
// // //   name: 'Hari',
// // //   age:25
// // // }

// // // const fnOutput = objMutation("hello") // => obj

// // // console.log(objMutation("hello"))

// // // console.log(typeof null)

// // // function fullname(lastname){
// // // const firstname = "gokul";
// // // const fullname = firstname + "gurumurthy";
// // // console.log(fullname)
// // // console.log("my name is " + fullname)
// // // console.log(`my name is gokul ${lastname}` )
// // // return `I am ${fullname}`
// // // }

// // // // fullname("gurumurthy")

// // // console.log(fullname("gurumurthy"))

// // // function countup(){
// // //   for(i=0;i<=10;i++);
// // //     console.log(i);
// // // }
// // // countup()
// // // function countUp() {
// // //   for (i = 0; i <= 10; i++) {
// // //     console.log(i);
// // //   }
// // // }
// // // countUp();

// // // var declare time = 0
// // // for 1 => 10
// // // even + 1;
// // // {
// // // var time ++
// // // }
// // // return time;

// // // function timer(){
// // //   let time = 0;
// // //   for(i=1;i<=10;i++){
// // //     if(i%2==0){
// // //       console.log(i+1);
// // //     return
// // //     }
// // //   }

// // // }

// // // console.log(timer())

// // // function timer(){
// // //   var time ;
// // // for(i=0;i<=10;i++){
// // //   console.log(i);
// // //   time = i
// // //   if(i%2==0){
// // //   }
// // //     console.log(i+1)
// // // }
// // // return time
// // // }
// // // console.log(timer());

// // // function gokul() {
// // //   var time;
// // //   for (i = 1; i < 10; i++) {
// // //     if (i % 2 != 0) {
// // //       time = i + 1;
// // //       console.log(time, 'a')
// // //     } else {
// // //       time = i;
// // //       console.log(time, 'b')
// // //     }
// // //   }
// // //   // return time;
// // // }
// // // // console.log(gokul());

// // //scoped variables

// // // global scoped

// // // var a = 10;
// // // let b = 11;
// // // const c = 12;
// // // {
// // //   //block scoped
// // //   var d =13;
// // //   let e = 14;
// // //   const f = 15;

// // //   console.log(a,b,c,d,e,f,"block");
// // // }

// // // function hydra(){
// // //   //function scoped
// // //   var g = 10;
// // //   let h = 11;
// // //   const i = 12;
// // // //local scope to the function
// // //   console.log(a,b,c,d,g,h,i,"function");
// // // }

// // // hydra()

// // // console.log(a,b,c,d,"global");

// // // var obj1 = {
// // //   name: "gokul",
// // //   age: 25,
// // //   male: false,
// // //   nestedDetails: {
// // //     address: "kengeri",
// // //     country: {
// // //       India: true,
// // //     },
// // //   },
// // //   code: 560060,
// // //   arr: [10, 20, 220, 10],
// // // };
// // // obj1["name"] = "gurmurthy";

// // // obj1["male"] = !false;

// // // obj1["nestedDetails"].country.India = {
// // //   nationality: true,Hindu:true
// // // };

// // // obj1["nestedDetails"].country.India=['nationality','hindu',91]
// // // console.log(obj1.nestedDetails.country.India);

// // //pass by value

// // function hail(val) {
// //   val += 1;
// //   return val;
// // }

// // var a = 1;

// // const outV = hail(a);

// // console.log(outV);
// // console.log(a);

// // //pass by ref

// // function hail2(val){
// //   val[1]=10;
// //   return val;
// // }

// // var b = [1,2];

// // const c = hail2(b);

// // console.log(c);
// // console.log(b);

// // // function countDown(){
// // // for(i=10;i>=1;i--){
// // //   if(i%2==0){
// // //     console.log(i)
// // //   }
// // // }}

// // // countDown()

// // // function hail3(obj2) {
// // //   obj2["nestedDetails"].address = {
// // //     state: "karnataka",
// // //     city: "bengaluru",
// // //     taluk: "kengeri",
// // //   };
// // //   return obj2;
// // // }

// // // var obj2 = {
// // //   name: "gokul",
// // //   dob: "05032000",
// // //   male: !false,
// // //   nestedDetails: {
// // //     country: { India: true },
// // //     address: "kengeri",
// // //     code: 560060,
// // //   },
// // // };
// // // let out = hail3(obj2);

// // // console.log(obj2, "here");
// // // console.log(out);

// // // function hail4(val){
// // //  val="gokul"
// // //  return val
// // // }
// // // var b = "gurumurthy"
// // // let fN = hail4(b)
// // // console.log(hail4(fN))
// // // console.log(b);

// // // function gM(tM){
// // //   tM = 2
// // //   return tM
// // // }
// // // const a = 3
// // // const b = gM(a)

// // // console.log(a);
// // // console.log(b);

// // // function rE(kE){
// // //   kE = "royal"
// // //   return kE
// // // }
// // //  const c = "enfield"
// // //  const d = rE(c)

// // //  console.log(c);
// // //  console.log(d);

// // //  function hR(mN){
// // //   mN [2] = 5
// // //   mN [1] = 2
// // //   return mN
// // //  }
// // //  const e = [0,1,2,3,4,5,6]
// // //  const f = hR(e)

// // //  console.log(e);
// // //  console.log(f);

// // //  function gK(leo){
// // //   leo["name"]= "RE"
// // //   return leo
// // //  }
// // //   leo = {
// // //     name: "royal enfield",
// // //     establshed: "1947",
// // //     nestedDetails:{
// // //       brand: "himalayan",
// // //       cc:"452"
// // //     }
// // //   }

// // //   let im = gK(leo)

// // //   console.log(im,'x');
// // // console.log(leo);

// // // function countDown(){
// // // for(i=10;i>=1;i--){
// // //   if(i%2==0){
// // //     console.log(i)
// // //   }
// // // }}

// // // countDown()

// // function sum(a, b) {
// //   const out = a + b;
// //   return out;
// // }
// // const a = 5;
// // const b = 5;

// // console.log(sum(a, b));

// // function mult(a, b) {
// //   const out = a * b;
// //   return out;
// // }

// // console.log(mult(a, b));

// // function sub(a, b) {
// //   const out = a - b;
// //   return out;
// // }

// // console.log(sub(a, b));

// // function div(a, b) {
// //   const out = a / b;
// //   return out;
// // }

// // console.log(div(a, b));

// // // function arithematicOperations(operator, value1, value2) {
// // //   let out = 0;
// // //   if (operator === "+") {
// // //     out = value1 + value2;
// // //   } else if (operator === "-") {
// // //     out = value1 - value2;
// // //   } else if (operator === "/") {
// // //     out = value1 / value2;
// // //   } else if (operator === "*") {
// // //     out = value1 * value2;
// // //   } else {
// // //     out = "assign right operstor";
// // //   }
// // //   return `result: ${out}`;
// // // }

// // function arithematicOperations(operator, value1, value2) {
// //   if (operator === "+") {
// //     return `Result: ${value1 + value2}`; //string litersl
// //   } else if (operator === "-") {
// //     return `result : ${value1 - value2}`;
// //   } else if (operator === "/") {
// //     return value1 / value2;
// //   } else if (operator === "*") {
// //     return value1 * value2;
// //   }
// //   return "assign right operator";
// // }

// // console.log(arithematicOperations("-", 5, 5));

// // function evenNumber(value) {
// //   for (i = 1; i <= 100; i++)
// //     if (i % 2 == 0) {
// //       console.log(i);
// //     }
// // }

// // // console.log(evenNumber())

// // function oddNumber() {
// //   for (i = 1; i <= 10; i++) if (i % 2 != 0) console.log(i);
// // }

// // console.log(oddNumber());

// // function sum(a,b){
// //   const out = a+b
// //   return out
// // }

// // const a = 10
// // const b = 2

// // // console.log(sum(a,b))

// // function div(a,b){
// // const out = a/b
// // return out
// // }

// // // console.log(div(a,b))

// // function mult(a,b){
// //   const out = a*b
// //   return out
// // }

// // // console.log(mult(a,b));

// // function sub(a,b){
// //   const out = a-b
// //   return out
// // }
// // // console.log(sub(a,b));

// // // function arithematicOperations(operator,value1,value2){
// // //   let out = 0;
// // //   if(operator === "+"){
// // //     out = value1 + value2
// // //   }else if (operator === "-"){
// // //     out = value1 - value2
// // //   }else if (operator === "/"){
// // //     out = value1 / value2
// // //   }else if (operator === "*"){
// // //     out = value1 * value2
// // //   }

// // //   return 'assign right operator';
// // // }

// // // console.log(arithematicOperations('+',10,2))

// // function arithematicOperations(operator,value1,value2){
// //   let out = 0;
// //   if(operator === "+"){
// //     out = sum(value1, value2)
// //   }else if (operator === "-"){
// //     out = sub(value1,value2)
// //   }else if (operator === "/"){
// //     out = mult(value1 , value2)
// //   }else if (operator === "*"){
// //     out = div(value1 , value2)
// //   }

// //   return out;
// // }

// // console.log(arithematicOperations('-',10,2))

// // function evenOdd(num){
// //   if(num%2 === 0) return "even";
// //   return "odd"
// // }
// // console.log(evenOdd(5));

// // function pal(str){
// //     let emptyStr = "";
// //     for(let i=str.length-1;i>=0;i--){
// //         emptyStr+=str[i];
// //     }

// //         if(emptyStr===str){
// //             return "its an palindrome"
// //         }
// //         return "not a palindrome"
// //     }

// // console.log(pal("nitin"));

// // function naturalSum(value) {
// //   let out = 0;
// //   for (let i = 1; i <= value; i++) {
// //     out += i;
// //   }
// //   return out;
// // }
// // console.log(naturalSum(10))

// // function rev(str){
// //     let bS = ""
// //     for(let i=str.length-1 ;i>=0;i--){
// //         // console.log(str[i],i)
// //         bS+=str[i]
// //     }
// //     return bS ;

// // }

// // console.log(rev("dollar"))

// // function maxEvenNumber(val){
// //     if(val%2 === 0) return val;
// //     if(val%2 !== 0) return val - 1;
// // }
// // console.log(maxEvenNumber(1315));

// // function maxOddNumber(val){
// //     if(val%2 === 0) return val - 1;
// //     if(val%2 !== 0) return val;
// // }
// // console.log(maxOddNumber(12));

// // function minEvenNumber(val) {
// //   let out = 0;

// //   for (let i = val; i >= 2; i -= 2) {
// //     out = i;
// //   }

// //   if (val % 2 !== 0) {
// //     for (let i = val - 1; i >= 2; i -= 2) {
// //       out = i;
// //     }
// //   }

// //   // if(val > 2){
// //   //     return 2
// //   // }else if(val < 2){
// //   //     return false
// //   // }

// //   return out;
// // }
// // // console.log(minEvenNumber(25));

// // function minOddNumber(val) {
// //   let out = 0;
// //   for (let i = val - 1; i >= 1; i -= 2) {
// //     out = i;
// //   }
// //   if (val % 2 !== 0) {
// //     for (let i = val; i >= 1; i -= 2) {
// //       out = i;
// //     }
// //   }
// //   return out;
// // }
// // // console.log(minOddNumber(13));

// // function sumOdOdd(val) {
// //   let out = 0;
// //   for (i = 1; i <= val; i += 2) {
// //     // console.log(out += i,i)
// //     out += i;
// //   }
// //   return out;
// // }

// // // console.log(sumOdOdd(10));

// function sumOfEven(val) {
//   let out = 0;
//   for (i = 2; i <= val; i += 2) {
//     // console.log(out += i,i)
//     out += i;
//   }
//   return out;
// }
// // console.log(sumOfEven(10));

// function findIndexVal(str, index) {
//   out = "";
//   out = str[index];
//   return out;
// }
// // console.log(findIndexVal("gokul", 3));

// let array = [2, 3, 4, false, undefined, sumOfEven, findIndexVal];

// let obj = {
//   array,
//   findIndexVal,
// };
// // console.log(obj.array[4]);
// obj.array[4] = null;

// // console.log(sumOfEven(10))
// // console.log(obj.array[6]("hari",1));
// // console.log(obj.findIndexVal("hari",2));

// // const obj = {
// //     fullName: "Harikalyan",
// //     age: 25,
// //     address: 'kengeri',
// //     arrEle: [1,2,3,'India', true, undefined, null],
// //     obj: {
// //         upanagar: true
// //     }
// // }
// // // console.log(obj.obj.upanagar);
// // // obj.obj.upanagar= !true

// // // console.log(obj.obj.upanagar);

// // let arrEle = [1,2,3, obj];

// // arrEle[3].arrEle[3]="karnataka"

// // console.log(obj);

// // function add(a, b) {
// //   return a + b;
// // }

// // console.log(add("2", 3));

// function findTheVowels(str) {
//   let count = 0;
//   for (i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// // console.log(findTheVowels("tuk tuk"));

// // vowelArithmaticOperation(["harikalyan", "gokul", "gurumurthy", "lakshmipriya"], "+");

// // const ans = vowelArithmaticOperation(["harikalyan", "gokul", "gurumurthy", "lakshmipriya"], "+");

// // console.log(ans) // 13

// // Strings
// // Count Vowels
// // Given a string, count the number of vowels (a, e, i, o, u).
// // Example: "hello" → 2

// // function countVowels(str) {
// //   let out = 0;
// //   for (i = 0; i < str.length; i++) {
// //     if (
// //       str[i] === "a" ||
// //       str[i] === "e" ||
// //       str[i] === "i" ||
// //       str[i] === "o" ||
// //       str[i] === "u"
// //     ) {
// //       out++;
// //     }
// //   }
// //   return out;
// // }

// // console.log(countVowels("hello"));

// // -->Reverse Words in a String
// // // Reverse only the words’ order, not the letters.
// // // Example: "I love JS" → "JS love I"

// // function rev(str) {
// //   let out = "";
// //   for (let i = str.length - 1;i>=0; i--) {
// //     out += str[i];
// //   }
// //   return out;
// // }

// // console.log(rev("i love js"));

// // function rev(str) {
// //   let bS = "";
// //   for (let i = str.length - 1; i >= 0; i--) {
// //     // console.log(str[i],i)
// //     bS += str[i];
// //   }
// //   return bS;
// // }

// // console.log(rev("dollar"))

// // Arrays
// // Second Largest Number
// // Find the second largest element in an array.
// // Example: [2, 7, 4, 7, 1] → 2

// // function largestNumber(val){
// //   let count = 0;
// //     for(i=0;i<=val;i++){

// //     }
// // }
// // console.log(largestNumber());

// // -->Math & Numbers
// // Divisibility Check Without %
// // Given a number n, determine if it’s divisible by 3 without using the modulo operator.
// // Example: 9 → true, 10 → false

// // function withoutMod(val){
// //   // let out  = 0;
// //     for(i=0;i<20;i+=3){
// //       // console.log(i);
// //       if (i===val){
// //         return true;
// //       }
// //     }return false;

// // }
// // console.log(withoutMod(12));

// // function findTheMax(arr){
// // let max = 0;
// // console.log(arr.length);

// //   for(i=0;i<arr.length;i++){
// //     if(max < arr[i]){
// //       max=arr[i]
// //       // console.log(max)
// //     }
// //   }return max;
// // }
// // console.log(findTheMax([1,1,5,2]));

// // console.log("*")
// // console.log("**")
// // console.log("***")
// // console.log("****")

// // function factorial(num){
// //   let mult = 1;
// //     for(i=1;i<=num;i++){
// //       mult*=i;
// //       // console.log(i,num);

// //     }
// //       return mult;
// // }
// // console.log(factorial(5));

// // function prime(value) {
// //   if (value === null || value === undefined) return "enter a valid numeric char";
// //   if (value >= 0 && value <= 2) return "Not a valid number";
// //   if (value >= "a" && value <= "z") return "NAN";
// //   if (typeof value === "string") return "pass a number";

// //   let count = 0;
// //   for (let i = 1; i <= value; i++) {
// //     //   console.log(value%i, value , i)
// //     if (value % i === 0) {
// //       count++; // 1, 2
// //     }
// //   }
// //   if (count > 2) {
// //     return "Not a Prime number";
// //   }
// //   return "Prime";
// // }

// // console.log(prime(7));

// // function prime(val) {
// //   let out = 0;
// //   for (i = 1; i <= val; i++) {
// //     if (val % i === 0) {
// //       out++;
// //     }
// //   }
// //   if (out === 2){
// //     return "prime";
// //   }else {
// //     return "not a prime number"
// //   }
// // }

// // console.log(prime(15));

// // function prime(val) {
// //   let out = 0;
// //   for (i = 1; i <= val; i++) {
// //     if (val % i === 0) {
// //       out++;
// //     }
// //   }
// //   if (out > 2){
// //     return "composite number";
// //   }else {
// //     return "Prime number"
// //   }
// // }

// // console.log(prime(7));

// // Logic & Loops
// // FizzBuzz Variation
// // Print numbers from 1 to N, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for both print "FizzBuzz

// // function fizzBuzz(val){
// //    if (val%3 === 0 && val%5===0){
// //     return "fizzBuzz"
// //   }else if (val%3===0){
// //     return "fizz";
// //   }else if (val%5===0){
// //     return "buzz";
// //   }else {
// //     return val;
// //   }
// // }

// // console.log(fizzBuzz(7));

// // function rightAngleTriangle(){
// //     for(let  i = 1; i<=5; i++){
// //         let starRow = "";
// //         for(let j = 1; j<=i; j++){
// //             starRow+= "*"
// //         }
// //         console.log(starRow);
// //     }
// // }

// // rightAngleTriangle();

// // Check Palindrome String
// // Input: "madam" → Output: true.

// // function pal(str){
// //   let emptyStr = ""
// //     for(let i=str.length-1;i>=0;i--){
// //       emptyStr+=str[i];
// //     }
// //     if (emptyStr===str){
// //       return "its an palindrome";
// //     }
// //     else {
// //       return "not a palindrome";
// //     }
// // }

// // console.log(pal("madam"));

// function leapYear(year){
//   if(year%4 ===0 && year%100 != 0){
//     return "leap year"
//   }else if(year%400 === 0){
//     return "leap year"
//   }
//   else {
//     return "not a leap year"
//   }
// }
// // console.log(leapYear(2000));

// function vowelCount(str){
//   let out = 0;
//     for(i=0;i<str.length;i++){
//       if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
//         out++
//       }
//     }return out;
// }

// function findMaxedVowels(str1, str2, str3){
//   console.log(vowelCount(str1),vowelCount(str2),vowelCount(str3));
//   if(vowelCount (str1)>vowelCount(str2)){
//     return str1;
//   }
//   else if(vowelCount(str2)>vowelCount(str3)){
//     return str2;
//   }else if(vowelCount(str3)>vowelCount(str1)){
//     return str3;
//   }
// }

// // findMaxedVowels("hello") // output => gokul gurumurthy
// // console.log(findMaxedVowels("hello", "gokul gurumurthy","hari kalyan balaji"));

// function reverseStr(str){
//   let emtystr = "";
//     for(let i=str.length-1;i>=0;i--){
//       emtystr+=str[i];
//     }
//     return emtystr;
// }
// // console.log(reverseStr("gokul gurumurthy"));

// // function revStr(str){
// //     let emptyStr = "";
// //         for(i=str.length-1;i>=0;i--){
// //             emptyStr+=str[i];
// //         }
// //         return emptyStr
// // }
// // console.log(revStr("gokul"));

// function palindrome(str) {
//   let emptyStr = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     emptyStr += str[i];
//   }
//   if (emptyStr === str) {
//     return "its a palindrome";
//   } else {
//     return "Not a palindrome";
//   }
// }
// // console.log(palindrome("jhvghnchvvhvvvvvhj"));

// function revArr(arr) {
//   let emptyArr = [];
//   for (i = arr.length - 1; i >= 0; i--) {
//     emptyArr.push(arr[i]);
//   }

//   return emptyArr;
// }
// // console.log(revArr([1,2,3]));

// function panGramWithNoDuplicates(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       if (str[i] >= "a" && str[i] <= "z") {
//         count++

//       }
//     }
//   }
//   return count === 26 ? "is pangram" : "is not pangram";
// }
// // console.log(panGramWithNoDuplicates("abcdefg  hijklmn   opqrstuvwxyz"));

// //string methods => primitive => pass by value
// // inbuilt functions

// let str = "hello my name is gokul";

// console.log(str.length);// gives the length of the str in numbers
// console.log(str.trim());//trims the spaces in starting and ending of the string
// console.log(str.trim().concat(str));//concates the string
// console.log(str.trim().split(' '));
// console.log(str.charAt(str.length-1));
// console.log(str.trim().split(" ").reverse().join(" "));
// console.log(str.trim().charCodeAt(5));//determines the ascii table or computer number format
// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));
// console.log(str.substring(5));
// console.log(str.slice(5));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// function myLastIndexOf(char){
//   for(let i=str.length-1;i>=0;i--){
//     if (str[i] === char){
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(str.lastIndexOf("o"),myLastIndexOf("o"));

// function sTrim(char){
//   let out = 0;
//     for (let i=0;i=str.length;i++){
//       out+=str[i];
//     }
//     return out;
// }
// console.log(sTrim("    hello world"));

// // // // console.log("gokulgurumurthy");

// // // // console.log(a); //hoisting works only for var whereas it gives udefined when any number is initialized and it shows cannt access for both let and const

// // // // global scope
// // // var a = 1;
// // // let b = 2;
// // // const c = 3 ;

// // // // block scope
// // // {
// // //     var d = 4;
// // //     let e = 5;
// // //     const f = 6;
// // //     // console.log(a,b,c,d,e,f,"bs");

// // // }

// // // // funtion scope

// // // function simp(){
// // //     var g = 7;
// // //     let h = 8;
// // //     const i = 9;
// // // console.log(a,b,c,d,g,h,i,"fs");

// // // }
// // // // simp()

// // // // pass by value

// // // let a1 = 5;
// // // let g1 = 2;

// // // let d1 = a1+g1

// // // console.log(a1,g1,d1);

// // // let str1 = "Gokul" //cannot mutate with str

// // // str1[0] = "A"

// // // console.log(str1[0]);

// // // let arr1 =[0,1,2,3]
// // // console.log(arr1);

// // // arr1[2]=5
// // // console.log(arr1);

// // const obj1 = {
// //     uername:"gokul",
// //     password:"555151"
// // }

// // obj1.uername = "goki"
// // // console.log(obj1.uername);
// // // console.log(obj1);

// function obje(details){
//     details.uername = "guru"
//     console.log(details);

// }

// obje(obj1);

// // Pass by value

// let a1 = 1;
// let a2 = "hello";

// let a3 = a2;
// a2[4] = "k";
// // console.log(a1,a2,a3);

// // pass by ref

// let arr = [1, 2, 3, 4];
// arr[2] = "gokul";
// let arr5 = arr[2];
// arr5 = [4, 5, 6, 7, 8];
// arr = arr5;
// // console.log(arr[2],arr,arr5);

// let obj1 = {
//   id: 1,
//   user: {
//     fullName: "gokul",
//     "D-o-B": { date: 5, month: "march", year: 2000 },
//   },
// };

// let obj2 = obj1;

// obj2.id=2;
// obj1.user.fullName = "gokulgurumurthy"

// let obj3 = {...obj1}
// obj3.id= 9
// obj3.user.fullName = "shylaja"

// let obj4 = JSON.parse(JSON.stringify(obj3))

// obj4.user["D-o-B"].date=18;

// console.log(obj1,obj2,obj3,obj4,"strigifydata");
// function modify(obj) {
//   obj.name = "Alice";
//   console.log(obj.name);

// }

// let person = { name: "Bob" };
// // console.log(person);

// modify(person);
// console.log(person.name); // Output: "Alice"

// function replace(obj) {
//   obj = { name: "Charlie" };
// }

// let person = { name: "Bob" };
// replace(person);
// console.log(person.name); // Output: "Bob"

// Shallow copy

// copying only the top level properties, if property is a reference the reference is copied not the actual data

const data = [
  {
    1: "gurumurthy",
    "D-O-B": {
      month: "feb",
      date: 5,
      year: 2000,
    },
  },
  {
    2: "gokul",
    "D-O-B": {
      month: "march",
      date: 5,
      year: 2000,
    },
  },
  {
    3: "shylaja",
    "D-O-B": {
      month: "nov",
      date: 5,
      year: 2000,
    },
  },
  {
    4: "ashwin",
    "D-O-B": {
      month: "sep",
      date: 5,
      year: 2000,
    },
  },
  {
    5: "gokul gurumurthy",
    "D-O-B": {
      month: "febmarch",
      date: 5,
      year: 2000,
    },
  },
];
// console.log("my name is gokul "+ obj2[1] + " I was born on " + obj2["D-O-B"].date +"th "+ obj2["D-O-B"].month + " "+ obj2["D-O-B"].year);
// console.log(`my name is gokul ${obj2[1]} I was born on ${obj2["D-O-B"].date}th ${obj2["D-O-B"].month} ${obj2["D-O-B"].year}`);

function peopleData(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(
      `my name is ${data[i][i + 1]} I was born on ${data[i]["D-O-B"].date}th ${
        data[i]["D-O-B"].month
      } ${data[i]["D-O-B"].year}`
    );
  }
  return true;
}
// console.log(peopleData(data));

// Create an object with five entries, keep it nested to 2 down. (obj)use this object to spread into a new objcopy (
// now modify the obj and check whether the objCopy is also changed if yes why?
// now take this objCopy and copy the instance into an object 2 (obj2) now if you modify this,   will the spreaded objCopy change? if yes why, no justify?

// let obj = [
//   {
//     1: "gurumurthy",
//     "D-O-B": {
//       month: "feb",
//       date: 5,
//       year: 2000,
//       time: { hour: "12", minute: "30", seconds: "02" },
//     },
//   },
//   {
//     2: "gokul",
//     "D-O-B": {
//       month: "march",
//       date: 5,
//       year: 2000,
//     },
//   },
//   {
//     3: "shylaja",
//     "D-O-B": {
//       month: "nov",
//       date: 5,
//       year: 2000,
//     },
//   },
//   {
//     4: "ashwin",
//     "D-O-B": {
//       month: "sep",
//       date: 5,
//       year: 2000,
//     },
//   },
//   {
//     5: "gokul gurumurthy",
//     "D-O-B": {
//       month: "febmarch",
//       date: 5,
//       year: 2000,
//     },
//   },
// ];

// let objCopy = {...obj}
// objCopy[0]["D-O-B"].time.seconds= "01"
// // console.log(obj[0],objCopy[0]);// both the values changes because shallow copy is somthing that changes the top level properties 

// let obj2 = objCopy
// obj2[0]["D-O-B"].time.seconds = "09"
// // console.log(obj[0],objCopy[0],obj2[0]);//sAME here values changes for all the three 



// let obj = [
//   {
//     name: "gurumurthy",
//     "D-O-B": {
//       month: "feb",
//       date: 5,
//       year: 2000,
//       time: { hour: "12", minute: "30", seconds: "02" },
//     },
//   },
//   {
//     name: "gokul",
//     "D-O-B": {
//       month: "march",
//       date: 5,
//       year: 2000,
//     },
//   },
//   {
//     name: "shylaja",
//     "D-O-B": {
//       month: "nov",
//       date: 5,
//       year: 2000,
//     },
//   },
//   {
//     name: "ashwin",
//     "D-O-B": {
//       month: "sep",
//       date: 5,
//       year: 2000,
//     },
//   },
//   {
//     name: "gokul gurumurthy",
//     "D-O-B": {
//       month: "febmarch",
//       date: 5,
//       year: 2000,
//     },
//   },
// ];

// let objCopy = {...obj}
// objCopy[0]["D-O-B"].time.seconds= "01"
// // console.log(obj[0],objCopy[0]); 

// let obj2 = objCopy
// obj2[0]["D-O-B"].time.seconds = "09"
// // console.log(obj[0],objCopy[0],obj2[0]);

// // Create an array, add all the primitives and non-primitives

// let arr = [2,"gokul",true,null,undefined,[1,2,3],{name:"gokul",age:25},function greet() {return "good morning"}]

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);

// console.log(arr[7]());






// Use default values while destructuring an array ["red"] so the second color defaults to "blue".



// Skip the second element of an array while destructuring.

// Extract the first and third elements from an array [1, 2, 3, 4, 5].
let arr = [1,2,3,4,5]
let first = arr[0];
let second = arr[1];
let third = arr[2];
let fourth = arr[3];
let fifth = arr[4]

console.log(first,third);

// Destructure a nested array [10, [20, 30]] to get 10 and 30 into variables.

// let arr1 = [10,[20,30]];
// let first1 = arr1[0];
// let firtOfFirst = arr1[1][0];
// let firstOfSecond = arr1[1][1];

// console.log(first1,firstOfSecond);

let arr1 = [10,[20,30]];

let[first1,[firtOfFirst,firstOfSecond]] = arr1;

console.log(first1,firstOfSecond);

// Use default values while destructuring an array ["red"] so the second color defaults to "blue".

let colour = ["red"] ;

let[firstColour,secondColour = "blue"] = colour;

console.log(firstColour,secondColour);

// Use the rest operator to extract the first element and collect the remaining ones in another array.

let numbers = [10,20,30,40,50]

let [firstNumber,...restNumbers] = numbers;

console.log(firstNumber);
console.log(restNumbers);

// Destructure an array returned by a function to get multiple return values.


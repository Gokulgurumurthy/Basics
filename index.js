// // // console.log("hello world");
// // // console.log(`Hello world`);
// // // console.log('Hello world');
// // // console.log(100);
// // // console.log(25+100);

// // var store  = 100+100;
// // var a = 1550+50;

// // console.log(a+a+store);
// // // console.log(100 + 100 - 50 + 8 / 4 + 20 * 50);

// // var store = 100 + 100; // 200
// // var a = 100 + 300; // 400

// // var b = store; // 200

// // store = b + a; // 200 + 400
// // store = store; // 600

// // store = a - 400;
// // a = store;
// // b =  store + a;
// // console.log(store, a, b);

// // // variable declaration and initialization

// var a ; // variable declaration

// a = 190 // variable initialization

// var b = 100 // variable initialization

// var a = true; // boolean

// a = 1000;

// c =false;
//  console.log(a,b,c);

// // types of storages or variables

// // var a = 10; // can be reintialize,redeclared,reassigned hoisting=undefined (consider hoisting)

// // let b = 10; // cannot  be reintialize,cannot be redeclared,can be reassigned ,hoisting=initialize error (doesnt entertain hoisting)

// // const c = 10; // cannot be reintialize,cannot be redeclared,cannot be reassigned, most used, hoisting=initialize error(doesnt entertain hoisting)

// // console.log(a,b,c);// hoisting

// // var a = 10;

// // let b = 10;

// // datatypes

// // data types

// //  number, boolean, string, undefined, null

// // primitive datatypes

// // const a = undefined;
// // const b = false;
// // const c = 'string';
// // const d = 100;
// // const e = null

// // // non - primitive -> functions, object, arrays

// // function(){

// // }

// // const d = [];

// // const r = {};

// //Comparators,Logical operators and Strict Operators

// // const a = 11;

// // const b = 10

// // console.log(a > b)

// //Type coercion

// // const a = 'hello';

// // console.log(a+'world');

// // console.log(typeof 'true'); // type of dstatype

// // const example = "thunder";

// // console.log(example + 100000);
// // console.log(100000 + example);
// // console.log(typeof (example + 100000));

// // If else condition

// // if(100 !== "string") {
// // console.log("Payment received");
// // }else {
// // console.log("payment declined");
// // }

// // If else

// // var a = 25
// // var b = 25
// // var c = 25

// // if(25+25 === a+b+c) {
// // console.log(1);
// // }else if(25+25+25 === a+b) {
// // console.log(2);
// // } else if (25+25+25 === a+b+c) {
// // console.log(3);
// // }else if (25 === a) {
// // console.log(4);
// // } else {
// //     console.log(5);
// // }

// // let val1;
// // let val2 = "Good";
// // val1 = val2
// // if (val1 + "day" == typeof "string") { // "Goodday" == "string"

// //   console.log("Good Morning");
// //   if(true){
// //     console.log("did u have cfe")
// //   }
// // } else if (val1 + "day" == typeof "string") { //"goodday" =="string"
// //   console.log("Good afternoon");
// // } else if (val1 + "day" === typeof "string") { // "goodday" ==="string"
// //   console.log("Good evening");
// // } else if (typeof (val1 + "day") === typeof "string") { // "good day" === "string"
// //   console.log("Good Night");
// // } else {
// //     val2 = "bad"
// //     console.log("have a " + val2 + "day")
// // }
// // var a = 100;
// // var b = 0;

// // if (50 + 80 === a + 20) {
// //   console.log("it's true @1");

// //   if (typeof a !== "number") {
// //     console.log("yes it is a number");
// //   } else {
// //     console.log("no it is not a number");
// //   }
// // } else if (30 + 90 === a) {
// //   console.log("it's true @2");
// // } else if (30 + 70 === a + b) {
// //   console.log("it's true @3");

// //   if (typeof a !== "number") {
// //     console.log("yes it is a number");
// //   } else {
// //     console.log("no it is not a number 2");
// //   }
// // } else {
// //   console.log("it's false");
// // }

// //loops --> Loops are those which occur for multiple execution of the described code.
// //for ( initialization,condition,updater)

// for (i = 5; i < 500; i++) {
//   console.log(i);
// }

// for (i = 498; i > 4; i-= 5) {
//   console.log(i);

//   if(i==8){
//     console.log(5)
//   }
// }

// // for (i = 8; i > 4; i-= 3) {
// //   console.log(i);
// // }

// // loop starts from 2 -> (excluding)10 and reverse it
// // now start from 8 while reversing it?
// // skip 3 on each iteration?
// // print "the number I am iterating is: " + val on every iteration

// for(i=2;i<10;i++){
// console.log("the number I am iterating is"  + "=" , i);
// }
// for(j=8;j>=2;j-=3){
// console.log("the number I am iterating is"  + "=" , j);

// }

// function code1 (){
//     console.log("Hi Good Morning");
//     console.log( "lets have a cup of tea");
// }

// code1();

// function greeting (){
//     console.log(new Date().to());
// }

// greeting();

// function greeting (parameters) {  // declaration

// }

// greeting(arguments); // call

// function greetFunc(val1,val2,val3,val4,val5,val6){
//     console.log(val1);
//     console.log(val2);
//     console.log(val3);
//     console.log(val4);
//     console.log(val5);
//     console.log(val6);

// }

// greetFunc("Hi",0,"good morning","how are you","hope","you are doing well");

function greetings(time) {
  if (time == 6) {
    console.log("its " + time + "in the morning");
  } else if (time == 15) {
    console.log("its " + time + " in the afternoon");
  } else if (time == 18) {
    console.log("its " + time + " in the evening");
  } else if (time == 21) {
    console.log("its " + time + " in the night");
  } else {
    console.log("invalid time");
  }
}

// greetings(22);

// greet according to time (24h format)
// pass arguments, based on those greet accordingly
// ex 6 -> "good morning!"
// ex 15 -> "good afternoon!"
// ex 18 -> "good evening!"
// ex 21 -> "good night!"

// 1-12 as "good morning!"
// 13-16 as "good afternoon!"
// 16-19 as "good evening!"
// 19-23 as "good night!"

function greeting2(time) {
  if (time >= 0 && time < 12) {
    console.log("good morning");
  } else if (time >= 12 && time < 16) {
    console.log("good afternoon");
  } else if (time >= 16 && time < 19) {
    console.log("good evening");
  } else if (time >= 19 && time < 24) {
    console.log("good night");
  } else {
    console.log("invalid time");
  }
}

// greeting2(6);
// greetings(6);


// countdown timer
// create a function to count down from 100 - 0;


function timer(){
    for(i=100;i>0;i-=2){
        console.log(i);
    }
}
// timer()



// function even(){
//     for(i=100;i>0;i--){
//         if(i%2 === 0){
//             console.log(i, " is an even number");
//         }
//     }
// }
// even();


function greetings5(){
    console.log("wishing you a very happy bday");
    console.log("god bless you")
}

// greetings5()

function greet1(royal){
    if (royal === 452){
        console.log("royal enfield " + "=", " its an new himalayan" );
    } else if(royal === 350){
        console.log("royal enfield " + "=","its an Meteor or classic")
    } else {
        console.log("Not an royal enfield")
    }
}

// greet1(350)


//arrays and objects

// let arr = [];

// arr = "1,2,3,4,5"

// let obj = {
// dob:"05/03/2000",
// name:"G Gokul",
// Male: true,
// arr
// }
// console.log(arr,obj)

// arr 

// let arr1 = [1, '2', true, undefined, null,  [1, 2, 3, [1, 2, 3, 4]]];



// let obj = {
//   dob: "16/03/2000",
//   name: "hari",
//   male: true,
//   age: 25,
//   happy: () => {
//     console.log("yes")
//   },
//   arr1

// }

// console.log(obj)

// arr = [1, '2', true, undefined, null, obj, [1, 2, 3, [1, 2, 3, 4]]];


// console.log(arr);


// let obj = {
//   key: "value",
// }


// let str = "";

// str = "hello";

// console.log(str);




// let alpha = "hello world";


// alpha[1] = "v"
// console.log(alpha)


// const str = "hello";
// str[1] = "h"

// const arr = ["hello", "world", 1,2,3]


// arr[0] = "morning";

// console.log(arr)
// console.log(str)


// let a = "hello"; // #116ghha892
// let b = a; // #117ghha892

// b[0] = "j"

// console.log(a, b)

// let c = [100, 101]; // #116ghha893

// let d = c; // #116ghha893 [100, 101]

// let e = d;

// e[0] = "201" 
// console.log(c, d)



function objMutation(str) {
  return str
}



const obj = {
  name: 'Hari',
  age:25
}




// const fnOutput = objMutation("hello") // => obj

console.log(objMutation("hello"))




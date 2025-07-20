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

function timer() {
  for (i = 100; i > 0; i -= 2) {
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

function greetings5() {
  console.log("wishing you a very happy bday");
  console.log("god bless you");
}

// greetings5()

function greet1(royal) {
  if (royal === 452) {
    console.log("royal enfield " + "=", " its an new himalayan");
  } else if (royal === 350) {
    console.log("royal enfield " + "=", "its an Meteor or classic");
  } else {
    console.log("Not an royal enfield");
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

// function objMutation(str) {
//   return str
// }

// const obj = {
//   name: 'Hari',
//   age:25
// }

// const fnOutput = objMutation("hello") // => obj

// console.log(objMutation("hello"))

// console.log(typeof null)

// function fullname(lastname){
// const firstname = "gokul";
// const fullname = firstname + "gurumurthy";
// console.log(fullname)
// console.log("my name is " + fullname)
// console.log(`my name is gokul ${lastname}` )
// return `I am ${fullname}`
// }

// // fullname("gurumurthy")

// console.log(fullname("gurumurthy"))

// function countup(){
//   for(i=0;i<=10;i++);
//     console.log(i);
// }
// countup()
// function countUp() {
//   for (i = 0; i <= 10; i++) {
//     console.log(i);
//   }
// }
// countUp();

// var declare time = 0
// for 1 => 10
// even + 1;
// {
// var time ++
// }
// return time;

// function timer(){
//   let time = 0;
//   for(i=1;i<=10;i++){
//     if(i%2==0){
//       console.log(i+1);
//     return
//     }
//   }

// }

// console.log(timer())

// function timer(){
//   var time ;
// for(i=0;i<=10;i++){
//   console.log(i);
//   time = i
//   if(i%2==0){
//   }
//     console.log(i+1)
// }
// return time
// }
// console.log(timer());

function gokul() {
  var time;
  for (i = 1; i < 10; i++) {
    if (i % 2 != 0) {
      time = i + 1;
      console.log(time, 'a')
    } else {
      time = i;
      console.log(time, 'b')
    }
  }
  // return time;
}
console.log(gokul());

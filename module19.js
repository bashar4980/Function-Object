// Problem 01

function foo() {
  console.log("foo");
}
function bar() {
  console.log("bar");
}

foo();
bar();

//Write a function called make_avg() which will take an three integers and return the
// average of those values.
function make_avg(a, b, c) {
  var sum = a + b + c;
  var average = sum / 3;

  return average;
}
console.log(make_avg(10, 20, 40));

//Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.

const studentNumber = [100, 77, 99, 90, 65, 88];
function Average_mark(numbers) {
  var totalNumber = 0;
  for (var i = 0; i < numbers.length; i++) {
    totalNumber += numbers[i];
    var studentAvgmark = totalNumber / numbers.length;
  }
  // console.log("Total Mark is: " + totalNumber);
  // console.log("Avg_mark is: " + studentAvgmark);
  return studentAvgmark;
}
var studentAvg = Average_mark(studentNumber);
console.log("Avg_mark is : " + studentAvg);

// 4) Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

function odd_even(value) {
  if (value % 2 === 0) {
    console.log("This is even number ");
  } else {
    console.log("This is Odd number ");
  }
}

console.log(odd_even(100));

// You are in a hurry to go to your school on time. But when you are crossing the road, the
// traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
// danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
// coloured traffic signal, you should cross the road. So write a JS code, where there is a
// variable called signal. Its value can be green, yellow or red & we will get different activities as
// output depending on the variable. So, hurry up.

var colour = "green";

switch (colour) {
  case "red":
    console.log("if you try to cross the road, you may be in danger");
    break;
  case "yellow":
    console.log("You should stop");
    break;
  case "green":
    console.log("You can go now");
    break;
  default:
    console.log("Please Wait and see again ");
}

//একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

function numerSeries(serisNumber){
    for(var i = 1 ; i <= serisNumber ; i++){
      var seriesValue= (i*serisNumber);
      console.log(seriesValue)
     
    }
    
}

numerSeries(13);

//একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।



function convertLowerCase(userName){
   var lowerCase = userName.toLowerCase();
   return lowerCase;
}
var userName = "bashar ahmed sagor".toUpperCase();
console.log(convertLowerCase(userName));

//fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

function fullName(firstName , lastName){
   const FullName = firstName + lastName ;
   return FullName.toUpperCase() ;
}

console.log(fullName("Bashar Ahmed " , "Sagor"));

//একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

function Squre(num){
  const squreValue = num*num;
  return squreValue ;
}

console.log(`The squre of ${10} is:  ${Squre(10)}`);
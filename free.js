// Global Scope and Functions

// let myGlobal=10;
// oopsGlobal=5
// function fun1() {
//   // Assign 5 to oopsGlobal Here
// }
// // Only change code above this line
// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }




// Local Scope and Functions


// function myLocalScope() {
//   // Only change code below this line
// var myVar=4

//   console.log('inside myLocalScope', myVar);
// }
// myLocalScope();

// // Run and check the console
// // myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);





// Global vs. Local Scope in Functions

// const outerWear = "T-Shirt";
// function myOutfit() {
//   const outerWear = "sweater";
//   return outerWear;
  
// }

// 6>10?console.log("true"):console.log("false")



// Assignment with a Returned Value


// function addFive() {
//   let sum = 3;
//   sum = sum + 5
//   return sum
//   function addThree(){
//    let  sum1=3;
//    sum1=sum1+15
//    return sum1
//   }
//    console.log(addThree());
// }
// console.log(addFive());




// var changed = 0;
// function change(num) {
// return (num + 5) / 3;
// }
// changed = change(10);
// // Setup
// var processed = 0;

// function processArg(num) {
// return (num + 3) / 5;
// }
// // Only change code below this line
// processed = processArg(7);





// Stand in Line



// function nextInLine(arr, item) {
// arr.push(item);
// var temp = arr.shift();
// return temp;
// }
// var testArr = [1,2,3,4,5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 10));
// console.log("After: " + JSON.stringify(testArr));




// Use Conditional Logic with If Statements

// function ourTrueOrFalse(isItTrue) {
//   if (isItTrue) { 
//     return "Yes, it's true";
//   }
//   return "No, it's false";
// }
// function trueOrFalse(wasThatTrue) {
//   if(wasThatTrue) {
//     return "Yes, that was true";
//   }
//   return "No, that was false";
// }
// trueOrFalse(false);




// Comparison with the Equality Operator


// // Setup
// function testEqual(val) {
//   if (val==12) { // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }

// testEqual("12");





// Comparison with the Strict Equality Operator


// Setup
// function testStrict(val) {
//   if (val===7) { // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }
// testStrict("10");





// Practice comparing different values
 
// Setup
// function compareEquality(a, b) {
//   if (a === b) { // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }
// compareEquality(10, "10");





// Comparison with the Inequality Operator

// // Setup
// function testNotEqual(val) {
//   if (val!=99) { // Change this line
//     return "Not Equal";
//   }
//   return "Equal";
// }
// testNotEqual(99);






// Comparison with the Strict Inequality Operator

// // Setup
// function testStrictNotEqual(val) {
//   if (val!==17) { // Change this line
//     return "Not Equal";
//   }
//   return "Equal";
// }
// testStrictNotEqual(17);




// Comparison with the Greater Than Operator


// function testGreaterThan(val) {
// if (val > 100) { // Change this line
// return "Over 100";
// }
// if (val > 10) { // Change this line
// return "Over 10";
// }
// return "10 or Under";
// }
// // Change this value to test
// testGreaterThan(11);





// Comparison with the Greater Than Or Equal To Operator


// function testGreaterOrEqual(val) {
//   if (val>=20) {  // Change this line
//     return "20 or Over";
//   }
//   if (val>=10) {  // Change this line
//     return "10 or Over";
//   }
//   return "Less than 10";
// }
// testGreaterOrEqual(11);







// Comparison with the Less Than Operator

// function testLessThan(val) {
//   if (val<25) {  // Change this line
//     return "Under 25";
//   }
//   if (val<55) {  // Change this line
//     return "Under 55";
//   }
//   return "55 or Over";
// }
// testLessThan(10);




// Comparison with the Less Than Or Equal To Operator

// function testLessOrEqual(val) {
//   if (val<=12) {  // Change this line
//     return "Smaller Than or Equal to 12";
//   }
//   if (val<=24) {  // Change this line
//     return "Smaller Than or Equal to 24";
//   }
//   return "More Than 24";
// }
// testLessOrEqual(10);






// Comparisons with the Logical And Operator 

// function testLogicalAnd(val) {
  // Only change code below this line
//   if (val>24 && val<51) {
//       return "Yes";
//     }
//   // Only change code above this line
//   return "No";
// }
// testLogicalAnd(10);





// Comparisons with the Logical Or Operator

// function testLogicalOr(val) {
//   // Only change code below this line
//   if (val>20 || val<10) {
//     return "Outside";
//   }
//   // Only change code above this line
//   return "Inside";
// }
// testLogicalOr(15);







// Introducing Else Statements

// function testElse(val) {
//   let result = "";
//   // Only change code below this line
//   if (val > 5) {
//     result = "Bigger than 5";
//   }
//   else{
//     result = "5 or Smaller";
//   }
//   // Only change code above this line
//   return result;
// }
// testElse(4);





// Introducing Else If Statement

// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   } else if (val < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 10";
//   }
// }
// // Change this value to test
// testElseIf(7);






// Logical Order in If Else Statements

// function orderMyLogic(val) {
//   if (val < 5) {
//     return "Less than 5";
//   } else if (val < 10) {
//     return "Less than 10";
//   } else {
//     return "Greater than or equal to 10";
//   }
// }
// orderMyLogic(6);








// Chaining If Else Statements


// function testSize(num) {
//   // Only change code below this line
//   if (num < 5) {
//     return "Tiny";
//   } else if (num < 10) {
//     return "Small";
//   } else if (num < 15) {
//     return "Medium";
//   } else if (num < 20) {
//     return "Large";
//   } else {
//     return "Huge";
//   }
//   // Only change code above this line
// }
// testSize(3);







// Golf Code

// function golfScore(par, strokes) {
// if (strokes < 2) {
// return "Hole-in-one!";
// } else if (par == par && strokes <= par-2) {
// return "Eagle";
// } else if (par == par && strokes <= par-1) {
// return "Birdie";
// } else if (par == par && strokes === par) {
// return "Par";
// } else if (par == par && strokes === par+1) {
// return "Bogey";
// } else if (par == par && strokes === par+2) {
// return "Double Bogey";
// } else if (par == par && strokes >= par+3) {
// return "Go Home!";
// } 
//   return "Change Me";
// }
// // Change these values to test
// golfScore(4, 7);







//Selecting from Many Options with Switch Statements

// function caseInSwitch(val) {
// var answer = "";
// // Only change code below this line
// switch (val){
// case 1:
// answer = "alpha";
// break;
// case 2:
// answer = "beta";
// break;
// case 3:
// answer = "gamma";
// break;
// case 4:
// answer = "delta";
// break;
// }
// // Only change code above this line
// return answer;
// }
// // Change this value to test
// caseInSwitch(1);






// Adding a Default Option in Switch Statements

// function switchOfStuff(val) {
//   let answer = "";
//   switch (val){
//     case "a":
//     answer="apple"
//     break
//     case "b":
//     answer="bird"
//     break
//     case "c":
//     answer="cat"
//     break
//     default:
//     answer="stuff"
//     break
//   }
//   // Only change code below this line
// // Only change code above this line
//   return answer;
// }
// switchOfStuff(1);








// Multiple Identical Options in Switch Statements

// function sequentialSizes(val) {
//   let answer = "";
//   switch (val){
//     case 1:
//     answer="Low"
//     break
//     case 2:
//     answer="Low"
//     break
//     case 3:
//     answer="Low"
//     break
//     case 4:
//     answer="Mid"
//     break
//     case 5:
//     answer="Mid"
//     break
//     case 6:
//     answer="Mid"
//     break
//     case 7:
//     answer="High"
//     break
//     case 8:
//     answer="High"
//     break
//     case 9:
//     answer="High"
//   }
//   // Only change code below this line
// // Only change code above this line
//   return answer;
// }

// sequentialSizes(1);













// Replacing If Else Chains with Switch

// function chainToSwitch(val) {
// var answer = "";
// // Only change code below this line
// switch(val){
// case "bob":
// answer = "Marley";
// break;
// case 42:
// answer = "The Answer";
// break;
// case 1:
// answer ="There is no #1";
// break;
// case 99:
// answer ="Missed me by this much!";
// break;
// case "John":
// answer = "";
// break;
// case 156:
// answer = "";
// break;
// case 7:
// answer = "Ate Nine";
// break;
// }
// // Only change code above this line
// return answer;
// }
// // Change this value to test
// chainToSwitch(7);







// Returning Boolean Values from Functions

// function isLess(a, b) {
// var answer=""
// switch (true) {
// case a < b:
// answer = true;
// break;
// case a > b:
// answer = false;
// break;
// }
// return answer;
// }
//   // Only change code above this line
// isLess(10, 15);





// Return Early Pattern for Functions

// function abTest(a, b) {
//   // Only change code below this line
//   // Only change code above this line
// if(a < 0 || b < 0){
// return undefined;
// }
// return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// abTest(2,2);








// Counting Cards

// var count = 0;
// function cc(card) {
// if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6) {
//   	//alert("2 3 4 5 6");
//     count += 1;
//   }
//   else if (card == 7 || card == 8 || card == 9) {
//       count += 0;
//   }
//   else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
//       count -= 1;
//   }
//   if (count <= 0) {
//   	return String(count) + " Hold";
//   }
//   else {
//   	return String(count) + " Bet";
//   }
// }
// cc(2); cc(3); cc(7); cc('K'); cc('A');










// Build JavaScript Objects

// var myDog = {
// "name": "Joe",
// "legs": 4,
// "tails": 1,
// "friends":["many", "Ade"]
// };











// Accessing Object Properties with Dot Notation

// const testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };

// // Only change code below this line
// const hatValue = testObj.hat;      // Change this line
// const shirtValue = testObj.shirt;   





// Accessing Object Properties with Bracket Notation

// const testObj = {
//   "anentree": "hamburger",
//   "myside": "veggies",
//   "thedrink": "water"
// };

// // Only change code below this line
// const entreeValue = testObj["anentree"];   // Change this line
// const drinkValue = testObj["thedrink"];    // Change this line







// Accessing Object Properties with Variables

// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };
// var playerNumber = 16;
// var player = testObj[playerNumber];








// Updating Object Properties 

// const myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// // Only change code below this line
// myDog.name="Happy Coder"








// Add New Properties to a JavaScript Object

// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };
// myDog.bark="bow-wow"






// Delete Properties from a JavaScript Object

// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"],
//   "bark": "woof"
// };
// delete myDog.tails







// Using Objects for Lookups 

// function phoneticLookup(val) {
// var result = "";
// Only change code below this line
// var lookup = {
// "alpha":"Adams",
// "bravo": "Boston",
// charlie: "Chicago",
// delta: "Denver",
// echo: "Easy",
// foxtrot: "Frank"
// };
// return lookup[val];

// // Only change code above this line
// return result;
// }
// phoneticLookup("charlie");








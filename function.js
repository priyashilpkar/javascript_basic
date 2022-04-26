// function myFunction(p1, p2) {
//   return p1 * p2;
// }
// console.log(myFunction(3,4))






// meraki example

// function myFunction(a, b) {
//  return a * b;
// }

// var x = myFunction(4, 3);
// console.log(x)




// meraki example
// function sayHello(name) {
//  return "Hello " + name
// }
 
// console.log(sayHello("Pragna"))


// const greet = "Hello World!";
// // Defining function
// function greetWorld() {
//   console.log(greet);
// }
// greetWorld();  // Outputs: Hello World!
// console.log(greet);


// named function

// function name(params) {
//     console.log(params)
// }
// name("priya")




// anonymous function

// var getSum = function(num1, num2) {
//    var total = num1 + num2;
// 	 return total;
// 	};
// console.log(getSum(2,4))



// let x = function () {  
//     console.log('It is an anonymous function');  
// };  
// x();  




// arrow function

// (a, b) => {
// //   let chuck = 4;
//   return a + b ;
// }
// let re=(2,9)
// console.log(re)

// (param1, paramN) => {
//    let a = 1;
//    return a + param1 + paramN;
// }
// console.log(2,4)



// let age = 5;

// let welcome = (age <18) ?
//   () => console.log('Baby') :
//   () => console.log('Adult');
//   () => console.log("priya");
// 
// welcome(); // Baby

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// let result1 = sum(5,7);
// console.log(result1);


// let greet = x => console.log(x);
// greet('Hello'); // Hello 





// meraki question 1

// function sayBye(userName){
//    return "Bye"+" "+userName
// }
 
// console.log(sayBye("Kumar"))



// question 2

// function displayMultiply(num1, num2, num3) {
//    return num1*num2*num3
//   }
  
// console.log(displayMultiply(2, 3, 4));





// question 3

// function getFullName(firstName,lastName){
//  console.log(firstName+" "+lastName)
// }
 
// getFullName("kumar","nayak");



// question 4

// var isEqual = function(str1,str2){
//    console.log(str1===str2)
// }
// isEqual("kumar","nayak");




// question 5

// function getFullName(firstName,lastName){
//  console.log(firstName+" "+lastName)
// }
// getFullName("priya","shilpkar");



// question 6


// function getResult(num1,num2,num3,num4){
//  console.log(num1-num2+num3-num4)
// }
// getResult(2,3,4,5);




// question 7

// function getResult(num1,num2,num3){
//  console.log(num1-num2+num3)
// }
 
// getResult(2,3,4,5);




// question 8

// (function(str1,str2){
//    console.log(str1===str2)
// })("kumar","kumar");




// question 9

// function function_print_lines(str1,str2){
//    console.log(str1);
//    console.log(str2);
// }
// function_print_lines("Mera naam Nayak hai.", "Main NavGurukul ka Academic Associate hun.")




// question 10

// function isGreaterThan20(num){
//    if(num>20){
//        return true
//    }
// }
// function students(list_of_marks){
//    count=0
//    for(var i of list_of_marks){
//        var result= isGreaterThan20(i)
//        console.log(result)
//        if (result === true){
//            count++
//        }
//    }
//    console.log(count);
// }
// students([21,25,19,25,33,54])




// question 11

// function add_numbers(num1,num2){
//    console.log(num1+num2);
// }
// add_numbers(56,12);




// question 12

// function add_numbers(num1,num2){
//    console.log(num1+num2);
//    console.log("------------");
// }
 
// function add_numbers_list(list1,list2){
//    for(var i=0;i<3;i++){
//        add_numbers(list1[i],list2[i]);
//    }
// }
 
// add_numbers_list([50, 60, 10],[10, 20, 13])





// question 13


// function check_numbers(num1,num2){
//    if(num1%2 ===0 && num2%2===0){
//        console.log("Both are Even");
//    }
//    else{
//        console.log("Both are not Even");
//    }
// }
// check_numbers(4,3);




// // question 14 somthing is wrong

// function name1(a,b){
//     // function name1(b) {
//         for (i in a){
//             for (i in b){
//                 if (a[i] && b[i]%2===0){
//                     console.log(a[i],b[i],"Both are even")
//                 }
//                 else{
//                     console.log(a[i],[i],'Both are not even')
//                 }
//             }
//         } 
//     }
// name1([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87]);



// quaetion 14

// function numbers(num1,num2){
//    if (num1 && num2%2===0){
//        console.log("Both are even")
//     }
//     else{
//         console.log("Both are not even")
//     }
// }
// function add_numbers_list(list1,list2){
//    for(var i=0;i<6;i++){
//        numbers(list1[i],list2[i]);
//    }
// }
// add_numbers_list([2,6,18,10,3,75],[6,19,24,12,3,87])





// question 15

// var age=require("readline-sync").questionInt("enter number:")
// if (age>=18){
//     console.log("you are eligible.")
// }
// else{
//     console.log("not eligible")
// }




// queation 16

// function perfect(num){
//    sum=0
//    for(var i=1;i<num;i++){     
//     if(num%i === 0){
//            sum+=i
//        }
//    }
//    if(sum === num){
//        console.log(num,"is a perfect number");
//    }
//    else{
//        console.log(num,"is not a perfect number");
//    }
// }
// var a=require("readline-sync").questionInt("enter number:")
// perfect(a);




// question 17


// function average(num1,num2,num3){
//    console.log("sum of three numbers -",num1+num2+num3);
//    console.log("Average of three numbers -",(num1+num2+num3)/3);
// }
 
// // const input = require('readline-sync');
// let number1 = require("readline-sync").questionInt('Enter the number1 :- ');
// let number2 = require("readline-sync").questionInt('Enter the number2 :- ');
// let number3 = require("readline-sync").questionInt('Enter the number3 :- ');
// average(number1,number2,number3);




// question 18

// function showNumbers(limit){
//    for(i=0;i<=limit;i++){
//        if(i%2 ===0){
//            console.log(i," - Even");
//        }
//        else{
//            console.log(i," - Odd");
//        }
//    }
// }
// showNumbers(3);




// question 19

// function multiplesOfNumbers(limit){
//    var sum=0
//    for(i=0;i<=limit;i++){
//        if(i%3===0 || i%5===0){
//            sum+=i;
//        }
//    }
//    console.log(sum);
// }
// multiplesOfNumbers(10);



// question 20

// function license_checker(speed){
//     points=(speed-70)/5
//    if(speed <= 70){
//        console.log("ok");
//    }
//    else if(speed > 70 && speed<130){
//        console.log(points,"warning! please do speed slow")
//    }
//     else{
//         console.log("License suspended");
//        }
//   }
// var a=require("readline-sync").questionInt("enter number:")
// license_checker(a);




// question 21


// function is_equal_lenth(str1,str2){
//    if(str1.length === str2.length){
//        console.log(str1);
//        console.log(str2);
//    }
//    else if(str1.length > str2.length){
//        console.log(str1);
//    }
//    else{
//        console.log(str2);
//    }
// }
 
// is_equal_lenth("hello","welcome");





// question 22

// function squares_of_numbers(limit){
//    var output={}
//    for(var i=1;i<=limit;i++){
//        output[i]=i*i}
//    console.log(output);
// }
// squares_of_numbers(20)




// n  b    end b    t     end t
// a  40     57     48     35      47m    b17
// p  50      69      48      35           b19



// n   b   t
// a   58   10:37
// p   70    10:38





// arrow function

// var a=(a,b)=>{
//     return a+b
// }
// console.log(a(2,3))



var a=(c)=>{
    b=1
    for (i=1;i<=c;i++){
        b=i*b
        console.log(b)
    }
}
a(5)



// var a=(a)=>{
//     b=a
//     rem=0
//     for (i=1;i<=a;i++){
//         c=b%10
//         rem=rem+c
//         b=b/10
//         console.log(rem)
//     }
//     if (a%rem===0){
//         console.log('harshad number',a)
//     }
//     else{
//         console.log("not harshad numbrer",a)
//     }
// }
// a(18)


// let s='Apple, Bananna, Kiwi'
// a=s.substr(3)
// console.log(a)
// b=s.substr(-4)
// console.log(b)




// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText)





// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText)


// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools");
// console.log(newText)




// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2)


// let text1 = "Hello World!";       // String
// let text2 = text1.toLowerCase();
// console.log(text2)
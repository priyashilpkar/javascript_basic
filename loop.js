// while loop
// var count = 1;
// while (count < 10) {
//    console.log(count);
//    count +=2;
// }

// const { question } = require("readline-sync");

// const { question } = require("readline-sync")

// var i=0;
// while (i<7){
//     if(i%2==0){
// console.log(i)
//     }
//     i++;
// }



// for loop
// for(var i = 0; i <=3; i=i+1){
//    console.log(i)
// }


// for(var n=9;n>0;n--){
//    console.log(n)
// }


// do while loop
// var i=1
// do{
//   if(i%2===1){
//   console.log(i)
//   }
//   i++
// }
// while (i <=10)


// let i=2
// do{
//    console.log(i);
// }
// while (i >10)


// while(i>10){
//    console.log(i);
// }


// // diff
// let Navgurukul = ['Pune', 'Bangalore', 'Sarjapur'];

// // cmpKey are the property keys
// for (let cmpKey in Navgurukul) {
//  console.log(cmpKey);
// }
// console.log("------------------")
// // cmpValue are the property values
// for (let cmpValue of Navgurukul) {
//  console.log(cmpValue)
// }




// const birds={name:"Bald Eagle",type:"Hawk",ScientificName:"HaliaeetusLeucocephalus"}
// console.log(Object.keys(birds).length)

// const birds={name:"Bald Eagle",type:"Hawk",ScientificName:"HaliaeetusLeucocephalus",p:56}
// console.log(Object.values(birds).length)




// question 1
//  enter name: kumar and tell us the what is the output will come
// const n=require("readline-sync").question("enter name")
// var string=""
// for (let i=n.length-1;i>=0;i--) {
//    string=string+n[i]
//    console.log(string)
// }
// if (n===string) {
//    console.log("its palindrome string")
// }
// else {
//    console.log("it's not a palindrome string")
// }




// quesution 2
// var a=require("readline-sync").questionInt("enter number")
// i=1
// c=0
// while (i<=a){
//     if (a%i===0){
//         c=c+1
//     }
//     i=i+1
// }
// if (c===2){
//     console.log("prime")  
// }
// else{
//     console.log("not prime")
// }



// question 3
// for (var i=0;i<10;) {
//   console.log(i)
// } 



// while loop ka use in table

// question 4 
// var i=1
// var a=require("readline-sync").questionInt("enter number:")
// while (i<=10){
//     b=(a+"*"+i+"="+a*i)
//     i=i+1
//     console.log(b)
// }


// for loop ka use in table


// let n=require("readline-sync");
// let num=parseInt(n.question("enter number: "));
// for (let i=1;i<=10;i++) {
//        multi=num*i;
//        console.log(num+"*"+i+"="+multi)
//    }





// question 5
// while loop ka use karke palindrome


// var la=require("readline-sync").question("enter name")
// var i=la.length-1
// str=""
// while (i>=0){
//     str=str+la[i]
//     i=i-1
// }   
// if (la===str){
//     console.log("palindrome")
// }
// else{
//     console.log("not palindrome")
// }



// for loop ka use karke palindrome


//  enter name: kumar and tell us the what is the output will come
// const n=require("readline-sync").question("enter name")
// var string=""
// for (let i=n.length-1;i>=0;i--) {
//    string=string+n[i]
//    console.log(string)
// }
// if (n===string) {
//    console.log("its palindrome string")
// }
// else {
//    console.log("it's not a palindrome string")
// }



// question 6

// for (i=1;i<=100;i++){
//     console.log(i)
// }



// question 7

// for (i=1;i<=100;i++){
//     if (i%7===0){
//         console.log(i)
//     }
// }



// question 8

// var sum=0
// for (i=1;i<=100;i++){
//     sum=sum+i
//     console.log(sum)
// }

// question 9, 12
// sum=0;
// var a=require("readline-sync").questionInt('enter number');
// for (i=1;i<=a;i++){
//     var b=require('readline-sync').questionInt("Koi bhi number daaliye")
//     sum=sum+b;}
// console.log("total="+sum)




// question 10

// for (i=1;i<=100;i++){
//     if (i%2===0){
//         console.log(-i)}
//     else{
//         console.log(i)
//     }
// }



// question 11

// for (i=1;i<=20;i++){
//     if (i%7===0 && i%3===0){
//         console.log("navgurukul")
//     }
//     else if (i%3===0){
//         console.log('nav')
//     }
//     else if (i%7===0){
//         console.log("gurukul")
//     }
//     else{
//         console.log(i)
//     }
// }



// question 13

// for (i=156;i<=165;i++){
//     a=i-155
//     console.log(a)
// }
// // question 14
// for (i=5;i<=1;i--){
//     for (j=5;j<=1;j--){
//         console.log(i+end=)
//     }
// }


// question 1

// let n=require("readline-sync");
// let choose_ascii=(n.questionInt("enter number: "));
// var ascii_char=97+choose_ascii
// var str=""
// for (var i=97;i<ascii_char;i++) {
//     str+=String.fromCharCode(i)
// }
// console.log(str);





// question 2



// let c=require("readline-sync");
// let loop_time=c.questionInt("enter loop time: ");
 
// var maxi=0;
// let lis=[ ]
// for (let i=1;i<=loop_time;i++) {
//    let num=c.questionInt("enter number: ")
//    lis.push(num)
// }
// var maxi=lis[0];
// for (let j=0;j<lis.length;j++) 
//   if (maxi<lis[j]){   
//     maxi=lis[j]
// }
// console.log(maxi)



// question 3

// const result = {
//    success: ["max-length","no-amd",'prefer-arrow-functions'],
//    failure: ["no-var","var-on-top","linebreak"],
//    skipped: ["no-extra-semi","no-dup-keys"]};
// const success=result.success
// const store=success.length
// for(const value in success){
//   console.log(success[value])
// }




// question 4






// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]};
//  const success=result.success
//  const store=success.length
//  for(const value in success){
//    console.log(success[value])
//  }




// let n=require("readline-sync");
// let choose_ascii=(n.questionInt("enter number: "));
// var ascii_char=97+choose_ascii
// var st=""
// for (var i=97;i<ascii_char;i++) {
//        st+=String.fromCharCode(i)
       
// }
// console.log(st);




// Pattern question 

// var n = 5; 
// var string ="";
// for (let i = 1; i<=n; i++) {
//   for (let j = 1; j<=5; j++) {
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);



// var n=1;
// var str="";
// for (i=1;i<=5;i++){
//     for (j=1;j<=i;j++){
//         str+=i
//     }
//     str+="\n";
// }
// console.log(str)



// var n = 5; 
// var string = "";
// for (let i = 1; i<=n; i++) {
//   for (let j = 1; j<=i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);




// var n = 5; 
// var string = "";
// for (let i = 1; i<=n; i++) {
//   for (let j = 1; j<=5; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);



var str=""
n=1
for (let i=5; i>=n;i--){
    for (let j=1;j<=i;j++){
        str+=i}
    str+="\n"
}
console.log(str)
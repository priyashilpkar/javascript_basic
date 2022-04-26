// shift
//  delete element from array

// var a=[2,4,5,6,7]     //delete first element
// b=a.shift()
// console.log(b)      //2
// a.shift()
// console.log(a)      //[ 4, 5, 6, 7 ]



// pop

// var a=[2,4, 5, 6, 7 ]     //delete last element
// a.pop()
// console.log(a)              //[ 2, 4, 5, 6 ]
// console.log(a.pop())        //6


// push
// add  element in end

// var a=[1,2,3,4,5,6]    //push array in end
// var b=[7,8,9]
// a.push(b)
// console.log(a)      //[ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]


// push

// var a=[1,2,3,4,5,6]    //push element in end
// a.push("a","b","c")
// console.log(a)        //[ 1, 2, 3, 4, 5, 6, 'a', 'b', 'c' ]



// var a=[ 1, 2, 3, 4, 5, 6]       // add array in start
// var b=["a","b","c"]
// a.unshift(b)
// console.log(a)                  //[ [ 'a', 'b', 'c' ], 1, 2, 3, 4, 5, 6 ]


// unshift

// var a=[ 1, 2, 3, 4, 5, 6]       // add element in start
// a.unshift(7,8,9)
// console.log(a)                 //[ 7, 8, 9, 1, 2, 3, 4, 5, 6 ]




// concat
// join tow array  in the end

// var a=[1,2,3,4,5]      // join two array element in the end
// var b=[6,7,8,9]
// c=a.concat(b)
// console.log(c)




// includes

// var a=[1,2,3,4,5,6]
// console.log(a.includes(5))        // true
// console.log(a.includes(9))        // false



// not includes

// var a=[1,2,3,4,5,6]              // check this element in the array present or not 
// console.log(!a.includes(9))       // true
// console.log(!a.includes(5))       // false




// slice


// var a=[9,12,3,4,8,6]      // jitna number dete hai utna aage se delete karta hai aur sab o/p deta hai
// b=a.slice(2)
// c=a.slice(4)
// console.log(b)              //  [ 3, 4, 5, 6 ]
// console.log(c)              //  [ 5, 6 ]

// b=a.slice(2,5)        // kis index  se hame element chahiye  aur jis index tak chahiye usse ek jyada number lete hai
// console.log(b)        // [ 3, 4, 8 ]




// splice

// var a=["a","b","c","d"]        // (1,kis index ke baad element daalna hai,2 how many element you want yto delete,3 new value)
// a.splice(0,2,"i","o")
// console.log(a)                 //[ 'i', 'o', 'c', 'd' ]


// indexof

// var a=[1,3,5,55,2,67,43,76]        // in which position is the element
// b=a.indexOf(55)
// console.log(b)           // 3 





// a=[1,3]
// a.name='priya'
// console.log(a)



// advance

// JavaScript Demo: Array.from()

// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
// console.log(Array.from('foo'));                 // Array from a String
// // expected output: Array ["f", "o", "o"]
// console.log(Array.from([1, 2, 3], x => x + x));"b":20},{"a":30,"b":40},{"a":50,"b":60}];
// var c=a.map(value=> value.a);
// console.log(c)
// // expected output: Array [2, 4, 6]



// Map()


// var a=[1,3,5,8,10]
// var b=a.map(test);
// console.log(b)
// function test(x){
//     return x*5
// }


// var a=[10,20,30,40,50]
// var b=a.map(function(value,i){
//     value++;
//     return value
//     console.log(value,i)

// })
// console.log(a)
// console.log(b)


// var a=[{'a':10,"b":20},{"a":30,"b":40},{"a":50,"b":60}];
// a.map(function(value){
// console.log(value.a)
// console.log(value.b)
// })



// var a=[{'a':10,"b":20},{"a":30,"b":40},{"a":50,"b":60}];
// var c=a.map(function(value){
// return (value.a,value.b)
// })
// console.log(c)



// var a=[{'a':10,"b":20},{"a":30,"b":40},{"a":50,"b":60}];
// var c=a.map(value=> value.a);
// console.log(c)



// var a=[{"fname":"yahoo",'lname':"baba"},{'fname':'rahul',"lname":"kumar"},{"fnmae":'karan',"lname":"sharma"}]
// var b=a.map(test);
// console.log(b)
// function test(x){
//     return x.fname +" "+ x.lname;
// }





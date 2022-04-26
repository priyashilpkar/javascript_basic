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






// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3)





// let text = "5";
// let padded = text.padStart(8,2)
// console.log(padded)

// o/p 44444445





// let text = "5";
// let padded = text.padEnd(8,4);
// console.log(padded)

// o/p 54444444





// let text = "HELLO WORLD";
// let char = text.charAt(6);
// console.log(char)





// let text = "AELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char)





// let str = "Please locate where 'locate' occurs!";
// a=str.indexOf("occurs");
// console.log(a)





// let str = "Please locate where 'locate' occurs!";
// a=str.lastIndexOf("cate");
// console.log(a)





// let str = "Please locate where 'locate' occurs!";
// a=str.lastIndexOf("John");
// console.log(a)





// let str = "Please locate where 'locate' occurs!";
// a=str.indexOf("locate",10);
// console.log(a)






// let str = "Please locate where 'locate' occurs!";
// a=str.search("locate");
// console.log(a)





// let text = "The rain in SPAIN stays mainly in the plain";
// a=text.match(/ain/g); 
// console.log(a)






// let text = "Hello world, welcome to the universe.";
// a=text.includes("welcome");
// console.log(a)





// let text = "Hello world, welcome to the universe.";
// a=text.includes("world");
// console.log(a)






// function x(){
//     console.log(a)
// var a=5
// x()}
// var a=5


async function test(){
    console.log("2: priya")
    const response= await fetch("json/await.json");
    const student= await response.json();
    return student

}
console.log("1: priya")
test()
console.log("5: priya")
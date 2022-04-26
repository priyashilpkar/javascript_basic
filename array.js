// var a=[2,"rt",234,"priya",3.5]
// console.log(a[3])
// console.log(a)

// var x=null
// console.log(typeof(x))
// console.log(x)

// var a={1:"p",3:"q",2:"9"}
// for (i of a){
//     console.log(i)
// }


// var a=[[1,2],[3,4],[5,6]];
// var i=0;
// var sum=0;
// var m=[];
// while (i<a.length){
//     j=0
//     while (j<a[i].length){
//         m.push(a[i][j])
//         j=j+1}
//     i=i+1}
// console.log(m)



// var x=[['a','b','c'],['d','e','f'],['g','h','i']]
// m=[]
// i=0
// while (i<x.length){
//   j=0
//   while (j<x[i].length){
//     k=0
//     while (k<x[i][j].length){
//       m.push(x[i][j][k])
//     k=k+1}
//   j=j+1}
// i=i+1}
// console.log(m)


// var x=[54,74,67,82,3,2,8]
// m=[];
// for (i=0;i<x.length;i++){
//     if (x[i]>54){
//         if (x[i]%2===0){
//         m.push(x[i])}}}
// console.log(m)



// m=[]
// n=[]
// var x=[6,3]
// var y=[4,3]
// a=x[0]**x[1]
// b=y[0]**y[1]
// m.push(a)
// n.push(b)
// console.log(m)
// console.log(n)

// var a=[1,2,3]
// // b=a.pop()
// console.log(a.pop())


// let a = ['sleep', 'work', 'exercise']
// let b= ['eat'];

// // sorting elements in the alphabetical order
// a.sort();
// console.log(a); // ['exercise', 'sleep', 'work']

// //finding the index position of string
// var a=[1,32,2,19,67,3]
// const position = a.indexOf(19);
// console.log(position); // 3

// // slicing the array elements
// var a=["a","b","c","d","e","f"]
// const newDailyActivities = a.slice(2);
// console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
// var a=[1,2,3,4];
// var b=[5,6,7,8];
// const routine = a.concat(b);
// console.log(routine); // ["exercise", "sleep", "work", "eat"]



// let arr = ['h', 'e'];
// arr.name = 'John';

// console.log(arr); // ["h", "e"]
// console.log(arr.name); // "John"
// console.log(arr['name']); // "John"



// a=['priya','"sonam',"laxmi",'rakhi']
// delete a[2];
// console.log(a)


// let ailyActivities = ['eat', 'sleep'];

// // add an element at the end
// ailyActivities.push('exercise');

// console.log(ailyActivities); //  ['eat', 'sleep', 'exercise']

// // The unshift() method adds an element at the beginning of the array. For example,

// let dailyActivities = ['eat', 'sleep'];

// //add an element at the start
// dailyActivities.unshift('work'); 

// console.log(dailyActivities); // ['work', 'eat', 'sleep']


// let studentsData = [['Jack', 24], ['Sara', 23]];

// // adding element at 1 index
// studentsData.splice(0,['Peter', 24]);

// console.log(studentsData); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]



// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

// const a = ['Wind', 'Water', 'Fire'];
// console.log(a.join());      // 'Wind,Water,Fire'
// console.log(a.join(', '));  // 'Wind, Water, Fire'
// console.log(a.join(' + ')); // 'Wind + Water + Fire'
// console.log(a.join(''));    // 'WindWaterFire'
// console.log(a.join('-'));












// // question 1
// var myFavouriteGames = ["chess", "Ludo", "Badminton", "Volleyball"];
// console.log(myFavouriteGames);



// question 2

// var myFavouriteFruits = ["Mango", "Orange", "Banana", "Grapes"];
// console.log(myFavouriteFruits[2]);


// question 3

// var myFavouriteFruits = ["Mango", "Orange", "apple"];
// console.log(myFavouriteFruits.pop());


// question 4

// let myFavouriteGames = ["Chess", "Ludo", "Badminton"];
// myFavouriteGames.unshift("Basketball");
// console.log(myFavouriteGames);


// question 5

// let myFavouriteGames = ["chess", "Ludo", "Badminton"];
// console.log(myFavouriteGames.2);



// question 6

// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"];
// let removedItems = myFavouriteGames.splice(2,3);
// console.log(myFavouriteGames);




// question 7

// numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var count_element=0;
// for(var i=0; i<numbers.length;i++){
//     count_element++
// }
// console.log(count_element);





// quesution 8

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max_num=0;
// for(var i=0; i<numbers.length;i++){
//     if (numbers[i]>max_num){
//        max_num=numbers[i]}}
// console.log(max_num)


// question 9

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var max=0;
// var second_max=0;
// for (var i =0;i<numbers.length;i++){
//      if (numbers[i]>max) {
//      max=numbers[i];}
//  else{
//     if (numbers[i]> second_max) {
//         if (numbers[i]<max){
//     second_max=numbers[i];
//    }}}}
// console.log(second_max);




// question 10

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var reversedArray=[]
// for(var i=numbers.length-1; i>=0;i--){
//    reversedArray.push(numbers[i])
// }
// console.log(reversedArray);



// question 11

// var Name=['m','a','l','a','y','a','l','a','m'];

// // var Name="uow"
// var new_array=[];
// for (var i=Name.length-1; i>=0;i--){
//    new_array.push(Name[i]);
// }
// var count=0;
// for (var j=0; j<Name.length;j++)   

//     if (new_array[j]===Name[j]){
//        count++;   
//    }
// if(count===Name.length){
//    console.log("This is palindrome");
// }else{
//    console.log("This is not a palindrome");
// }




// var name="wow"
// str=""
// for (i=name.length-1;i>=0;i--){
//    str=str+name[i]
// }
// if (name===str){
//    console.log("palindrome")
// }
// else{
//    console.log(("not palindrome"))
// }













// question 12

// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// elements=[]
// for(var i of list1){
//    if (!list2.includes(i)){
//        elements.push(i)
//    }
// }
// console.log(elements);




// question 13

// var marks = [
//    [78, 76, 94, 86, 88],
//    [91, 71, 98, 65, 76],
//    [95, 45, 78, 52, 49]
// ];
// var sum=0;
// for(var i of marks){
//    for(var j of i){
//        sum+=j
//    }
// }
// console.log(sum);




// question14

// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// var number =30;
// output=[]
// for(var i of n){
//    for(var j of n){
//        if (i+j === number){
//            output.push([i,j])
//        }
//   }
// }
// console.log(output);




// question 15

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var odd_numbers=0;
// var even_numbers=0;
// for(var i of elements){
//    if(i%2 ===0){
//        even_numbers+=1
//    }
//    else{
//        odd_numbers+=1
//    }
// }
// console.log("odd_numbers=",odd_numbers);
// console.log("even_numbers=",even_numbers);




// question 16

// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
 
// var sum_odd_numbers=0
// var sum_even_numbers=0
// for(var i of elements){
//    if(i%2 ===0){
//        sum_even_numbers+=i
//    }
//    else{
//        sum_odd_numbers+=i
//    }
// }
// console.log("sum_even_numbers=",sum_even_numbers);
// console.log("sum_odd_numbers=",sum_odd_numbers);




// question 17

// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var sum_odd_numbers=0;
// var sum_even_numbers=0;
// for(var i of elements){
//    if(i%2 ===0){
//        sum_even_numbers+=i
//    }
//    else{
//        sum_odd_numbers+=i
//    }
// }
// console.log((sum_even_numbers+sum_odd_numbers)/2);




// question 18

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var count_odd_numbers=0;
// var sum_odd_numbers=0;
// var sum_even_numbers=0;
// var count_even_numbers=0;
// for(var i of elements){
//    if(i%2 ===0){
//        sum_even_numbers+=i;
//        count_even_numbers+=1;
//    }
//    else{
//        sum_odd_numbers+=i;
//        count_odd_numbers+=1;
//    }
// }
// console.log(("averagre=",sum_even_numbers+sum_odd_numbers)/2);
// console.log('count_odd_numbers',count_odd_numbers);
// console.log('count_even_numbers',count_even_numbers);
// console.log("sum_odd_numbers",sum_odd_numbers);
// console.log("sum_even_numbers",sum_even_numbers);





// question 19

// var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
 
// var count_of_crorepati=0;
// var count_of_lakhpati=0;
// var count_of_dilwale=0;
// for( var  i of kitna_paisa_hai){
//    if(i>= 10000000){
//        count_of_crorepati+=1
//    }
//    else if(i>=100000){
//        count_of_lakhpati+=1
//    }
//    else{
//        count_of_dilwale+=1
//    }
// }
// console.log("count_of_crorepati=",count_of_crorepati);
// console.log('count_of_lakhpati=',count_of_lakhpati);
// console.log('count_of_dilwale=',count_of_dilwale);






// question 20

// char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// uniques=[]
// for(var i of char_list){
//    if(!uniques.includes(i)){
//        uniques.push(i)
//    }
// }
// console.log(uniques);
 
// for(var j of uniques){
//    count=0
//    for(var k of char_list){
//        if (j === k){
//            count+=1
//        }
//    }
//    console.log(j,count,"times");
// }





// question 21

// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// uniques=[]
// duplicates=[]
// for(var i of number_list){
//   if(!uniques.includes(i)){
//       uniques.push(i)
//   }
// }
// for(var j of uniques){
//   count=0
//   for(var k of number_list){
//       if (j === k){
//           count+=1
//       }
//   }
//  if(count >1){
//    duplicates.push(j);
//  };
// }
// console.log(duplicates)


// question 22

// var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// var subStr = "over";
 
// var c = mainStr.split(" ");
// output="";
// for(var i of c){
//    output=output+i+" "
// }
// console.log(output);


// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// i=0
// m=[]
// while (i<number_list.length){
//   if (!m.includes(number_list[i])){
//     m.push(number_list[i])
//   }
// i=i+1}
// console.log(m)

// const str = 'To be, or not to be, that is the question.' 

// console.log(str.includes('To be'))        // true
// console.log(str.includes('question'))     // true
// console.log(str.includes('nonexistent'))  // false
// console.log(str.includes('To be', 1))     // false
// console.log(str.includes('TO BE'))        // false
// console.log(str.includes(''))   



// const str = 'To be, or not to be, that is the question.' 

// console.log(str.includes('To be'))      
// console.log(str.includes('question'))  
// console.log(!str.includes('nonexistent'))
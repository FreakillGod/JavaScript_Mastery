let fruits=["apple","mango","orange"];
//Arrays.isArray to find if it is an array
console.log(Array.isArray(fruits));
for(let items in fruits){
    console.log(fruits[items]);
}
//Push and Pop is array******* ps push and pop >faster> shift and unshift
fruits.push('grapes');      //add element to the last node in fruits
fruits.pop();               //removes the laste element
console.log(fruits);

//shift and unshift => To Add/Remove elemets in the 0th Node
fruits.unshift("rasberry");     //adds element
fruits.shift(fruits);           //removes element
console.log(fruits);

//primitive vs referenced => primitive values are unique as they are immutable
//refernce type uses heap so they point to the same element

//to clown an array
let array1=["item1","item2"];
let array2=[...array1] 
// or 
array2=array1.slice(0) 
console.log(array2)
//clone and add new element
array3=[...array1,"item3","itms4"];  //hard way =array1.slice(0).concat(["item3","iten4"]);
console.log(array3)
//add two array
let array4=[...array1,...array3];
console.log(array4,array4.length) //array.length <=will also return length of array 

//to loop in array usign=> ******************** of  ************************
for(let items of fruits){
    console.log(items);}

//to add fruits item to fruits1 same like cloning
let fruits1=[];
for(let i=0;i<fruits.length;i++){
   fruits1.push(fruits[i]);  
}
console.log("after pusing item to new array",(fruits1))

//Array Destructure=> to make new variable by taking an element from array
const myArray=['val1',"cal2","val3","val4","val5"];
//...items3 here will tak all the rest value as array
[items1,items2,...items3]=myArray;
console.log(items1,items2,items3,"-------------mark 3")


//IMPORTANT ARRAY METHODs =>forEach, map 
//calling function inside loop
let num=[23,54,65,23,54];

// const addition=(num,index)=>{
//     console.log("index:",index,"number is",num,"and its 2x is ",num*2);
//     // for(let i=0;i<num.length;i++){
//     //     addition(num[i],i)
//     // }
// }
// addition(num)

//___forEach___ (Shortcut) passes the number and index automatically
//it does the same work of for loop above
// num.forEach(addition);

//Extra Short
num.forEach(function(num,index){
    console.log("index:",index,"number is",num,"and its 2x is ",num*2);
})

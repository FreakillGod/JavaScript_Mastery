//Iterables are those which has array like property 
//for of loop    //objects are non iterable

const number= new Set();       //OR
let num= new Set([1,2,4,5,6,7,8,9,34,65]);
console.log(num);

//.add() to add       .had() to find element        
number.add(1);
number.add(2);
number.add(4);
console.log(number,number.has(23)); 

//to remove duplicate items from array //convert it into SET

let duplicate=[34,23,54,6,4,6,6,1,33,34];
const Duplicates=new Set(duplicate);
console.log(Duplicates);

//to find the length of set
let length=0;
for(let item of num){
    length++;
}
console.log(length)

//**********************   MAP DATA STRUCTURE   ************************/
//unlike objects where keys are in the form of strings MAPs can take keys in any format 
const person=new Map();
person.set('fname','vikash');       //.set method to add  new value
person.set('age',34);
person.set(1,'male');       // number can also be used as key

console.log(person.get("age"));

for(let key of person.keys()){         //person.keys (here keys is important)
    console.log(key);
}
//in better format
for(let [key,value] of person){
    console.log(key,value);
}

//using MAP to add all values in object
const userinfo = new Map();
userinfo.set(person1,{id:1, fname:"vikash"});
console.log(userinfo);
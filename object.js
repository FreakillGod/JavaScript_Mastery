const person={
    name:"vikash",
    age:"34",
    gender:"male"
};
console.log(person,person.gender)  //will return whole and then only that specified element
//adding values in object
person.hobbies=["playing","dancing","pubg"];
person.rank="developer";
console.log(person)

//[]
console.log(person["name"]);
person["id"]= 34;
console.log(person);

//. vs []
let key = "email";
person[key]="pvickey663@gmail.com";
console.log(person,"--------------------------")

//print value of object using loop
//cannot iterate object using=> for of loop
for(let key in person){
    console.log(person[key]); //or
    console.log(`the key is ${key} and the value is ${person[key]}`); //or
    console.log(key," : ",person[key]);
}

//To return the value of an Object in array format=> Object.keys(person)
let NewArary=Object.keys(person)
console.log(NewArary);

//Add value in the form of key:value format

const key1="obj1";
const key2="obj2";

const value1="my val 1";
const value2="my val 2";

const obj={
    [key1]:value1,
    [key2]:value2
}
console.log(obj);

//spread ooperator in object adding object person and above obj
const newObj={...person,...obj};
console.log(newObj);

//to add values in object without keys
let newobj={...["items1","items","items3"]};
console.log(newobj, "------------------------------");

//object destructuring
const band={
    name:"skillix",
    age:"34",
    // genre:"bass"
}
// const bandname=band.name;

//... to add rest values in the form of object in different obj
const {name,age}=band; //write same names as keys
console.log(name);
//if you want to use new variable for the keys but cant use spread operator
let{name:bandname,age:bandage}=band;
console.log(bandage);

//___________Object Inside Array___________
const users=[{userid :1, username:"vikas", agee:34},
             {userid :2, username:"rakesh", agee:4},
             {userid :3, username:"mihu", agee:42}]
console.log(users)

for(let user of users){
    console.log(user)
}

//Array Object destructuring
const []=users; //clones the user object into array 

//using constructor target = users and as to destructure the values inside object
//we us {} to destructure from the object then seleting the required element
const[{userid:firstname},,{agee}]=users;  //will create two constant userid and agee
console.log(firstname,agee) //firstname is now refrencing to userid 

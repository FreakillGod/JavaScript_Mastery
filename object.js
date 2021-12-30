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
console.log(person,"-----marker1");

//. vs []
let key = "email";
person[key]="pvickey663@gmail.com";
console.log(person)

//to print value of object
for(let key in person){
    console.log(person[key]); //or
    console.log(`the key is ${key} and the value is ${person[key]}`); //or
    console.log(key," : ",person[key]);
}

//To return the value of an Onject in array format=> Object.keys(person)
let NewArary=Object.keys(person)
console.log(NewArary);





//  * Objects
// //An Object is a collection of properties, and a property is an asociation between a name(or key) and a value. 
var person = {
    name: 'Gabriel',
    age:28,
    hobbies: ['running', 'gaming', 'watching Vh1']
    ,sayHello: function(){
        console.log('Hello, my name is ' + this.name)//this operator refers to the callers context"
    }                                                //whos executing this function? left of the call.        
)

console.log(person.name); // Gabriel
person.sayHello(); //Hello, my name is Gabriel
// parenthesis are used to execute a function

objects-//complex arrays/ collection of properties/keys values. 
const person = {
name: 'Gabriel',
age: 29,
isTeaching: no, 
hobbies: ['reading', 'videogames'];
education: {
    highschool: {
        name : "some high school";
    },
    college: {
        Name: "MIT",
    }
}}
speak: function () {
    console.log (`Hello class! My name is ${this.name}.`);  // ${this.name}; this keyword in java refers to the callers context.
    // which is to the left of the dot operator in this situation. Because the entire object is the person I have access to a property called name
    //so ultimately this name actually resolves to Gabriel. 
}
console.log(person);
console.log(person.name); // Gabriel
console.log(person.age); // 28
console.log(person['name']); // another access properties value on an object is use the square bracket syntax 
console.log(person.hobbies[1]); // video games
console.log(person.education.college.name); // MIT

person.speak();// method-- anytime you have a function on an object as a property thats known as a method..
person.speak();//Hello class! My name is Gabriel.


for (const key in person) //  going through each key in the object and printing out its value
    const value = person[key];
    console.log(key, value);

const keys = objects.keys(person);
console.log(keys);
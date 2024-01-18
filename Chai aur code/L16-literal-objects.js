// Objects are of two types -> 1.singleton 2.literals
// Object.create | this is another method namely constructor method. In this singleton is created.

// object-literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Shaswata",
    "full name": "Shaswata Karan",
    [mySym]: "mykey1",
    age: "22",
    location: "Kolkata",
    isLoggedIn: false,
    lastLoginDys: ["Monday", "Tuesday"]
}

// console.log(JsUser.name)
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym])

// JsUser.age = "23"
// console.log(JsUser.age)

// Object.freeze(JsUser)

// JsUser.age = "25"; // object value will not change because it has been freezed.
// console.log(JsUser.age);

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
// console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};
console.log(JsUser.greeting()); // object -> anonymous
console.log(JsUser.greetingTwo()); // object -> anonymous
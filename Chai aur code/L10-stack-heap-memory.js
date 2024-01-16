// Primitive -> 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// Reference (Non primitive) -> Array, Objects, Functions

// Stack (Primitive), Heap (Non-Primitive)

let userOne = {
  email: "user@gmail.com",
  upi: "user@upi",
};

let userTwo = userOne;
userTwo.email = "shaswatakaran2016@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
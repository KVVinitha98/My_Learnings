const udemy = "udemy";
console.log(...udemy);
console.log([...udemy].join("."));

// create a nre array and copy the items into new array
const fruits = ["orange", "apple", "grapes"];
const veggies = ["carrot", "beetroot", "lemon"];
const newArray = [...fruits, ...veggies];
console.log(newArray);

// In object
const person = { name: "vini", job: "developer" };
const newPerson = { ...person, last: "kondreddy" };
console.log(newPerson);

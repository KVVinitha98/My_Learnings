const fruits = ["orange", "banana", "appple", "pear", "grapes"];
console.log(fruits[0], fruits[1], fruits[2]);

const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

// If we want to access specific array values not all of them, use comma(,)

const [orange, , apple, pear] = fruits;
console.log(orange, apple, pear);

// Swappping variable values without using temp variable
let first1 = "vini";
let second = "kondreddy";
[second, first1] = [first1, second];
console.log(first1, second);

// .....................Destructing objects................//

const bob = {
	first: "bob",
	last: "sanders",
	city: "chicago",
	siblings: {
		sister: "jane",
		brother: "jack",
	},
};

/*const firstName = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister;
console.log(firstName, lastName, sister);
*/

const { first, last, city, zip } = bob;
console.log(first, last, city, zip);

// using alias to change property name
const { first: firstName } = bob;
console.log(firstName);

// If property itself is an object
const {
	siblings: { sister },
} = bob;

console.log(sister);

// using alias to sister
const {
	siblings: { sister: favouriteSister },
} = bob;
console.log(favouriteSister);

// Destructuring objects in functions

/* Method 1:
function printPerson(person) {
	const { first, last } = person;
	console.log(first, last);
}
printPerson(bob);
*/

function printPerson({ first, last, city, siblings: { sister } }) {
	console.log(first, last, city, sister);
}
printPerson(bob);

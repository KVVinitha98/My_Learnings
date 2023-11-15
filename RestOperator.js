const fruits = ["apple", "banana", "orange", "lemon", "pear"];
const [first, second, ...restofFruits] = fruits;
console.log(first, second, restofFruits);
const specificFruit = restofFruits.find((fruit) => fruit === "pear");
console.log("specificFruit", specificFruit);

const person = { name: "vini", last: "kondreddy", job: "developer" };
const { name, ...rest } = person;
console.log(name, rest);
const { job, ...restofPerson } = person;
console.log(job, restofPerson);

// Rest operator in functions

const getAverage = (name, ...scores) => {
	// Function declaration use rest
	const average =
		scores.reduce((total, score) => {
			total += score;
			return total;
		}, 0) / scores.length;
	console.log("average", average);
};
getAverage(person.name, 86, 78, 43, 19);

//Spread Operator
const testScores = [86, 78, 43, 19];
getAverage(person.name, ...testScores); // Function invoke use spread

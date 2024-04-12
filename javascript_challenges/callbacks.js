function makeUpperCase(value) {
	console.log(value.toUpperCase());
}

function reverseString(value) {
	console.log(value.split("").reverse().join(" "));
}

function handleName(name, last, cb, cbReverse, cbfunction) {
	const fullName = name + `${last} smith`;
	cb(fullName);
	cbReverse(fullName);
	cbfunction(fullName);
}

handleName("vini", "kond", makeUpperCase, reverseString, function (value) {
	console.log(value);
}); // Do not invoke a callback function here just pass the reference as makeUpperCase,reverseString

handleName("vini", "kond", makeUpperCase, reverseString, (value) =>
	console.log(value),
);

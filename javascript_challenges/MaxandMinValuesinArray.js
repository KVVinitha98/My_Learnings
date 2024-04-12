const a = [2, 5, 7, 1, 9, 65, 89];
const maxfunction = a.reduce((acc, curr) => {
	return acc > curr ? acc : curr;
});
console.log(maxfunction);

const minfunction = a.reduce((acc, curr) => {
	return acc < curr ? acc : curr;
});
console.log(minfunction);

function isPrime(num) {
	if (num < 2) {
		return false;
	}
	/*  
	for (let i = 2; i < num; i++)
		if (num % i === 0) {
			return false;
		}

	return true;

*/
	let root = Math.ceil(Math.sqrt(num));
	console.log(root);
	for (let i = 2; i <= root; i++)
		if (num % i === 0) {
			return false;
		}

	return true;
}

console.log(isPrime(8));
console.log(isPrime(11));
console.log(isPrime(121));
console.log(isPrime(127));

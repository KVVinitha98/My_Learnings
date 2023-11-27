function countLetters(str) {
	let tempStr = str.split("");
	let letters = [];
	let count = 1;
	for (let i = 0; i < tempStr.length; i++) {
		if (tempStr[i] === tempStr[i + 1]) {
			count++;
		} else {
			let value = `${count}${tempStr[i]}`;
			letters = [...letters, value];
			count = 1;
		}
	}
	return letters.join("");
}

console.log(countLetters("ffffeettttttgggf"));

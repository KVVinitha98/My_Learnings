function countingLetters(str) {
	let tempStr = str.split(" ");
	console.log(tempStr);
	tempStr = tempStr.map((item) => {
		let tempItem = item.toLowerCase().split("");
		return tempItem.reduce(
			(acc, current) => {
				acc[current] = acc[current] ? acc[current] + 1 : 1;
				if (acc[current] > acc.max) {
					acc.max = acc[current];
				}
				return acc;
			},
			{ max: 1, word: item },
		);
	});
	console.log(tempStr);
	let amount = 1;
	let word = "";
	for (let i of tempStr) {
		if (i.max > amount) {
			amount = i.max;
			word = i.word;
		}
	}
	console.log(word);
	if (amount > 1) {
		return word;
	}

	return -1;
}

console.log(countingLetters("Javascript is a greatest languageee"));

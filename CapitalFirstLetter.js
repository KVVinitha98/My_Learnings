function firstCapitalLetter(str) {
	let words = str.split(" ").map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});
	return words.join(" ");
}

console.log(firstCapitalLetter("this is my longest word"));

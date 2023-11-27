function checkPalindrome(str) {
	let tempStr = str.toLowerCase().split(" ").join("");
	console.log(tempStr, typeof tempStr);

	let secondstr = tempStr.split("").reverse().join("");
	console.log(secondstr);

	return tempStr === secondstr;
}

console.log(checkPalindrome("Was it a car or a cat I saw"));
console.log(checkPalindrome("Was it a car or a cat I sa"));

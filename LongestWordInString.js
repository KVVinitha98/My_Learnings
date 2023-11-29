function longestWord(str) {
	let words = str.split(" ");
	let longword = words.reduce((long, current) => {
		if (current.length > long.length) {
			long = current;
		}
		return long;
	}, "");
	return longword;

	/* Another method
     let longestWord = "";
     for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
     }

     return longestWord;
    */
}
console.log(longestWord("this is my longest word"));
console.log(longestWord("this is another longerh word"));

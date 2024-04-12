function unique(str) {
	/*
    let values = [];
    for(let letter of str){
    if(values.indexOf(letter)!== -1){
        return false
    }
    values.push(letter)
    }
    return true

*/

	//Method 2
	/*  
    let values = {};
    for(let letter of str){
        if(values[letter]){  // check if values object has each letter as property
            return false
        }
        values[letter] ="exists";
    }
    return true;
*/

	/*
	for (let i = 0; i < str.length; i++) {
		if (str.lastIndexOf(str[i]) !== i) {
			return false;
		}
	}
	return true;

*/

	/*
	let tempStr = new Set();
	for (let letter of str) {
		if (tempStr.has(letter)) {
			return false;
		}
		tempStr.add(letter);
	}
    return true;

*/
	return new Set(str).size === str.length; // one line code
}

console.log(unique("abcxde"));
console.log(unique("abcadbea"));

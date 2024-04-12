const arr = [2, 3, 5, 2, 4, 8, 2, 8];
let duplicates = arr.filter((n, index, array) => {
	return array.indexOf(n) !== index;
});
console.log(duplicates);

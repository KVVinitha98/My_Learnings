const a = [2, 5, 7, 1, 9, 65, 89];
const SecondLargestValue = a.sort((a, b) => {
	return a - b;
});
SecondLargestValue.pop();
console.log(SecondLargestValue[SecondLargestValue.length - 1]);

// Method 2
const largestValue = (arr) => {
	const firstLargestValue = Math.max(...arr);
	console.log(firstLargestValue);
	index = arr.indexOf(firstLargestValue);
	console.log(index);
	arr.splice(index, 1);
	const secondLargest = Math.max(...arr);
	return secondLargest;
};

console.log(largestValue(a));

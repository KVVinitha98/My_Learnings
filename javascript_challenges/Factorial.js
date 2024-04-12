const num = 3;
var f = 1;
if (num < 0) {
	console.log(`factorial ${num} not possible`);
} else {
	for (let index = 1; index <= num; index++) {
		f = f * index;
	}
}
console.log(f);

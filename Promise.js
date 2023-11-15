const promise = new Promise((resolve, reject) => {
	// resolve([1,2,3])
	reject("it is rejected");
});

console.log(promise);
promise
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

const btn = document.querySelectorAll(".btn");
console.log(btn);
btn.addEventListener("click", () => {
	addColor(1000, ".hi", "red")
		.then(() => addColor(3000, ".text", "blue"))
		.then(() => addColor(2000, ".people", "green"))
		.catch((err) => console.log(err));
});

function addColor(time, selector, color) {
	const element = document.querySelector(selector);
	return new Promise((resolve, reject) => {
		if (element) {
			setTimeout(() => {
				element.style.color = color;
				resolve();
			}, time);
		} else {
			reject(`There is no suck elememy", ${selector}`);
		}
	});
}

let products = [
	{
		title: "Iphone 8",
		company: "apple",
	},
	{
		title: "Galaxy",
		company: "samsung",
	},
	{
		title: "Iphone 7",
		company: "apple",
	},
	{
		title: "HTC mobile",
		company: "htc",
	},
	{
		title: "Galaxy 10",
		company: "samsung",
	},
];

function getUnique(products) {
	return [...new Set(products.map((product) => product.company))];
}
console.log(getUnique(products));

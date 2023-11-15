const people = [
	{
		name: "bob",
		location: {
			street: "2952",
			timeZone: {
				offset: "+7",
			},
		},
	},
	{
		name: "peter",
		location: {
			street: "123",
		},
	},
	{
		name: "john",
		location: {
			street: "2952",
			timeZone: {
				offset: "+3",
			},
		},
	},
];

people.forEach((person) => {
	console.log(person.name);
	console.log(person.location.timeZone);
	console.log(person.location.timeZone.offset);
	// the above error can be dealt using && operator
	console.log(
		person.location &&
			person.location.timeZone &&
			person.location.timeZone.offset,
	);

	//  using optional chaining
	console.log(person?.location?.timeZone?.offset);

	// If there is any undefined value, we can set a default value using || operator

	console.log(person?.location?.timeZone?.offset || "hello");
});

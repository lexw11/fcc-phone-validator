function telephoneCheck(str) {
	// Regex reqs:
	// - Must have 2 sets of 3 digits each, followed by 1 set of 4 digits ==> \d{3}\d{3}\d{4}
	// - Can start with 1 ==> ^1?
	// - 1st set can be surrounded by parentheses, but must be a complete pair
	// - Sets can be separated by spaces, hyphens, or nothing
	// 		- But first sets can only be separated by hyphens if last two sets are?
	let regex = /\d{3}.*[ -]?\d{3}[ -]?\d{4}/;
	console.log(str.match(regex));
	return regex.test(str);
}

console.log(telephoneCheck("1-555-555 5555"));
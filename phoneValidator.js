function telephoneCheck(str) {
	// Start regex expression
	let regexStr =
		// String can start with 1 
		'^(1[ -]?)?'
		// First set of 3 digits, parentheses optional
		+ '(\\((?=\\d{3}\\)))?\\d{3}((?<=\\(\\d{3})\\))?'
		// Second and third sets of digits (lengths of 3 and 4), optionally separated by hyphens or spaces
		+ '[ -]?\\d{3}[ -]?\\d{4}$';
	let regex = new RegExp(regexStr);

	return regex.test(str);
}

let testArr = ['555-555-5555',
'1 555-555-5555',
'1 (555) 555-5555',
'5555555555',
'555-555-5555',
'(555)555-5555',
'1(555)555-5555',
'555-5555',
'5555555',
'1 555)555-5555',
'1 555 555 5555',
'1 456 789 4444',
'123**&!!asdf#']

testArr.forEach( function(el) {
	console.log(telephoneCheck(el));
});
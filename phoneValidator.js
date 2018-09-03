// Telephone Number Validator

// Takes in a string as an input and determines whether string
// is a valid phone number format.
// Valid examples:
// 		1 (555) 555-555
// 		555-555-5555
// 		555 555 5555

// =====================
// Query HTML objects
// =====================
var input = document.querySelector( 'input' ),
	button = document.querySelector( 'button' ),
	feedback = document.querySelector( '#feedback' );

// =====================
// Add event listeners
// =====================
button.addEventListener( 'click', function() {
	checkInput( input.value );
});

input.addEventListener( 'keypress', function(event) {
	if( event.key === 'Enter' ) {
		checkInput( this.value );
	}
});

// =====================
// Functions
// =====================
function checkInput( str ) {
	var check = telephoneCheck( str );
	if( check ) {
		feedback.textContent = "Yes, that's a valid phone number!"
	} else {
		feedback.textContent = "Not a valid phone number - check the format."
	}
}

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
function convert() {
	// Get the input values
	let km = parseFloat(document.getElementById('km-input').value);
	let mi = parseFloat(document.getElementById('mi-input').value);
	let c = parseFloat(document.getElementById('c-input').value);
	let f = parseFloat(document.getElementById('f-input').value);

	// Convert kilometers to miles
	if (!isNaN(km)) {
		let miResult = km * 0.621371;
		document.getElementById('mi-input').value = miResult.toFixed(2);
	}

	// Convert miles to kilometers
	if (!isNaN(mi)) {
		let kmResult = mi / 0.621371;
		document.getElementById('km-input').value = kmResult.toFixed(2);
	}

	// Convert Celsius to Fahrenheit
	if (!isNaN(c)) {
		let fResult = (c * 9/5) + 32;
		document.getElementById('f-input').value = fResult.toFixed(2);
	}

	// Convert Fahrenheit to Celsius
	if (!isNaN(f)) {
		let cResult = (f - 32) * 5/9;
		document.getElementById('c-input').value = cResult.toFixed(2);
	}
}

/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(params) {
	var primes, k, len, min, max;

	if ()

	function checkIfPrime (number) {
		var divider, i;
		if (number === 0) {
			return false;
		} if (number === 1 || number === 2 || number === 3) {
			return true;
		} else {
			divider = parseInt(number/2);

			for (i = divider; i > 1; i -= 1) {
				if (number % i === 0) {
					return false
				}
			}

			return true;

		}
	}

	for (k = 0, len = params.length; k < len; k += 1) {



	}

}

module.exports = findPrimes;

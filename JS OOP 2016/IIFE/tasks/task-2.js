/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(params) {
	var primes, k, len, min, max, number, array = [];

	if (params.length != 2) {
		throw 'params are not two numbers';
	}

	function returnMax (a,b) {
		if (a >= b) {
			return a;
		} else {
			return b;
		}
	}

	function returnMin (a,b) {
		if (a <= b) {
			return a;
		} else {
			return b;
		}
	}

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

	if (isNaN(parseInt(params[0])) || isNaN(parseInt(params[1]))) {
		throw 'one of the parameters is not convertible to number';
	} else {
		max = returnMax(parseInt(params[0]), parseInt(params[1]));
		min = returnMin(parseInt(params[0]), parseInt(params[1]));
	}

	number = max;

	while(number >= min) {
		if (checkIfPrime(number)) {
			array.push(number);
		}

		number -= 1;
	} 

	return array;

}

module.exports = findPrimes;

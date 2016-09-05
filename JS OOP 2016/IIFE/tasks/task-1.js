/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum() {
		var sum = 0,i, len;;
		if (params === undefined) {
			throw 'the parameter is undefined';
	    }else if (!params.constructor === Array) {
			throw "the parameter is not array";
		} else  if (params.length <= 0) {
			return null;
		} else {
			for (i = 0, len = params.length; i < len; i += 1) {
				if (isNaN(params[i])) {
					throw 'one of the parameters cannot be convirted to number';
				} else {
					sum += parseFloat(params[i]);
				}
			}

			return sum;
		}
	
}

module.exports = sum;
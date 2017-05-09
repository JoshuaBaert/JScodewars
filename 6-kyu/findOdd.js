/**
 * Created by Joshua Baert on 5/9/2017.
 */

function findOdd(arr) {
	arr.sort();
	var count = 1
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i+1]) {
			count++
		} else {
			if (count % 2 === 1) {
				return arr[i]
			}
			count = 1
		}
	}
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
/**
 * Created by Joshua Baert on 5/10/2017.
 */

// https://www.codewars.com/kata/directions-reduction


function dirReduc(arr){
	const cancel = {
		'NORTH': 'SOUTH',
		'SOUTH': 'NORTH',
		'EAST': 'WEST',
		'WEST': 'EAST',
	}
	for (var i = arr.length - 1; i >= 0; i--) {
		if(arr[i+1] && cancel[arr[i]] === arr[i+1]) {
			arr.splice(i,2)
		}
	}
	return arr
}

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST", "WEST"]));
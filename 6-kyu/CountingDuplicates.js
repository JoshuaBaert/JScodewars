/**
 * Created by Joshua Baert on 7/25/2017.
 */

// https://www.codewars.com/kata/counting-duplicates

function duplicateCount(text){
	let count = 0;
	let tested = [];
	text.trim().toLowerCase().split('').map((letter, i, array) => {
		if (countOf(letter, array) >= 2 && tested.indexOf(letter) < 0) {
			count++
			tested.push(letter)
		}
	});
	
	function countOf(test, array) {
		return array.map(item => item === test ? 1 : 0).reduce((a,b)=>a+b);
	}
	return count
}

console.log(duplicateCount('aabBcde'));
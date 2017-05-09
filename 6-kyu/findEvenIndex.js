/**
 * Created by Joshua Baert on 5/9/2017.
 */


// https://www.codewars.com/kata/equal-sides-of-an-array

function findEvenIndex(arr) {
	let ind = -1
	arr.map((e,i,a) => {
		try {
			let frontVal = a.slice(0,i).reduce((a,b)=>a+b)
			let backVal = a.slice(i+1,a.length).reduce((a,b)=>a+b)
			if (frontVal === backVal) ind = i;
		} catch(err) {}
	})
	return ind
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))
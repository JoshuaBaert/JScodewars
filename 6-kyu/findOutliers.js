/**
 * Created by Joshua Baert on 5/10/2017.
 */

// https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers){
	console.log(integers)
	var even = [], odd = []
	integers.map((n,i,ints)=>{
		if (Math.abs(n) % 2===1) odd.push(n)
		else even.push(n)
	})
	return odd.length < even.length ? odd[0] : even[0]
}

console.log(findOutlier([2,6,8,10,-3]))
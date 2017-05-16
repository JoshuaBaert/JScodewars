/**
 * Created by Joshua Baert on 5/16/2017.
 */

// https://www.codewars.com/kata/tribonacci-sequence

function tribonacci(sig,n){
	if (n < 4) {
		return sig.splice(0,n)
	} else {
		for (var i = 3; i < n; i++){
			sig.push(sig[i-1] + sig[i-2] + sig[i-3])
		}
		return sig
	}
}

console.log(tribonacci([1,1,1],10))
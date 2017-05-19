/**
 * Created by Joshua Baert on 5/18/2017.
 */

// https://www.codewars.com/kata/a-chain-adding-function

const add = (x) => {
	let rtn = (y) => add(x+y);
	rtn.valueOf = () => x;
	return rtn
}

console.log(add(1)(2)(3));
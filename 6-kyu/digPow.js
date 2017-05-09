/**
 * Created by Joshua Baert on 5/9/2017.
 * https://www.codewars.com/kata/playing-with-digits/javascript
 */

function digPow(n, p){
	let workedN = n
		.toString()
		.split('')
		.map((num,i) => Math.pow(num,i+p))
		.reduce((a,b)=> a+b);
	return workedN % n === 0 ? workedN/n : -1
}



console.log(digPow(46288, 3))
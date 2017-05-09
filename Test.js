/**
 * Created by Joshua Baert on 5/5/2017.
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
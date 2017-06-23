/**
 * Created by Joshua Baert on 6/20/2017.
 */

// https://www.codewars.com/kata/moves-in-squared-strings-i

function vertMirror(s) {
	return s.split('\n').map(e => e.split('').reverse().join('')).join('\n')
}
function horMirror(s) {
	return s.split('\n').reverse().join('\n')
}
function oper(fct, s) {
	return fct(s)
}


console.log(oper(vertMirror, 'dcba\nhgfe\nlkji\nponm'))
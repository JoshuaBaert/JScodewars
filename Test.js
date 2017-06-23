/**
 * Created by Joshua Baert on 5/5/2017.
 */

function rot(s) {
	return s.split('\n').reverse().map(e => e.split('').reverse().join('')).join('\n')
}
function selfieAndRot(s) {
	// your code
}
function oper(fct, s) {
	return fct(s);
}

console.log(oper(rot,'fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL'))
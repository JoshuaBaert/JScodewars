/**
 * Created by Joshua Baert on 5/5/2017.
 */

function rot(s) {
	return s.split('\n').reverse().map(e => e.split('').reverse().join('')).join('\n')
}
function selfieAndRot(s) {
	return s.split('\n').map(e=>e+='....')
		.concat(rot(s).split('\n').map(e=>'....'+e)).join('\n')
}
function oper(fct, s) {
	return fct(s);
}

console.log(oper(selfieAndRot,'xZBV\njsbS\nJcpN\nfVnP'));
console.log('Should Be')
console.log('xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx')
/**
 * Created by Joshua Baert on 6/22/2017.
 */

function rot(s) {
	return s.split('\n').reverse().map(e => e.split('').reverse().join('')).join('\n')
}
function selfieAndRot(s) {
	let dots = ''
	s.split('\n')[0].split('').map(e=> dots += '.')
	return s.split('\n').map(e=>e+=dots)
		.concat(rot(s).split('\n').map(e=>dots+e)).join('\n')
}
function oper(fct, s) {
	return fct(s);
}

console.log(oper(selfieAndRot,'xZBV\njsbS\nJcpN\nfVnP'));
console.log('Should Be')
console.log('xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx')
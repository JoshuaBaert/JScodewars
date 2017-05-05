/**
 * Created by Joshua Baert on 5/5/2017.
 */


function getQuotes(string) {
	let reg = /\"[^\"]*\"/g
	return string.match(reg);
}

console.log(getQuotes('"example quote #1" some text "example quote #2"'))
/**
 * Created by Joshua Baert on 6/8/2017.
 */

// https://www.codewars.com/kata/582e0e592029ea10530009ce

let a = {name:'a'}
let b = {name:'b'}
let c = {name:'c'}
let d = {name:'d'}

function duckDuckGoose(players, goose) {
	while (goose > players.length ) goose -= players.length
	return players[goose-1].name
}

console.log(duckDuckGoose([a, b, c, d],2));
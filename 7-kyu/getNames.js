/**
 * Created by Joshua Baert on 6/1/2017.
 */

// https://www.codewars.com/kata/getnames

var data = [
	{name: 'Joe', age: 20},
	{name: 'Bill', age: 30},
	{name: 'Kate', age: 23}
]

function getNames(data){
	return data.map(pers => pers.name);
}

console.log(getNames(data));
/**
 * Created by Joshua Baert on 5/9/2017.
 * https://www.codewars.com/kata/persistent-bugger/javascript
 */

function persistence(num) {
	const rePersis = (n) => {
		if (n.length === 1) return
		else {
			count++
			rePersis(n.split('').reduce((a,b)=>a*b).toString())
		}
	}
	var count = 0
	repersis(num.toString())
	return count
}

console.log(persistence(39));
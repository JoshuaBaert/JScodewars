/**
 * Created by Joshua Baert on 5/5/2017.
 */
function trickyDoubles(n){
	let nString = n.toString(),
		nBack = nString.slice(nString.length/2)
	
	return nBack + nBack == nString ? n : n*2
}

console.log(trickyDoubles(100))
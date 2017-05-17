/**
 * Created by Joshua Baert on 5/17/2017.
 */

// https://www.codewars.com/kata/calculating-with-functions

function zero(oper) {return !oper ? 0 : oper(0)}
function one(oper) {return !oper ? 1 : oper(1)}
function two(oper) {return !oper ? 2 : oper(2)}
function three(oper) {return !oper ? 3 : oper(3)}
function four(oper) {return !oper ? 4 : oper(4)}
function five(oper) {return !oper ? 5 : oper(5)}
function six(oper) {return !oper ? 6 : oper(6)}
function seven(oper) {return !oper ? 7 : oper(7)}
function eight(oper) {return !oper ? 8 : oper(8)}
function nine(oper) {return !oper ? 9 : oper(9)}

function plus(d2) {return (d1) => d1+d2}
function minus(d2) {return (d1) => d1-d2}
function times(d2) {return (d1) => d1*d2}
function dividedBy(d2) {return (d1) => d1/d2}

console.log(seven(times(seven())));
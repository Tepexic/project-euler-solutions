/*
The sum of the squares of the first ten natural numbers is,
    1^2+2^2+...+10^2=385

The square of the sum of the first ten natural numbers is,
    (1+2+...+10)^2=552=3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

// create array of natural numbers
function createN( n ){
    let N = [];
    for(let k=1; k<=n; k++){
        N.push(k);
    }
    return N
}

// Get sum of squares
const N = createN( 100 );
const ss = ( accum, currentValue )=>{ return accum + Math.pow(currentValue,2) };
const s = ( accum, currentValue )=>{ return accum + currentValue };

console.log( Math.pow( N.reduce(s,0),2 ) - N.reduce(ss,0) );
/*
Problem 7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

// Function to get next prime number
function getNextPrime( n ){
    do{
        n++
    } while( !isPrime(n) )
    return n
}

// Determine if it's prime
function isPrime(n){
    for(let k=2; k<n; k++){
        if( n%k === 0){
            return false
        }
    }
    return true
}

// Get all primes
let p = [2];
let k = 2;
while( p.length <= 10000 ){
    k = getNextPrime( k );
    p.push( k );
}

// Display results
console.log( p )
console.log( p.length )
console.log( p.pop() )
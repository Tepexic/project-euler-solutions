/* 
Problem 10

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

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
let sum = 2;
let k = 2;
let target =2000000;
while( k < target ){
    k = getNextPrime( k );
    // I hate this
    if( k<target ){ sum = sum + k;}
}

// Display results
console.log( sum )
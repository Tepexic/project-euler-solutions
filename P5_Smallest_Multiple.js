/*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

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

// function to get prime factors
function getPrimeFactors( target ){
    // Set first prime
    let n=2
    // Array to save them
    primeFactors = [];
    // Do while target is > 1
    while( target>1 ){
        //console.log( 'processing '+ target +' with '+ n)
        if( target%n === 0 ){
            // Update target
            target /= n
            primeFactors.push( n );
        } else {
            // Get new prime number, update n
            n = getNextPrime(n)
        }
    }
    return primeFactors
}
// Get number of times a value is in an array
function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}


let target = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


// Get all prime factors
allFactors = [];
target.map( e => { allFactors.push(getPrimeFactors(e)) }  )

// Get primes in range
primes = [];
target.map( e => {
    if( isPrime(e) ){
        primes.push( e )
    }
})

// Get max power of each prime
mcm = 1;
primes.map( p=>{
    let a = 0;
    allFactors.forEach( f=>{
        let b=getOccurrence( f, p );
        if( a<b ){
            a=b;
        }
    })
    mcm = mcm * Math.pow(p,a) ;
})

console.log( mcm )
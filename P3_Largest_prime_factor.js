/*
Largest prime factor
   
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/


/*
// THIS KILLS THE STACK
target = 600851475143
// First, get list of prime numbers form 2 to target number: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// The sieve will seed from a list of natural numbers up to target-1
list2sieve = [2]
for(k=3; k<target/2; k++){
    list2sieve.push( k )
}
// Get prime numbers
primes = []
currentPrime =  list2sieve[0]
while( Math.pow(currentPrime,2)<=list2sieve[list2sieve.length-1] ){
    // Filter multiples
    list2sieve = list2sieve.filter( filterElements(currentPrime)  )
    // Add current prime to list
    primes.push(currentPrime)
    // Update prime
    currentPrime = list2sieve[0]
}
// Filtering function
function filterElements( value2compare ){
    return function(item){
        return item%value2compare !== 0
    }
}
// Append what's left
primes =  primes.concat( list2sieve )
console.log(primes)
/*
// Let's save pur prime factors
primeFactors = []
// Now, time for prime factorization
while( target>1 ){
    [target, primeFactor]  = isPrimeFactor()
    console.log(target)
    primeFactors.push(primeFactor)
}
// Function to find prime factors
function isPrimeFactor(){
    for(let k=0; k<primes.length; k++){
        if(target%primes[k] === 0){
            target = target/primes[k]
            return [target, primes[k]]
        }
    }
}
console.log('Max prime factor is '+ Math.max(...primeFactors))
// THIS KILLS THE STACK
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
// function to get next prime factor
function getMaxPrimeFactor( target ){
    // Set first prime
    let n=2
    // Do while target is > 1
    while( target>1 ){
        console.log( 'processing '+ target +' with '+ n)
        if( target%n === 0 ){
            // Update target
            target /= n
        } else {
            // Get new prime number, update n
            n = getNextPrime(n)
        }
    }
    return n
}

target = 600851475143
console.log('Max prime factor is '+ getMaxPrimeFactor( target ) )
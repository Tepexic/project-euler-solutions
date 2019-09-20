/*
Largest palindrome product
   
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
// Initialize variables for product and an array to store palindromes
let currentProduct = 0
let palindromes = []

// Loop to multiply 3 digit numbers
for(let k=999; k>99; k--){
    for(let j=999; j>99; j--){
        currentProduct = k*j
        // Convert to string
        let normal = currentProduct.toString()
        // Reverse string
        reversed = normal.split("").reverse().join("")
        // If it's a palindrome, save it
        if( normal === reversed ){
            palindromes.push( currentProduct )
        }
    }
}
// Print largest palindrome
console.log( 'The largest palindrome made from the product of two 3-digit numbers is ' + Math.max( ...palindromes ) )
/*
Problem 9

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

// create array of natural numbers
function createN( n ){
    let N = [];
    for(let k=1; k<=n; k++){
        N.push(k);
    }
    return N
}

// try all different combunations of numbers that satisfy a<b<c and test if they're a Pythagorean triplet, and then verify a+b+c=1000
const nums = createN(500); // more than enough numbers

let indxb = 1;
let indxc = 2;

nums.map( e=>{
    let a = e;
    let b = nums.slice(indxb);
    indxc = indxb + 1; 
    b.map( bb=>{
        let c = nums.slice(indxc);
        c.map( cc=>{
            if( Math.pow(a,2) + Math.pow(bb,2) == Math.pow(cc,2) ){
                if( a+bb+cc==1000 ){
                    console.log('Pythagorean triplet: ', [a,bb,cc]);
                    console.log( 'Pythagorean triplet for which a + b + c = 1000: ', [a,bb,cc] );
                    console.log( 'abc = : ', a*bb*cc );
                }
            }
        })
        indxc++;
    })
    indxb++;
})
let a = 1;
let b = 2;
let c = 3;

let range = [a, b, c] ;

console.log(range);
console.log(typeof(range));

function sum (x) {
    let total = 0;
    for (count = 0; count < x.length; count ++) {
        total += x[count];
    }
    console.log(total);

} 
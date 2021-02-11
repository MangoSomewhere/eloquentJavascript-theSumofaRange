let a = 1;
let b = 2;
let c = 3;

let range = [a, b, c] ;

console.log(range);
console.log(typeof(range));

function sum (range) {
    let total = 0;
    for (count = 0; count < range.length; count ++) {
        total += range[count];
    }
    console.log(total);

} 
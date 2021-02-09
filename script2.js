// 'sum' function, that takes array of numbers and returns the sum of these numbers 

let a = 4;
let b = 10;

array = [5, 4, 3];
console.log(typeof(array));

function sum (array) {
    total = 0;
    for (count = 0; count < array.length; count ++) {
        total += array[count];
    }
    console.log(total);

}

sum(array);
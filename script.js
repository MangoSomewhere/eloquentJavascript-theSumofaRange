// 'range 'function, takes two arguments, start & end, returns array containing all numbers from start to end.

// Bonus: modiy range function to take an optional 3rd argument that indicates specfic increments

// array
// add elements at the end of the array, object.push(elementPushed);
// add elements to the start of the array, object.shift(elementShifted);

// Range Function 
let a = 4;
let b = 19;
let c = 2;
function range (a,b,c) {
    let result = [];
    while (a<b) {
        result.push(a);
        a += c;
    }
    console.log(result);
}

range (a,b,c);

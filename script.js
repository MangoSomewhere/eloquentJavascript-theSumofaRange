// 'range 'function, takes two arguments, start & end, returns array containing all numbers from start to end.

// Bonus: modiy range function to take an optional 3rd argument that indicates specfic increments

// array
// add elements at the end of the array, object.push(elementPushed);
// add elements to the start of the array, object.shift(elementShifted);

// Range Function 
let a = 5;
let b = 2;
let c = -1;

function range (a,b,c) {
    let result = [];
    if (c<0) {
        while (a>b) {
            result.push(a);
            a+= c ;
        }
        console.log(result);
    }
    else {
        while (a<b) {
            result.push(a);
            a += c;
        }
        console.log(result);
        

    }
}        
console.log(typeof(result));
range (a,b,c);






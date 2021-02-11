
// 'range 'function, takes two arguments, start & end, returns array containing all numbers from start to end.


function range (a,b,c =1) {
    let result = [];
    result = new Array;
    if (c<0) {
        while (a>=b) {
            result.push(a);
            a+= c ;
        }
        
    }
    else {
        while (a<=b) {
            result.push(a);
            a += c;
        }
    }
    console.log(typeof(result));
    console.log(result.length);
    
}        

// 'sum' function, that takes array of numbers and returns the sum of these numbers 

function sum (result) {
    let total = 0;
    for (count = 0; count < result.length; count ++) {
        total += result[count];
    }
    console.log(total);

} 

range(1,10);

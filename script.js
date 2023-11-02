/* function range(start, end) {
    let arrayRange = [];
    for (let i = start; i <= end; i++) {
        arrayRange.push[i];
    }
    console.log(arrayRange);
}
range(3,9); */

/* function range(start, end) {
    let arrayRange = [start, end];
    for (let i = start; i <= end; i++) {
        arrayRange.push[i];
    }
    console.log(arrayRange);
}
range(3,9); */

// Breaking it down... first make an empty array
/* function range(start, end) {
    let arrayRange = [];
    console.log(arrayRange);
    }
range(3,9); */

//Next add start and end to the array
/* function range(start, end) {
    let arrayRange = [];
    arrayRange.push(start);
    arrayRange.push(end);
    console.log(arrayRange);
    }
range(3,9) */

//Then iterate over the array - this doesn't work

/* function range(start, end) {
    let arrayRange = [start, end];
    for (let number of arrayRange) {
        arrayRange.push(number += 1); 
    }
    console.log(arrayRange);
    }
range(3,9) */

//back to the first step;
// this kind of works but it puts start and end at the beginning and creates a new array for each iteration instead of just adding the nubmers to the array.
/* function range(start, end) {
    let arrayRange = [start, end];
    for (let i = start; i <= end; i++) {
        arrayRange.push(i);
        console.log(arrayRange);
    }
}
range(3,9); */

//moving console.log out of the for loop only prints one array, but the numbers don't get added in order
/* function range(start, end) {
    let arrayRange = [start, end];
    for (let i = start; i <= end; i++) {
        arrayRange.push(i);
    }
    console.log(arrayRange);
}
range(3,9); */

// this does what I want except it repeats the first number
/* function range(start, end) {
    let arrayRange = [start];
    for (let i = start; i <= end; i++) {
        arrayRange.push(i);
    }
    console.log(arrayRange);
}
range(3,9); */

//This one works :)
function range(start, end) {
    let arrayRange = [];
    for (let i = start; i <= end; i++) {
        arrayRange.push(i);
    }
    console.log(arrayRange);
}
range(3,9);
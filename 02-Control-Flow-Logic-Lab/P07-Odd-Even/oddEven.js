function oddEven(number) {
    if (number.toString().indexOf('.') > -1) {
        console.log("invalid");
    } else if (number % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

// oddEven(4.4);
// oddEven(3);
// oddEven(4);
function biggestNumber(args) {
    let num1 = args[0];
    let num2 = args[1];
    let num3 = args[2];

    let biggest = Math.max(num1, num2, num3);

    console.log(biggest);
}

// biggestNumber([5, -2, 7]);
// biggestNumber([43, 43.2, 43.1]);
// biggestNumber([-10, -20, -30]);
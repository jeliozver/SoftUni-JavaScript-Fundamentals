function processOddNumbers(args) {
    return args
        .filter((n, i) => i % 2 !== 0)
        .map(n => n * 2)
        .reverse()
        .join(' ');
}

// console.log(processOddNumbers([10, 15, 20, 25]));
// console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));
function processNumbers(args) {
    let result = [];

    for (let num of args) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    return result;
}

// console.log(processNumbers([7, -2, 8, 9]));
// console.log(processNumbers([3, -2, 0, -1]));
function findBiggestElement(matrix) {
    let biggest = Number.NEGATIVE_INFINITY;

    matrix.forEach(row => row.forEach(e => {
        if (e > biggest) {
            biggest = e;
        }
    }));

    return biggest;
}

// console.log(findBiggestElement([
//     [20, 50, 10],
//     [8, 33, 145],
// ]));

// console.log(findBiggestElement([
//     [3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4],
// ]));
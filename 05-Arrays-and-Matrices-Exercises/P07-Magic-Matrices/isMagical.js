function isMagical(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumROne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);

        if (sumROne !== sumRTwo) {
            return false;
        }

        let sumCOne = 0;
        let sumCTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[j][i];
            sumCTwo += matrix[j][i + 1];
        }

        if (sumCOne !== sumCTwo
            || sumROne !== sumCOne
            || sumRTwo !== sumCTwo) {
            return false;
        }
    }

    return true;
}

// console.log(isMagical([
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5],
// ]));

// console.log(isMagical([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1],
// ]));

// console.log(isMagical([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0],
// ]));
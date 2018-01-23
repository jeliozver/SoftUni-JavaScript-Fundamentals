function sumDiagonals(matrix) {
    let mainSum = 0;
    let secSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
        secSum += matrix[i][matrix.length - i - 1];
    }

    console.log(mainSum + ' ' + secSum);
}

// sumDiagonals([
//     [20, 40],
//     [10, 60],
// ]);

// sumDiagonals([
//     [3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89],
// ]);
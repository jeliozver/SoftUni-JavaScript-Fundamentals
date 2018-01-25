function diagonalAttack(arr) {
    let matrix = [];
    let boolMatrix = [];

    for (let i = 0; i < arr.length; i++) {
        let currentRow = arr[i]
            .split(' ')
            .map(Number);

        matrix.push(currentRow);
        boolMatrix.push(
            new Array(currentRow.length).fill(false)
        );
    }

    let mainSum = 0;
    let secSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
        secSum += matrix[i][matrix.length - i - 1];
        boolMatrix[i][i] = true;
        boolMatrix[i][matrix.length - i - 1] = true;
    }

    if (mainSum === secSum) {
        matrix = changeNonDiagonal(matrix, boolMatrix, mainSum);
        console.log(matrix
            .map(row => row
                .join(' ')).join('\n'));
    } else {
        console.log(matrix
            .map(row => row
                .join(' ')).join('\n'));
    }

    function changeNonDiagonal(matrix, boolMatrix, sum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (boolMatrix[i][j] !== true) {
                    matrix[i][j] = sum;
                }
            }
        }

        return matrix;
    }
}

// diagonalAttack([
//     '5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1'
// ]);

// diagonalAttack([
//     '1 1 1',
//     '1 1 1',
//     '1 1 0',
// ]);
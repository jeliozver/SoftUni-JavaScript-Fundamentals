function buildOrbits(args) {
    let [rows, cols, x, y] = args;
    let matrix = createMatrix(rows, cols, 0);

    let num = 2;
    matrix[x][y] = 1;
    let counter = 1;
    let currentRow = x;
    let currentCol = y;

    while (true) {
        let startRow = Math.max(0, currentRow - counter);
        let endRow = Math.min(cols - 1, currentRow + counter);
        let startCol = Math.max(0, currentCol - counter);
        let endCol = Math.min(rows - 1, currentCol + counter);
        let isFilled = false;

        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
                if (i >= rows) {
                    break;
                }
                if (matrix[i][j] === 0) {
                    matrix[i][j] = num;
                    isFilled = true;
                }
            }
        }

        if (!isFilled) {
            break;
        }

        num++;
        counter++;
    }

    if (rows - cols > 0) {
        let diff = rows - cols;
        fillRestRows(matrix, diff, num);
    } else if (rows - cols < 0) {
        let diff = cols - rows;
        fillRestCols(matrix, diff, num);
    }

    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(' '));
    }

    function createMatrix(rows, cols, initial) {
        let arr = [];
        for (let i = 0; i < rows; ++i) {
            let columns = [];
            for (let j = 0; j < cols; ++j) {
                columns[j] = initial;
            }

            arr[i] = columns;
        }

        return arr;
    }

    function fillRestRows(matrix, diff, num) {
        for (let i = rows - diff; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = num;
            }

            num++;
        }

        return matrix;
    }
    
    function fillRestCols(matrix, diff, num) {
        while (diff !== 0) {
            for (let i = 0; i < rows; i++) {
                matrix[i][cols - diff] = num;
            }

            num++;
            diff--;
        }

        return matrix;
    }
}

// buildOrbits([8, 8, 2, 2]);
// buildOrbits([7, 5, 2, 2]);
// buildOrbits([5, 6, 2, 2]);
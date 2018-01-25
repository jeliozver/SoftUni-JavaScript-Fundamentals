function generateSpiralMatrix(rows, cols) {
    let matrix = createMatrix(rows, cols, 0);
    matrix = fillSpirally(matrix, 0, 0, 1);

    console.log(matrix
        .map(row => row
            .join(' ')).join('\r\n'));

    function fillSpirally(matrix, startRow, startCol, value) {
        if (matrix[startRow][startCol] !== 0) {
            return matrix;
        }

        // Fill Row Left to Right
        for (let i = startRow; i < cols; i++) {
            if (matrix[startRow][i] === 0) {
                matrix[startRow][i] = value;
                value++;
            } else {
                break;
            }
        }

        // Fill Col Up to Down
        for (let i = startRow + 1; i < rows; i++) {
            if (matrix[i][cols - 1 - startCol] === 0) {
                matrix[i][cols - 1 - startCol] = value;
                value++;
            } else {
                break;
            }
        }
        
        // Fill Row Right to Left
        for (let i = cols - 2; i > 0; i--) {
            if (matrix[rows - 1 - startRow][i] === 0) {
                matrix[rows - 1 - startRow][i] = value;
                value++
            }
        }
        
        // Fill Col Down to Up
        for (let i = rows - 1; i > 0; i--) {
            if (matrix[i][startCol] === 0) {
                matrix[i][startCol] = value;
                value++;
            }
        }

        startRow++;
        startCol++;
        return fillSpirally(matrix, startRow, startCol, value);
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
}

// generateSpiralMatrix(5, 5);
// generateSpiralMatrix(5, 4);
// generateSpiralMatrix(4, 5);
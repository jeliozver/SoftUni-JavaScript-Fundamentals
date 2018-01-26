function buildOrbits(args) {
    let [rows, cols, x, y] = args;
    let matrix = createMatrix(rows, cols, 0);

    let num = 2;
    matrix[x][y] = 1;

    let rowStart = x;
    let rowEnd = x;
    let colStart = y;
    let colEnd = y;

    let counterRowStart = rowEnd;
    let counterRowEnd = rowEnd;
    let counterColStart = colEnd;
    let counterColEnd = colEnd;

    while(true)
    {
        counterRowEnd++;
        counterColEnd++;
        counterRowStart--;
        counterColStart--;

        if (counterRowEnd > rows - 1
            && counterColEnd > cols - 1
            && counterRowStart < 0
            && counterColStart < 0) {
            break;
        }

        if(rowEnd >= rows - 1) {
            rowEnd = rows - 1;
        } else {
            rowEnd++;
        }

        if (colEnd >= cols - 1)  {
            colEnd = cols - 1;
        } else {
            colEnd++;
        }

        if (rowStart === 0) {
            rowStart = 0;
        } else {
            rowStart--;
        }

        if (colStart === 0)  {
            colStart = 0;
        } else {
            colStart--;
        }

        for (let i = rowStart; i <= rowEnd; i++) {
            for (let j = colStart; j <= colEnd; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][j] = num;
                }
            }
        }

        num++;
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
}

// buildOrbits([9, 10, 8, 9]);
// buildOrbits([10, 9, 4, 5]);

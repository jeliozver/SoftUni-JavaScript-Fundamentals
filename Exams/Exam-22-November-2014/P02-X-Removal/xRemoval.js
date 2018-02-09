function xRemoval(input) {
    let remaining = createMatrix(input, true);

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (row + 2 < input.length &&
                col + 2 < input[row].length &&
                col + 1 < input[row + 1].length &&
                col + 2 < input[row + 2].length &&
                isValid(input, row, col)) {

                remaining[row][col] = false;
                remaining[row][col + 2] = false;
                remaining[row + 1][col + 1] = false;
                remaining[row + 2][col] = false;
                remaining[row + 2][col + 2] = false;
            }
        }
    }

    let result = '';

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (remaining[row][col] === true) {
               result += input[row][col];
            }
        }
        result += '\r\n';
    }

    console.log(result);

    function createMatrix(input, initial) {
        let arr = [];
        for (let i = 0; i < input.length; ++i) {
            let columns = [];
            for (let j = 0; j < input[i].length; ++j) {
                columns[j] = initial;
            }

            arr[i] = columns;
        }

        return arr;
    }

    function isValid(input, row, col) {
        let char = input[row][col].toLowerCase();

        return input[row][col + 2].toLowerCase() === char &&
            input[row + 1][col + 1].toLowerCase() === char &&
            input[row + 2][col].toLowerCase() === char &&
            input[row + 2][col + 2].toLowerCase() === char;
    }
}
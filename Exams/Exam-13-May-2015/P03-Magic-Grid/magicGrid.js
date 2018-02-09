function magicGrid(input) {
    let encrypted = input.shift();
    let magicNum = Number(input.shift());
    let matrix = [];
    for (let line of input) {
        let row = line.split(' ').map(Number);
        matrix.push(row);
    }

    let currentRow = 0;
    let currentCol = 0;
    let key = 0;

    while (true) {
        let current = matrix[currentRow][currentCol];
        let test = currentRow + ',' + currentRow;
        let isFound = false;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                let check = i + ',' + j;
                if (test !== check) {
                    if (current + matrix[i][j] === magicNum) {
                        key = currentRow + currentCol + i + j;
                        isFound = true;
                        break;
                    }
                }
            }
        }

        if (isFound) {
            break;
        }

        currentCol++;
        if (currentCol > matrix.length - 1) {
            currentCol = 0;
            currentRow++;
        }
    }

    let decrypted = '';
    for (let i = 0; i < encrypted.length; i++) {
        let code = encrypted.charCodeAt(i);
        if (i % 2 === 0) {
            code += key;
        } else {
            code -= key;
        }

        decrypted += String.fromCharCode(code);
    }

    console.log(decrypted);
}

// magicGrid([
//     'QqdvSpg',
//     '400',
//     '100 200 120',
//     '120 300 310',
//     '150 290 370',
// ]);
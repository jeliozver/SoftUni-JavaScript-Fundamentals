function bunnyKill(input) {
    input.pop(); // Comment if testing JS Fundamentals - Sample Exam #1 (Sept 2016)
    let bombBunnies = input.pop().split(' ');
    let matrix = [];
    for (let line of input) {
        let row = line.split(' ').map(Number);
        matrix.push(row);
    }

    let matrixStartLen = matrix.length;
    matrix[-1] = 0;
    matrix.push([]);

    let snowballDamage = 0;
    let snowballKills = 0;
    while (bombBunnies.length > 0) {
        let currentBomb = bombBunnies.shift().split(',');
        let row = Number(currentBomb[0]);
        let col = Number(currentBomb[1]);

        let bombDamage = matrix[row][col];

        if (bombDamage > 0) {
            snowballDamage += bombDamage;
            snowballKills++;
            matrix = explode(matrix, row, col, bombDamage);
        }
    }

    for (let i = 0; i < matrixStartLen; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) {
                snowballDamage += matrix[i][j];
                snowballKills++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(snowballKills);

    function explode(matrix, row, col, bombDamage) {
        matrix[row - 1][col] -= bombDamage; // Up
        matrix[row - 1][col - 1] -= bombDamage; // Up-Left
        matrix[row - 1][col + 1] -= bombDamage; // Up-Right

        matrix[row][col - 1] -= bombDamage; // Left
        matrix[row][col + 1] -= bombDamage; // Right

        matrix[row + 1][col] -= bombDamage; // Down
        matrix[row + 1][col - 1] -= bombDamage; // Down-Left
        matrix[row + 1][col + 1] -= bombDamage; // Down-Right

        matrix[row][col] = 0;

        return matrix;
    }
}

// bunnyKill([
//     '5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1',
//     '',
// ]);

// bunnyKill([
//     '10 10 10',
//     '10 10 10',
//     '10 10 10',
//     '0,0',
//     '',
// ]);
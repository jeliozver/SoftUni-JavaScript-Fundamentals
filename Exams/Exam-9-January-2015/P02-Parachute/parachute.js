function parachute(input) {
    let matrix = [];
    for (let line of input) {
        let row = line.split('');
        matrix.push(row);
    }

    let startRow = 0;
    let startCol = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'o') {
                startRow = i;
                startCol = j;
                break;
            }
        }
    }

    let nextRow;
    let nextCol;

    while (true) {
        nextRow = startRow + 1;
        let nextRowLayout = input[nextRow];
        nextCol = startCol;
        for (let char of nextRowLayout) {
            if (char === '>') {
                nextCol += 1;
            } else if (char === '<') {
                nextCol -= 1;
            }
        }

        startRow = nextRow;
        startCol = nextCol;

        if (matrix[startRow][startCol] === '_') {
            console.log('Landed on the ground like a boss!');
            console.log(`${startRow} ${startCol}`);
            break;
        } else if (matrix[startRow][startCol] === '~') {
            console.log('Drowned in the water like a cat!');
            console.log(`${startRow} ${startCol}`);
            break;
        } else if (matrix[startRow][startCol] === '/' ||
            matrix[startRow][startCol] === '\\' ||
            matrix[startRow][startCol] === '|') {
            console.log('Got smacked on the rock like a dog!');
            console.log(`${startRow} ${startCol}`);
            break;
        }
    }
}

// parachute([
//     '--o----------------------',
//     '>------------------------',
//     '>------------------------',
//     '>-----------------/\\-----',
//     '-----------------/--\\----',
//     '>---------/\\----/----\\---',
//     '---------/--\\--/------\\--',
//     '<-------/----\\/--------\\-',
//     '\\------/----------------\\',
//     '-\\____/------------------',
// ]);

// parachute([
//     '-------------o-<<--------',
//     '-------->>>>>------------',
//     '---------------->-<---<--',
//     '------<<<<<-------/\\--<--',
//     '--------------<--/-<\\----',
//     '>>--------/\\----/<-<-\\---',
//     '---------/<-\\--/------\\--',
//     '<-------/----\\/--------\\-',
//     '\\------/--------------<-\\',
//     '-\\___~/------<-----------',
// ]);
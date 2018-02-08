function expedition(primary, secondary, targets, startingPoint) {
    for (let target of targets) {
        let startRow = target[0];
        let startCol = target[1];
        decodePrimary(primary, startRow, startCol, secondary);
    }

    let startRow = startingPoint[0];
    let startCol = startingPoint[1];
    let steps = 1;
    primary[-1] = -1;
    primary.push([-1]);

    while (true) {
        primary[startRow][startCol] = 1;
        if (primary[startRow - 1][startCol] === 0) {
            primary[startRow - 1][startCol] = 1;
            steps++;
            startRow--;
        } else if (primary[startRow + 1][startCol] === 0) {
            primary[startRow + 1][startCol] = 1;
            steps++;
            startRow++;
        } else if (primary[startRow][startCol - 1] === 0) {
            primary[startRow][startCol - 1] = 1;
            steps++;
            startCol--;
        } else if (primary[startRow][startCol + 1] === 0) {
            primary[startRow][startCol + 1] = 1;
            steps++;
            startCol++;
        } else {
            break;
        }
    }

    primary.pop();
    console.log(steps);
    findPosition(startRow, startCol);

    function decodePrimary(primary, startRow, startCol, secondary) {
        let endRow = startRow + secondary.length - 1;
        if (endRow > primary.length - 1) endRow = primary.length - 1;
        let endCol = startCol + secondary[0].length - 1;
        if (endCol > primary[0].length - 1) endCol = primary[0].length - 1;
        let secondaryRow = 0;
        let secondaryCol = 0;

        for (let i = startRow; i <= endRow; i++) {
            secondaryCol = 0;
            for (let j = startCol; j <= endCol; j++) {
                if (secondary[secondaryRow][secondaryCol] === 1) {
                    if (primary[i][j] === 1) {
                        primary[i][j] = 0;
                    } else {
                        primary[i][j] = 1;
                    }
                }
                secondaryCol++;
            }
            secondaryRow++
        }
    }

    function findPosition(startRow, startCol) {
        if (startRow === 0) {
            console.log('Top');
            return;
        }
        if (startRow === primary.length - 1) {
            console.log('Bottom');
            return;
        }
        if (startCol === 0) {
            console.log('Left');
            return;
        }
        if (startCol === primary[0].length - 1) {
            console.log('Right');
            return;
        }
        if (startRow < primary.length / 2 && startCol >= primary[0].length / 2) {
            console.log('Dead end 1');
            return;
        }
        if (startRow < primary.length / 2 && startCol < primary[0].length / 2) {
            console.log('Dead end 2');
            return;
        }
        if (startRow >= primary.length / 2 && startCol < primary[0].length / 2) {
            console.log('Dead end 3');
            return;
        }
        if (startRow >= primary.length / 2 && startCol >= primary[0].length / 2) {
            console.log('Dead end 4');
        }
    }
}
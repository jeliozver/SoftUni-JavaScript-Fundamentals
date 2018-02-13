function airPollution(map, forces) {
    let matrix = [];
    for (let line of map) {
        let row = line.split(' ').map(Number);
        matrix.push(row);
    }

    for (let line of forces) {
        let args = line.split(' ');
        let action = args[0];
        let value = Number(args[1]);

        if (action === 'breeze') {
            for (let i = 0; i <= 4; i++) {
                matrix[value][i] -= 15;
                if (matrix[value][i] < 0) {
                    matrix[value][i] = 0;
                }
            }
        } else if (action === 'gale') {
            for (let i = 0; i <= 4; i++) {
                matrix[i][value] -= 20;
                if (matrix[i][value] < 0) {
                    matrix[i][value] = 0;
                }
            }
        } else if (action === 'smog') {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    matrix[i][j] += value;
                }
            }
        }
    }

    let pollutedAreas = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50) {
                let str = `[${i}-${j}]`;
                pollutedAreas.push(str);
            }
        }
    }

    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`)
    } else {
        console.log('No polluted areas');
    }
}
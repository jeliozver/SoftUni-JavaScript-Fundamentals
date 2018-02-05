function filterMatrix(input) {
    let targetLength = Number(input.pop());
    let rowsStartLengths = [];
    let elements = [];

    for (let line of input) {
        let row = line
            .split(' ');
        rowsStartLengths.push(row.length);
        for (let element of row) {
            elements.push(element);
        }
    }

    let currentLength = 1;
    let start = 0;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i] === elements[i + 1]) {
            currentLength++;
            if (currentLength === targetLength) {
                for (let j = 0; j < targetLength; j++) {
                    elements[start] = 'filtered';
                    start++;
                }
            }
        } else {
            currentLength = 1;
            start = i + 1;
        }
    }

    start = 0;
    let end = 0;

    while (rowsStartLengths.length > 0) {
        end = rowsStartLengths.shift();
        let currentRow = [];
        for (let i = 0; i < end; i++) {
            if (elements[start] !== 'filtered') {
                currentRow.push(elements[start]);
            }
            start++;
        }

        if (currentRow.length >= 1) {
            console.log(currentRow.join(' '));
        } else {
            console.log('(empty)')
        }
    }
}

// filterMatrix([
//     '1 2 3 3',
//     '3 5 7 8',
//     '3 2 2 1',
//     '3',
// ]);

// filterMatrix([
//     '2 1 1 1',
//     '1 1 1',
//     '3 7 3 3 1',
//     '2',
// ]);

// filterMatrix([
//     '1 2 3 3 2 1',
//     '5 2 2 1 1 0',
//     '3 3 1 3 3',
//     '2',
// ]);
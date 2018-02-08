function hungryProgrammer(portions, commands) {
    let mealsEaten = 0;

    for (let command of commands) {
        let args = command.split(' ');
        if (args[0] === 'End') {
           break;
        }

        if (args[0] === 'Serve') {
            if (portions.length > 0) {
                console.log(`${portions.pop()} served!`);
            }
        } else if (args[0] === 'Eat') {
            if (portions.length > 0) {
                console.log(`${portions.shift()} eaten`);
                mealsEaten++;
            }
        } else if (args[0] === 'Add') {
            if (args[1] !== undefined) {
                portions.unshift(args[1]);
            }
        } else if (args[0] === 'Consume') {
            let startIndex = Number(args[1]);
            let endIndex = Number(args[2]);

            if (checkIndex(startIndex, endIndex) && startIndex <= endIndex) {
                let removed = [];
                let left = [];

                for (let i = 0; i < portions.length; i++) {
                    if (i >= startIndex && i <= endIndex) {
                        removed.push(portions[i]);
                    } else {
                        left.push(portions[i]);
                    }
                }

                mealsEaten += removed.length;
                portions = left;
                console.log('Burp!')
            }
        } else if (args[0] === 'Shift') {
            let indexOne = Number(args[1]);
            let indexTwo = Number(args[2]);

            if (checkIndex(indexOne, indexTwo)) {
                let temp = portions[indexOne];
                portions[indexOne] = portions[indexTwo];
                portions[indexTwo] = temp;
            }
        }
    }

    if (portions.length === 0) {
        console.log('The food is gone');
    } else {
        console.log(`Meals left: ${portions.join(', ')}`);
    }
    console.log(`Meals eaten: ${mealsEaten}`);

    function checkIndex(indexOne, indexTwo) {
        return indexOne >= 0 && indexTwo >= 0 &&
            indexOne <= portions.length - 1 && indexTwo <= portions.length - 1 &&
            indexOne !== undefined && indexTwo !== undefined
    }
}

// hungryProgrammer(
//     ['chicken', 'steak', 'eggs'],
//     ['Serve', 'Eat', 'End', 'Consume 0 1']
// );

// hungryProgrammer(
//     ['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
//     ['Add spaghetti', 'Shift 0 1', 'Consume 1 4', 'End']
// );
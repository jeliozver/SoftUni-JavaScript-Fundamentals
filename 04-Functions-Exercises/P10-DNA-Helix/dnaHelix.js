function printDnaHelix(length) {
    let pattern = 'ATCGTTAGGG';
    let printed = 0;
    let counter = 0;
    let first = '';
    let second = '';

    while (printed !== length) {
        printed++;
        first = pattern[counter];
        second = pattern[counter + 1];
        counter += 2;
        if (counter > pattern.length - 1) counter = 0;

        if (printed % 4 === 1) {
            console.log(`**${first}${second}**`);
        } else if (printed % 4 === 0 || printed % 4 === 2) {
            console.log(`*${first}--${second}*`);
        } else if (printed % 4 === 3) {
            console.log(`${first}----${second}`);
        }
    }
}

// printDnaHelix(4);
// printDnaHelix(20);

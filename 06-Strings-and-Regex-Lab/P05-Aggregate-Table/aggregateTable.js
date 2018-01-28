function aggregateTable(table) {
    let sum = 0;
    let towns = [];

    for (let i = 0; i < table.length; i++) {
        let args = table[i]
            .split('|')
            .filter(x => x !== '');

        let townName = args[0].trim();
        let income = Number(args[1].trim());

        towns.push(townName);
        sum += income;
    }

    console.log(towns.join(', '));
    console.log(sum);
}

// aggregateTable(['| Sofia           | 300',
//     '| Veliko Tarnovo  | 500',
//     '| Yambol          | 275']
// );
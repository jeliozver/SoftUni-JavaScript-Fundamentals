function toJson(args) {
    let result = [];
    let props = args.shift()
        .split('|')
        .filter(e => e !== '')
        .map(e => e.trim());

    for (let line of args) {
        let info = line.split('|')
            .filter(e => e !== '')
            .map(e => e.trim());

        let town = {};

        for (let i = 0; i < info.length; i++) {
            let check = Number(info[i]);
            if (isNaN(check)) {
                town[props[i]] = info[i];
            } else {
                town[props[i]] = check;
            }
        }

        result.push(town);
    }

    return JSON.stringify(result);
}

// console.log(toJson([
//     '| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |',
// ]));

// toJson([
//     '| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |',
// ]);

console.log(toJson([
    '| Country | Capital | Population | President |',
    '| Bulgaria | Sofia | 7101859 | Rumen Radev |',
    '| Poland | Warsaw | 38422346 | Andrzej Duda |',
    '| USA | Washington | 32571917 | Donald Trump |',
]));
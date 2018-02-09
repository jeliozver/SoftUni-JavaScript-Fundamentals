function vladkoNotebook(input) {
    let notebook = {};
    for (let line of input) {
        let args = line.split('|');
        let color = args[0];
        let action = args[1];

        if (!notebook.hasOwnProperty(color)) {
            notebook[color] = {
                age: '',
                name: '',
                opponents: [],
                rank: '',
                wins: 0,
                losses: 0,
            }
        }

        if (action === 'name') {
            notebook[color].name = args[2];
        } else if (action === 'age') {
           notebook[color].age = args[2];
        } else {
            notebook[color].opponents.push(args[2]);
            if (action === 'win') {
                notebook[color].wins += 1;
            } else {
                notebook[color].losses += 1;
            }
        }
    }

    let keysToRemove = [];
    for (let key in notebook) {
        let values = notebook[key];
        if (values.name === '' || values.age === '') {
            keysToRemove.push(key);
        } else {
            let rank = ((values.wins + 1) / (values.losses + 1)).toFixed(2);
            notebook[key].rank = rank.toString();
            delete notebook[key].wins;
            delete notebook[key].losses;
        }
    }

    for (let key of keysToRemove) {
       delete notebook[key];
    }

    let sorted = Object.entries(notebook).sort();
    let map = new Map();
    for (let [entry, values] of sorted) {
        values.opponents = values.opponents.sort();
        map.set(entry, values);
    }

    let result = mapToObj(map);
    console.log(JSON.stringify(result));

    function mapToObj(map) {
        return Array.from(map).reduce((obj, [key, value]) => (
            Object.assign(obj, {[key]: value})
        ), {});
    }
}

// vladkoNotebook([
//     'purple|age|99',
//     'red|age|44',
//     'blue|win|pesho',
//     'blue|win|mariya',
//     'purple|loss|Kiko',
//     'purple|loss|Kiko',
//     'purple|loss|Kiko',
//     'purple|loss|Yana',
//     'purple|loss|Yana',
//     'purple|loss|Manov',
//     'purple|loss|Manov',
//     'red|name|gosho',
//     'blue|win|Vladko',
//     'purple|loss|Yana',
//     'purple|name|VladoKaramfilov',
//     'blue|age|21',
//     'blue|loss|Pesho',
// ]);
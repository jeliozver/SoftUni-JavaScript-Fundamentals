function sumByTown(args) {
    let result = {};
    for (let i = 0; i < args.length; i += 2) {
        let name = args[i];
        let income = Number(args[i + 1]);
        if (!result.hasOwnProperty(name)) {
            result[name] = 0;
        }
        result[name] += income;
    }

    return JSON.stringify(result);
}

// console.log(sumByTown([
//     'Sofia',
//     '20',
//     'Varna',
//     '3',
//     'Sofia',
//     '5',
//     'Varna',
//     '4',
// ]));

// console.log(sumByTown([
//     'Sofia',
//     '20',
//     'Varna',
//     '3',
//     'sofia',
//     '5',
//     'varna',
//     '4',
// ]));
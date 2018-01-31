function storeTownsPopulation(input) {
    let result = new Map();

    for (let line of input) {
        let tokens = line.split(/\s*<->\s*/);
        let town = tokens[0];
        let population = Number(tokens[1]);
        
        if (!result.has(town)) {
            result.set(town, population)
        } else {
            result.set(town, result.get(town) + population);
        }
    }

    for (let [key, value] of result) {
        console.log(`${key} : ${value}`)
    }
}

// storeTownsPopulation([
//     'Sofia<-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000',
// ]);

// storeTownsPopulation([
//     'Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000',
// ]);
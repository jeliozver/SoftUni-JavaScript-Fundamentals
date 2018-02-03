function airport(input) {
    let planes = new Set();
    let registry = new Map();

    for (let line of input) {
        let args = line.split(' ');
        let [plane, town, passengersCount, action] = args;
        let passengers = Number(passengersCount);

        if (action === 'land') {
            if (planes.has(plane)) {
                continue;
            } else {
                planes.add(plane);
            }
        } else {
            if (!planes.has(plane)) {
                continue;
            } else {
                planes.delete(plane);
            }
        }

        if (!registry.has(town)) {
            registry.set(town, {
                arrivals: 0,
                departures: 0,
                planesLanded: new Set(),
            });
        }

        registry.get(town).planesLanded.add(plane);

        if (action === 'land') {
            registry.get(town).arrivals += passengers;
        } else {
            registry.get(town).departures += passengers;
        }
    }

    let planesArr = [...planes];
    planesArr = sortPlanes(planesArr);
    console.log('Planes left:');
    for (let plane of planesArr) {
        console.log(`- ${plane}`);
    }

    let townsList = [...registry];
    townsList = sortTowns(townsList);
    for (let [town, stats] of townsList) {
        console.log(town);
        console.log(`Arrivals: ${stats.arrivals}`);
        console.log(`Departures: ${stats.departures}`);
        console.log('Planes:');

        let planesArr = [...stats.planesLanded];
        planesArr = sortPlanes(planesArr);
        for (let plane of planesArr) {
            console.log(`-- ${plane}`)
        }
    }

    function sortTowns(arr) {
        arr.sort(function (a, b) {
            return a[1].arrivals !== b[1].arrivals
                ? b[1].arrivals - a[1].arrivals
                : a[0].localeCompare(b[0])
        });

        return arr;
    }

    function sortPlanes(arr) {
        arr.sort(function (a, b) {
            return a.localeCompare(b);
        });

        return arr;
    }
}

// airport([
//     "Boeing474 Madrid 300",
//     "AirForceOne WashingtonDC 178 land",
//     "Airbus London 265 depart",
//     "ATR72 WashingtonDC 272 land",
//     "ATR72 Madrid 135 depart",
// ]);

// airport([
//     "Airbus Paris 356 land",
//     "Airbus London 321 land",
//     "Airbus Paris 213 depart",
//     "Airbus Ljubljana 250 land",
// ]);